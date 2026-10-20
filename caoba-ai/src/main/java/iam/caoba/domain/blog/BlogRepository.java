package iam.caoba.domain.blog;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public class BlogRepository {

    private final JdbcTemplate jdbc;

    private final RowMapper<BlogPost> rowMapper = (rs, rowNum) -> BlogPost.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .title(rs.getString("title"))
            .slug(rs.getString("slug"))
            .content(rs.getString("content"))
            .excerpt(rs.getString("excerpt"))
            .coverImage(rs.getString("cover_image"))
            .status(BlogPost.Status.valueOf(rs.getString("status")))
            .category(rs.getString("category"))
            .tags(rs.getString("tags"))
            .seoTitle(rs.getString("seo_title"))
            .seoDescription(rs.getString("seo_description"))
            .views(rs.getInt("views"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    public BlogRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<BlogPost> findByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM blog_posts WHERE user_id = ? ORDER BY created_at DESC",
                rowMapper, userId
        );
    }

    public List<BlogPost> findByStatus(Long userId, BlogPost.Status status) {
        return jdbc.query(
                "SELECT * FROM blog_posts WHERE user_id = ? AND status = ? ORDER BY created_at DESC",
                rowMapper, userId, status.name()
        );
    }

    public List<BlogPost> findByCategory(Long userId, String category) {
        return jdbc.query(
                "SELECT * FROM blog_posts WHERE user_id = ? AND category = ? ORDER BY created_at DESC",
                rowMapper, userId, category
        );
    }

    public Optional<BlogPost> findById(Long id) {
        List<BlogPost> list = jdbc.query("SELECT * FROM blog_posts WHERE id = ?", rowMapper, id);
        return list.stream().findFirst();
    }

    public Optional<BlogPost> findBySlug(String slug) {
        List<BlogPost> list = jdbc.query("SELECT * FROM blog_posts WHERE slug = ?", rowMapper, slug);
        return list.stream().findFirst();
    }

    public boolean existsSlug(String slug, Long excludeId) {
        String sql = "SELECT COUNT(*) FROM blog_posts WHERE slug = ?";
        Long count;
        if (excludeId != null) {
            count = jdbc.queryForObject(sql + " AND id != ?", Long.class, slug, excludeId);
        } else {
            count = jdbc.queryForObject(sql, Long.class, slug);
        }
        return count != null && count > 0;
    }

    public Long insert(BlogPost post) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO blog_posts (user_id, title, slug, content, excerpt, cover_image, status, category, tags, seo_title, seo_description, views, created_at, updated_at) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS
            );
            ps.setLong(1, post.getUserId());
            ps.setString(2, post.getTitle());
            ps.setString(3, post.getSlug());
            ps.setString(4, post.getContent());
            ps.setString(5, post.getExcerpt());
            ps.setString(6, post.getCoverImage());
            ps.setString(7, post.getStatus().name());
            ps.setString(8, post.getCategory());
            ps.setString(9, post.getTags());
            ps.setString(10, post.getSeoTitle());
            ps.setString(11, post.getSeoDescription());
            ps.setInt(12, post.getViews() != null ? post.getViews() : 0);
            ps.setTimestamp(13, post.getCreatedAt() != null ? Timestamp.valueOf(post.getCreatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            ps.setTimestamp(14, post.getUpdatedAt() != null ? Timestamp.valueOf(post.getUpdatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int update(BlogPost post) {
        return jdbc.update(
                "UPDATE blog_posts SET title=?, slug=?, content=?, excerpt=?, cover_image=?, status=?, category=?, tags=?, seo_title=?, seo_description=?, updated_at=? WHERE id=?",
                post.getTitle(), post.getSlug(), post.getContent(), post.getExcerpt(), post.getCoverImage(),
                post.getStatus().name(), post.getCategory(), post.getTags(), post.getSeoTitle(), post.getSeoDescription(),
                Timestamp.valueOf(LocalDateTime.now()), post.getId()
        );
    }

    public int incrementViews(Long id) {
        return jdbc.update("UPDATE blog_posts SET views = views + 1 WHERE id = ?", id);
    }

    public int deleteById(Long id) {
        return jdbc.update("DELETE FROM blog_posts WHERE id = ?", id);
    }
}
