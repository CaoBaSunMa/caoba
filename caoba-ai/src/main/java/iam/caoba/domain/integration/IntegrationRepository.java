package iam.caoba.domain.integration;

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
public class IntegrationRepository {

    private final JdbcTemplate jdbc;

    private final RowMapper<Integration> rowMapper = (rs, rowNum) -> Integration.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .appName(rs.getString("app_name"))
            .appIcon(rs.getString("app_icon"))
            .category(rs.getString("category"))
            .status(Integration.Status.valueOf(rs.getString("status")))
            .config(rs.getString("config"))
            .connectedAt(rs.getTimestamp("connected_at") != null ? rs.getTimestamp("connected_at").toLocalDateTime() : null)
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    public IntegrationRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Integration> findByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM integrations WHERE user_id = ? ORDER BY created_at DESC",
                rowMapper, userId
        );
    }

    public List<Integration> findByUserIdAndStatus(Long userId, Integration.Status status) {
        return jdbc.query(
                "SELECT * FROM integrations WHERE user_id = ? AND status = ? ORDER BY created_at DESC",
                rowMapper, userId, status.name()
        );
    }

    public Optional<Integration> findById(Long id) {
        List<Integration> list = jdbc.query("SELECT * FROM integrations WHERE id = ?", rowMapper, id);
        return list.stream().findFirst();
    }

    public Long insert(Integration integration) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO integrations (user_id, app_name, app_icon, category, status, config, connected_at, created_at) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS
            );
            ps.setLong(1, integration.getUserId());
            ps.setString(2, integration.getAppName());
            ps.setString(3, integration.getAppIcon());
            ps.setString(4, integration.getCategory());
            ps.setString(5, integration.getStatus().name());
            ps.setString(6, integration.getConfig());
            ps.setTimestamp(7, integration.getConnectedAt() != null ? Timestamp.valueOf(integration.getConnectedAt()) : null);
            ps.setTimestamp(8, integration.getCreatedAt() != null ? Timestamp.valueOf(integration.getCreatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int update(Integration integration) {
        return jdbc.update(
                "UPDATE integrations SET app_name=?, app_icon=?, category=?, status=?, config=?, connected_at=? WHERE id=?",
                integration.getAppName(), integration.getAppIcon(), integration.getCategory(),
                integration.getStatus().name(), integration.getConfig(),
                integration.getConnectedAt() != null ? Timestamp.valueOf(integration.getConnectedAt()) : null,
                integration.getId()
        );
    }

    public int deleteById(Long id) {
        return jdbc.update("DELETE FROM integrations WHERE id = ?", id);
    }
}
