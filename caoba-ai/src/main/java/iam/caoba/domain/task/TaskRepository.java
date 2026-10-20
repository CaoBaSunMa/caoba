package iam.caoba.domain.task;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class TaskRepository {

    private final JdbcTemplate jdbc;

    public TaskRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private final RowMapper<Task> rowMapper = (rs, i) -> Task.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .title(rs.getString("title"))
            .description(rs.getString("description"))
            .status(rs.getString("status"))
            .priority(rs.getString("priority"))
            .dueDate(rs.getDate("due_date") != null ? rs.getDate("due_date").toLocalDate() : null)
            .startDate(rs.getDate("start_date") != null ? rs.getDate("start_date").toLocalDate() : null)
            .progress(rs.getObject("progress") != null ? rs.getInt("progress") : null)
            .assignedTo(rs.getObject("assigned_to") != null ? rs.getLong("assigned_to") : null)
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    public Task findById(Long id) {
        List<Task> list = jdbc.query("SELECT * FROM tasks WHERE id = ?", rowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public List<Task> findByUserId(Long userId) {
        return jdbc.query("SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC", rowMapper, userId);
    }

    public List<Task> findByUserIdAndStatus(Long userId, String status) {
        return jdbc.query("SELECT * FROM tasks WHERE user_id = ? AND status = ? ORDER BY created_at DESC",
                rowMapper, userId, status);
    }

    public List<Task> findByUserIdAndPriority(Long userId, String priority) {
        return jdbc.query("SELECT * FROM tasks WHERE user_id = ? AND priority = ? ORDER BY created_at DESC",
                rowMapper, userId, priority);
    }

    public List<Task> findByUserIdAndStatusAndPriority(Long userId, String status, String priority) {
        return jdbc.query("SELECT * FROM tasks WHERE user_id = ? AND status = ? AND priority = ? ORDER BY created_at DESC",
                rowMapper, userId, status, priority);
    }

    public Long insert(Task task) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO tasks (user_id, title, description, status, priority, due_date, start_date, progress, assigned_to, created_at, updated_at) "
                            + "VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, task.getUserId());
            ps.setString(2, task.getTitle());
            ps.setString(3, task.getDescription());
            ps.setString(4, task.getStatus() != null ? task.getStatus() : "TODO");
            ps.setString(5, task.getPriority() != null ? task.getPriority() : "MEDIUM");
            ps.setDate(6, task.getDueDate() != null ? java.sql.Date.valueOf(task.getDueDate()) : null);
            ps.setDate(7, task.getStartDate() != null ? java.sql.Date.valueOf(task.getStartDate()) : null);
            ps.setObject(8, task.getProgress() != null ? task.getProgress() : 0);
            ps.setObject(9, task.getAssignedTo());
            ps.setTimestamp(10, Timestamp.valueOf(LocalDateTime.now()));
            ps.setTimestamp(11, Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void update(Task task) {
        jdbc.update("UPDATE tasks SET title=?, description=?, status=?, priority=?, due_date=?, start_date=?, "
                        + "progress=?, assigned_to=?, updated_at=? WHERE id=?",
                task.getTitle(), task.getDescription(), task.getStatus(), task.getPriority(),
                task.getDueDate() != null ? java.sql.Date.valueOf(task.getDueDate()) : null,
                task.getStartDate() != null ? java.sql.Date.valueOf(task.getStartDate()) : null,
                task.getProgress(), task.getAssignedTo(),
                Timestamp.valueOf(LocalDateTime.now()), task.getId());
    }

    public void updateStatus(Long id, String status) {
        jdbc.update("UPDATE tasks SET status=?, updated_at=? WHERE id=?",
                status, Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public void updateProgress(Long id, Integer progress) {
        jdbc.update("UPDATE tasks SET progress=?, updated_at=? WHERE id=?",
                progress, Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public void deleteById(Long id) {
        jdbc.update("DELETE FROM tasks WHERE id=?", id);
    }

    public long countByUserId(Long userId) {
        Long count = jdbc.queryForObject("SELECT COUNT(*) FROM tasks WHERE user_id=?", Long.class, userId);
        return count != null ? count : 0;
    }
}
