package iam.caoba.domain.gallery;

import iam.caoba.common.ApiResponse;
import iam.caoba.domain.filemanager.FileEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/gallery")
@RequiredArgsConstructor
public class GalleryController {

    private final GalleryService galleryService;

    // ── Categories ──

    @GetMapping("/categories")
    public ApiResponse<List<GalleryCategory>> listCategories(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(galleryService.listCategories(userId));
    }

    @PostMapping("/categories")
    public ApiResponse<GalleryCategory> createCategory(
            @RequestAttribute("userId") Long userId,
            @RequestBody Map<String, String> body) {
        return ApiResponse.ok("Category created", galleryService.createCategory(userId, body.get("name")));
    }

    @PutMapping("/categories/{id}")
    public ApiResponse<GalleryCategory> updateCategory(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        return ApiResponse.ok(galleryService.updateCategory(id, body.get("name")));
    }

    @DeleteMapping("/categories/{id}")
    public ApiResponse<Void> deleteCategory(@PathVariable Long id) {
        galleryService.deleteCategory(id);
        return ApiResponse.ok("Category deleted", null);
    }

    // ── Media ──

    @GetMapping("/media")
    public ApiResponse<List<FileEntity>> listMedia(
            @RequestAttribute("userId") Long userId,
            @RequestParam(value = "categoryId", required = false) Long categoryId) {
        return ApiResponse.ok(galleryService.mediaWithStatus(userId, categoryId));
    }

    @PostMapping("/media")
    public ApiResponse<Void> assignMedia(
            @RequestAttribute("userId") Long userId,
            @RequestParam Long categoryId,
            @RequestParam Long fileId) {
        galleryService.assignMedia(userId, categoryId, fileId);
        return ApiResponse.ok("Media assigned", null);
    }

    @DeleteMapping("/media/{fileId}")
    public ApiResponse<Void> removeMedia(
            @RequestAttribute("userId") Long userId,
            @PathVariable Long fileId) {
        galleryService.removeMedia(userId, fileId);
        return ApiResponse.ok("Media removed", null);
    }
}
