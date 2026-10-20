package iam.caoba.domain.filemanager;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileService {

    private final FileRepository fileRepository;

    @Value("${file.upload-dir:./uploads}")
    private String uploadDir;

    public FileEntity upload(MultipartFile multipartFile, Long userId, String folder) throws IOException {
        String originalName = multipartFile.getOriginalFilename();
        String ext = originalName != null && originalName.contains(".")
                ? originalName.substring(originalName.lastIndexOf("."))
                : "";
        String storedName = UUID.randomUUID() + ext;
        String relativePath = (folder != null ? folder + "/" : "") + storedName;

        Path targetDir = Paths.get(uploadDir, folder != null ? folder : "");
        Files.createDirectories(targetDir);
        Files.copy(multipartFile.getInputStream(), targetDir.resolve(storedName), StandardCopyOption.REPLACE_EXISTING);

        FileEntity file = FileEntity.builder()
                .userId(userId)
                .name(storedName)
                .originalName(originalName)
                .path(relativePath)
                .type(multipartFile.getContentType())
                .size(multipartFile.getSize())
                .folder(folder)
                .isStarred(false)
                .isDeleted(false)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        Long id = fileRepository.insert(file);
        file.setId(id);
        return file;
    }

    public Path getDownloadPath(Long fileId) {
        FileEntity file = fileRepository.findById(fileId)
                .orElseThrow(() -> new ResourceNotFoundException("File not found: " + fileId));
        return Paths.get(uploadDir, file.getPath());
    }

    public FileEntity getById(Long id) {
        return fileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("File not found: " + id));
    }

    public List<FileEntity> listByUser(Long userId) {
        return markOnDisk(fileRepository.findByUserId(userId));
    }

    public List<FileEntity> listByFolder(Long userId, String folder) {
        return markOnDisk(fileRepository.findByUserIdAndFolder(userId, folder));
    }

    public List<FileEntity> search(Long userId, String keyword) {
        return markOnDisk(fileRepository.search(userId, keyword));
    }

    public List<FileEntity> listStarred(Long userId) {
        return markOnDisk(fileRepository.findStarred(userId));
    }

    public List<FileEntity> listTrashed(Long userId) {
        return markOnDisk(fileRepository.findTrashed(userId));
    }

    /** 鏍囪纾佺洏涓婃槸鍚﹀瓨鍦ㄧ墿鐞嗘枃浠讹紙绉嶅瓙璁板綍閫氬父鍦ㄧ鐩樻棤鏂囦欢锛?*/
    public List<FileEntity> markOnDisk(List<FileEntity> files) {
        for (FileEntity f : files) {
            f.setOnDisk(f.getPath() != null && Files.exists(Paths.get(uploadDir, f.getPath())));
        }
        return files;
    }

    public List<String> listFolders(Long userId) {
        return fileRepository.findDistinctFolders(userId);
    }

    public FileEntity moveFile(Long id, String newFolder) {
        FileEntity file = getById(id);
        String normalized = (newFolder == null || newFolder.isBlank()) ? "/" : newFolder.trim();
        String oldName = file.getName();
        try {
            // 鐗╃悊绉诲姩纾佺洏鏂囦欢锛堣嫢纾佺洏涓婁笉瀛樺湪鈥斺€斿绉嶅瓙璁板綍鈥斺€斿垯浠呮洿鏂拌矾寰勶級
            Path source = Paths.get(uploadDir, file.getPath());
            Path targetDir = Paths.get(uploadDir, normalized);
            if (Files.exists(source)) {
                Files.createDirectories(targetDir);
                Files.move(source, targetDir.resolve(oldName), StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (IOException e) {
            System.out.println("[moveFile] 磁盘文件不可用，仅更新路径记录 -> " + file.getName() + " (" + e.getMessage() + ")");
        }
        file.setFolder(normalized);
        file.setPath("/" + (normalized.equals("/") ? "" : normalized + "/") + oldName);
        file.setUpdatedAt(LocalDateTime.now());
        fileRepository.update(file);
        return file;
    }

    public FileEntity rename(Long id, String newName) {
        FileEntity file = getById(id);
        if (newName == null || newName.isBlank() || newName.trim().isEmpty()) {
            throw new RuntimeException("文件名不能为空");
        }
        // 仅更新显示名；磁盘存储名(name)与 path 保持不变，保证下载/预览仍指向真实文件
        file.setOriginalName(newName.trim());
        file.setUpdatedAt(LocalDateTime.now());
        fileRepository.update(file);
        return file;
    }

    public FileEntity toggleStar(Long id) {
        FileEntity file = getById(id);
        boolean newState = !Boolean.TRUE.equals(file.getIsStarred());
        fileRepository.updateStar(id, newState);
        file.setIsStarred(newState);
        return file;
    }

    public void trash(Long id) {
        fileRepository.softDelete(id);
    }

    public void restore(Long id) {
        fileRepository.restore(id);
    }

    public void permanentDelete(Long id) {
        fileRepository.deleteById(id);
    }
}
