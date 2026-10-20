package iam.caoba.domain.gallery;

import iam.caoba.common.ResourceNotFoundException;

import iam.caoba.domain.filemanager.FileEntity;
import iam.caoba.domain.filemanager.FileRepository;
import iam.caoba.domain.filemanager.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GalleryService {

    private final GalleryRepository galleryRepository;
    private final FileRepository fileRepository;
    private final FileService fileService;

    // ── Category ──

    public List<GalleryCategory> listCategories(Long userId) {
        return galleryRepository.findCategoriesByUserId(userId);
    }

    public GalleryCategory createCategory(Long userId, String name) {
        GalleryCategory cat = GalleryCategory.builder()
                .userId(userId)
                .name(name)
                .createdAt(LocalDateTime.now())
                .build();
        Long id = galleryRepository.insertCategory(cat);
        cat.setId(id);
        return cat;
    }

    public GalleryCategory updateCategory(Long id, String name) {
        GalleryCategory cat = galleryRepository.findCategoryById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found: " + id));
        cat.setName(name);
        galleryRepository.updateCategory(cat);
        return cat;
    }

    public void deleteCategory(Long id) {
        galleryRepository.deleteCategory(id);
    }

    // ── Media (reuses file storage) ──

    public List<FileEntity> listMedia(Long userId, Long categoryId) {
        List<Long> fileIds;
        if (categoryId != null) {
            fileIds = galleryRepository.findFileIdsByCategory(userId, categoryId);
        } else {
            fileIds = galleryRepository.findAllMediaFileIds(userId);
        }
        if (fileIds.isEmpty()) {
            return Collections.emptyList();
        }
        return fileIds.stream()
                .map(id -> fileRepository.findById(id).orElse(null))
                .filter(e -> e != null && !Boolean.TRUE.equals(e.getIsDeleted()))
                .collect(Collectors.toList());
    }

    public List<FileEntity> mediaWithStatus(Long userId, Long categoryId) {
        return fileService.markOnDisk(listMedia(userId, categoryId));
    }

    public void assignMedia(Long userId, Long categoryId, Long fileId) {
        galleryRepository.assignFileToCategory(userId, categoryId, fileId);
    }

    public void removeMedia(Long userId, Long fileId) {
        galleryRepository.removeFileFromCategory(userId, fileId);
    }
}
