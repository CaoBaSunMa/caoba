package iam.caoba.domain.blog;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
public class BlogController {

    private final BlogService blogService;

    @GetMapping("/posts")
    public ApiResponse<List<BlogPost>> listPosts(
            @RequestAttribute("userId") Long userId,
            @RequestParam(value = "status", required = false) BlogPost.Status status,
            @RequestParam(value = "category", required = false) String category) {
        List<BlogPost> posts;
        if (status != null) {
            posts = blogService.listByStatus(userId, status);
        } else if (category != null && !category.isBlank()) {
            posts = blogService.listByCategory(userId, category);
        } else {
            posts = blogService.listByUser(userId);
        }
        return ApiResponse.ok(posts);
    }

    @PostMapping("/posts")
    public ApiResponse<BlogPost> createPost(@RequestAttribute("userId") Long userId, @RequestBody BlogPost post) {
        post.setUserId(userId);
        return ApiResponse.ok("Post created", blogService.create(post));
    }

    @GetMapping("/posts/{slug}")
    public ApiResponse<BlogPost> getBySlug(@PathVariable String slug) {
        return ApiResponse.ok(blogService.getBySlug(slug));
    }

    @GetMapping("/posts/id/{id}")
    public ApiResponse<BlogPost> getById(@PathVariable Long id) {
        return ApiResponse.ok(blogService.getById(id));
    }

    @PutMapping("/posts/{id}")
    public ApiResponse<BlogPost> updatePost(@PathVariable Long id, @RequestBody BlogPost post) {
        return ApiResponse.ok("Post updated", blogService.update(id, post));
    }

    @PutMapping("/posts/{id}/publish")
    public ApiResponse<BlogPost> publish(@PathVariable Long id) {
        return ApiResponse.ok("Post published", blogService.publish(id));
    }

    @PutMapping("/posts/{id}/archive")
    public ApiResponse<BlogPost> archive(@PathVariable Long id) {
        return ApiResponse.ok("Post archived", blogService.archive(id));
    }

    @DeleteMapping("/posts/{id}")
    public ApiResponse<Void> deletePost(@PathVariable Long id) {
        blogService.delete(id);
        return ApiResponse.ok("Post deleted", null);
    }
}
