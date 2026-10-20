package iam.caoba.domain.blog;

import iam.caoba.common.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    public List<BlogPost> listByUser(Long userId) {
        return blogRepository.findByUserId(userId);
    }

    public List<BlogPost> listByStatus(Long userId, BlogPost.Status status) {
        return blogRepository.findByStatus(userId, status);
    }

    public List<BlogPost> listByCategory(Long userId, String category) {
        return blogRepository.findByCategory(userId, category);
    }

    public BlogPost getById(Long id) {
        return blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("鏂囩珷涓嶅瓨鍦? " + id));
    }

    public BlogPost getBySlug(String slug) {
        BlogPost post = blogRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("鏂囩珷涓嶅瓨鍦? " + slug));
        blogRepository.incrementViews(post.getId());
        post.setViews(post.getViews() + 1);
        return post;
    }

    public BlogPost create(BlogPost post) {
        if (post.getSlug() == null || post.getSlug().isBlank()) {
            post.setSlug(generateSlug(post.getTitle()));
        }
        if (blogRepository.existsSlug(post.getSlug(), null)) {
            throw new RuntimeException("Slug already exists: " + post.getSlug());
        }
        if (post.getStatus() == null) {
            post.setStatus(BlogPost.Status.DRAFT);
        }
        if (post.getViews() == null) {
            post.setViews(0);
        }
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        Long id = blogRepository.insert(post);
        post.setId(id);
        return post;
    }

    public BlogPost update(Long id, BlogPost updates) {
        BlogPost existing = getById(id);
        if (updates.getTitle() != null) existing.setTitle(updates.getTitle());
        if (updates.getSlug() != null) {
            if (blogRepository.existsSlug(updates.getSlug(), id)) {
                throw new RuntimeException("Slug already exists: " + updates.getSlug());
            }
            existing.setSlug(updates.getSlug());
        }
        if (updates.getContent() != null) existing.setContent(updates.getContent());
        if (updates.getExcerpt() != null) existing.setExcerpt(updates.getExcerpt());
        if (updates.getCoverImage() != null) existing.setCoverImage(updates.getCoverImage());
        if (updates.getCategory() != null) existing.setCategory(updates.getCategory());
        if (updates.getTags() != null) existing.setTags(updates.getTags());
        if (updates.getSeoTitle() != null) existing.setSeoTitle(updates.getSeoTitle());
        if (updates.getSeoDescription() != null) existing.setSeoDescription(updates.getSeoDescription());
        if (updates.getStatus() != null) existing.setStatus(updates.getStatus());
        existing.setUpdatedAt(LocalDateTime.now());
        blogRepository.update(existing);
        return existing;
    }

    public BlogPost publish(Long id) {
        return changeStatus(id, BlogPost.Status.PUBLISHED);
    }

    public BlogPost archive(Long id) {
        return changeStatus(id, BlogPost.Status.ARCHIVED);
    }

    public BlogPost changeStatus(Long id, BlogPost.Status status) {
        BlogPost post = getById(id);
        post.setStatus(status);
        post.setUpdatedAt(LocalDateTime.now());
        blogRepository.update(post);
        return post;
    }

    public void delete(Long id) {
        blogRepository.deleteById(id);
    }

    private String generateSlug(String title) {
        if (title == null) return "";
        return title.toLowerCase(Locale.ROOT)
                .replaceAll("[^a-z0-9\\s-]", "")
                .replaceAll("\\s+", "-")
                .replaceAll("-+", "-")
                .replaceAll("^-|-$", "");
    }
}
