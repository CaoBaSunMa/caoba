package iam.caoba.domain.filemanager;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    @PostMapping("/upload")
    public ApiResponse<FileEntity> upload(
            @RequestParam("file") MultipartFile file,
            @RequestAttribute("userId") Long userId,
            @RequestParam(value = "folder", required = false) String folder) throws IOException {
        FileEntity saved = fileService.upload(file, userId, folder);
        return ApiResponse.ok("File uploaded", saved);
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<Resource> download(@PathVariable Long id) {
        FileEntity file = fileService.getById(id);
        Path path = fileService.getDownloadPath(id);
        Resource resource = new FileSystemResource(path.toFile());
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(file.getType() != null ? file.getType() : "application/octet-stream"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getOriginalName() + "\"")
                .body(resource);
    }

    @GetMapping
    public ApiResponse<List<FileEntity>> list(
            @RequestAttribute("userId") Long userId,
            @RequestParam(value = "folder", required = false) String folder,
            @RequestParam(value = "keyword", required = false) String keyword) {
        List<FileEntity> files;
        if (keyword != null && !keyword.isBlank()) {
            files = fileService.search(userId, keyword);
        } else if (folder != null && !folder.isBlank()) {
            files = fileService.listByFolder(userId, folder);
        } else {
            files = fileService.listByUser(userId);
        }
        return ApiResponse.ok(files);
    }

    @GetMapping("/starred")
    public ApiResponse<List<FileEntity>> starred(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(fileService.listStarred(userId));
    }

    @GetMapping("/trash")
    public ApiResponse<List<FileEntity>> listTrashed(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(fileService.listTrashed(userId));
    }

    @GetMapping("/folders")
    public ApiResponse<List<String>> folders(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(fileService.listFolders(userId));
    }

    @GetMapping("/{id}")
    public ApiResponse<FileEntity> getById(@PathVariable Long id) {
        return ApiResponse.ok(fileService.getById(id));
    }

    @PutMapping("/{id}/move")
    public ApiResponse<FileEntity> move(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ApiResponse.ok(fileService.moveFile(id, body.get("folder")));
    }

    @PutMapping("/{id}/rename")
    public ApiResponse<FileEntity> rename(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ApiResponse.ok(fileService.rename(id, body.get("name")));
    }

    @PutMapping("/{id}/star")
    public ApiResponse<FileEntity> toggleStar(@PathVariable Long id) {
        return ApiResponse.ok(fileService.toggleStar(id));
    }

    @PutMapping("/{id}/trash")
    public ApiResponse<Void> trash(@PathVariable Long id) {
        fileService.trash(id);
        return ApiResponse.ok("Moved to trash", null);
    }

    @PutMapping("/{id}/restore")
    public ApiResponse<Void> restore(@PathVariable Long id) {
        fileService.restore(id);
        return ApiResponse.ok("Restored", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        fileService.permanentDelete(id);
        return ApiResponse.ok("Deleted", null);
    }
}
