package iam.caoba.domain.gallery;

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
public class GalleryRepository {

    private final JdbcTemplate jdbc;

    private final RowMapper<GalleryCategory> categoryMapper = (rs, rowNum) -> GalleryCategory.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .name(rs.getString("name"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    public GalleryRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    // ── Category CRUD ──

    public List<GalleryCategory> findCategoriesByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM gallery_categories WHERE user_id = ? ORDER BY name",
                categoryMapper, userId
        );
    }

    public Optional<GalleryCategory> findCategoryById(Long id) {
        List<GalleryCategory> list = jdbc.query("SELECT * FROM gallery_categories WHERE id = ?", categoryMapper, id);
        return list.stream().findFirst();
    }

    public Long insertCategory(GalleryCategory cat) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO gallery_categories (user_id, name, created_at) VALUES (?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS
            );
            ps.setLong(1, cat.getUserId());
            ps.setString(2, cat.getName());
            ps.setTimestamp(3, Timestamp.valueOf(cat.getCreatedAt() != null ? cat.getCreatedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int updateCategory(GalleryCategory cat) {
        return jdbc.update("UPDATE gallery_categories SET name = ? WHERE id = ?",
                cat.getName(), cat.getId());
    }

    public int deleteCategory(Long id) {
        return jdbc.update("DELETE FROM gallery_categories WHERE id = ?", id);
    }

    // ── Media via files table (reuses FileManager) ──

    public List<Long> findFileIdsByCategory(Long userId, Long categoryId) {
        return jdbc.queryForList(
                "SELECT file_id FROM gallery_media WHERE user_id = ? AND category_id = ?",
                Long.class, userId, categoryId
        );
    }

    public void assignFileToCategory(Long userId, Long categoryId, Long fileId) {
        jdbc.update(
                "INSERT INTO gallery_media (user_id, category_id, file_id) VALUES (?, ?, ?) " +
                        "ON DUPLICATE KEY UPDATE category_id = ?",
                userId, categoryId, fileId, categoryId
        );
    }

    public void removeFileFromCategory(Long userId, Long fileId) {
        jdbc.update("DELETE FROM gallery_media WHERE user_id = ? AND file_id = ?", userId, fileId);
    }

    public List<Long> findAllMediaFileIds(Long userId) {
        return jdbc.queryForList(
                "SELECT file_id FROM gallery_media WHERE user_id = ?",
                Long.class, userId
        );
    }
}
