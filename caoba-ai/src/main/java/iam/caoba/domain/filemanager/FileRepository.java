package iam.caoba.domain.filemanager;

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
public class FileRepository {

    private final JdbcTemplate jdbc;

    private final RowMapper<FileEntity> rowMapper = (rs, rowNum) -> FileEntity.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .name(rs.getString("name"))
            .originalName(rs.getString("original_name"))
            .path(rs.getString("path"))
            .type(rs.getString("type"))
            .size(rs.getLong("size"))
            .folder(rs.getString("folder"))
            .isStarred(rs.getBoolean("is_starred"))
            .isDeleted(rs.getBoolean("is_deleted"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    public FileRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<FileEntity> findByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM files WHERE user_id = ? AND is_deleted = false ORDER BY created_at DESC",
                rowMapper, userId
        );
    }

    public List<FileEntity> findByUserIdAndFolder(Long userId, String folder) {
        return jdbc.query(
                "SELECT * FROM files WHERE user_id = ? AND folder = ? AND is_deleted = false ORDER BY created_at DESC",
                rowMapper, userId, folder
        );
    }

    public List<FileEntity> search(Long userId, String keyword) {
        String like = "%" + keyword + "%";
        return jdbc.query(
                "SELECT * FROM files WHERE user_id = ? AND is_deleted = false AND (name LIKE ? OR original_name LIKE ?) ORDER BY created_at DESC",
                rowMapper, userId, like, like
        );
    }

    public List<FileEntity> findStarred(Long userId) {
        return jdbc.query(
                "SELECT * FROM files WHERE user_id = ? AND is_starred = true AND is_deleted = false ORDER BY created_at DESC",
                rowMapper, userId
        );
    }

    public List<FileEntity> findTrashed(Long userId) {
        return jdbc.query(
                "SELECT * FROM files WHERE user_id = ? AND is_deleted = true ORDER BY updated_at DESC",
                rowMapper, userId
        );
    }

    public Optional<FileEntity> findById(Long id) {
        List<FileEntity> list = jdbc.query("SELECT * FROM files WHERE id = ?", rowMapper, id);
        return list.stream().findFirst();
    }

    public Long insert(FileEntity file) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO files (user_id, name, original_name, path, type, size, folder, is_starred, is_deleted, created_at, updated_at) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS
            );
            ps.setLong(1, file.getUserId());
            ps.setString(2, file.getName());
            ps.setString(3, file.getOriginalName());
            ps.setString(4, file.getPath());
            ps.setString(5, file.getType());
            ps.setLong(6, file.getSize());
            ps.setString(7, file.getFolder());
            ps.setBoolean(8, file.getIsStarred() != null && file.getIsStarred());
            ps.setBoolean(9, file.getIsDeleted() != null && file.getIsDeleted());
            ps.setTimestamp(10, file.getCreatedAt() != null ? Timestamp.valueOf(file.getCreatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            ps.setTimestamp(11, file.getUpdatedAt() != null ? Timestamp.valueOf(file.getUpdatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int update(FileEntity file) {
        return jdbc.update(
                "UPDATE files SET name=?, original_name=?, path=?, type=?, size=?, folder=?, is_starred=?, is_deleted=?, updated_at=? WHERE id=?",
                file.getName(), file.getOriginalName(), file.getPath(), file.getType(), file.getSize(),
                file.getFolder(), file.getIsStarred(), file.getIsDeleted(), Timestamp.valueOf(LocalDateTime.now()), file.getId()
        );
    }

    public int updateStar(Long id, boolean starred) {
        return jdbc.update("UPDATE files SET is_starred=?, updated_at=? WHERE id=?",
                starred, Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public int softDelete(Long id) {
        return jdbc.update("UPDATE files SET is_deleted=true, updated_at=? WHERE id=?",
                Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public int restore(Long id) {
        return jdbc.update("UPDATE files SET is_deleted=false, updated_at=? WHERE id=?",
                Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public int deleteById(Long id) {
        return jdbc.update("DELETE FROM files WHERE id=?", id);
    }

    public List<String> findDistinctFolders(Long userId) {
        return jdbc.queryForList(
                "SELECT DISTINCT folder FROM files WHERE user_id = ? AND is_deleted = false AND folder IS NOT NULL ORDER BY folder",
                String.class, userId
        );
    }
}
