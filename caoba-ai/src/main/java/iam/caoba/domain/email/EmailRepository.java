package iam.caoba.domain.email;

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

@Repository
public class EmailRepository {

    private final JdbcTemplate jdbc;

    public EmailRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private final RowMapper<Email> emailRowMapper = (rs, i) -> Email.builder()
            .id(rs.getLong("id"))
            .fromUserId(rs.getObject("from_user_id") != null ? rs.getLong("from_user_id") : null)
            .fromAddress(rs.getString("from_address"))
            .subject(rs.getString("subject"))
            .body(rs.getString("body"))
            .isRead(rs.getBoolean("is_read"))
            .isStarred(rs.getBoolean("is_starred"))
            .folder(rs.getString("folder"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    private final RowMapper<EmailRecipient> recipientRowMapper = (rs, i) -> EmailRecipient.builder()
            .id(rs.getLong("id"))
            .emailId(rs.getLong("email_id"))
            .userId(rs.getObject("user_id") != null ? rs.getLong("user_id") : null)
            .address(rs.getString("address"))
            .type(rs.getString("type"))
            .build();

    // ========== Email CRUD ==========

    /** 鑾峰彇鐢ㄦ埛鍦ㄦ寚瀹氭枃浠跺す涓殑閭欢锛堟敹浠?TO/CC/BCC 鏀朵欢浜猴紝鍙戜欢=from_user_id锛?*/
    public List<Email> findByUserIdAndFolder(Long userId, String folder) {
        return jdbc.query(
                "SELECT e.* FROM emails e " +
                "WHERE (e.from_user_id = ? AND e.folder = ?) " +
                "OR (e.id IN (SELECT er.email_id FROM email_recipients er WHERE er.user_id = ?) AND e.folder = ?) " +
                "ORDER BY e.created_at DESC",
                emailRowMapper, userId, folder, userId, folder);
    }

    public List<Email> findByFolder(String folder) {
        return jdbc.query(
                "SELECT * FROM emails WHERE folder = ? ORDER BY created_at DESC",
                emailRowMapper, folder);
    }

    public Email findById(Long id) {
        List<Email> list = jdbc.query(
                "SELECT * FROM emails WHERE id = ?", emailRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public Long insertEmail(Email email) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO emails (from_user_id, from_address, subject, body, is_read, is_starred, folder, created_at) VALUES (?,?,?,?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setObject(1, email.getFromUserId());
            ps.setString(2, email.getFromAddress());
            ps.setString(3, email.getSubject());
            ps.setString(4, email.getBody());
            ps.setBoolean(5, email.isRead());
            ps.setBoolean(6, email.isStarred());
            ps.setString(7, email.getFolder() != null ? email.getFolder() : "INBOX");
            ps.setTimestamp(8, Timestamp.valueOf(email.getCreatedAt() != null ? email.getCreatedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateEmail(Email email) {
        jdbc.update(
                "UPDATE emails SET subject=?, body=?, is_read=?, is_starred=?, folder=? WHERE id=?",
                email.getSubject(), email.getBody(), email.isRead(), email.isStarred(),
                email.getFolder(), email.getId());
    }

    public void updateReadStatus(Long id, boolean isRead) {
        jdbc.update("UPDATE emails SET is_read = ? WHERE id = ?", isRead, id);
    }

    public void updateStarredStatus(Long id, boolean isStarred) {
        jdbc.update("UPDATE emails SET is_starred = ? WHERE id = ?", isStarred, id);
    }

    public void moveToFolder(Long id, String folder) {
        jdbc.update("UPDATE emails SET folder = ? WHERE id = ?", folder, id);
    }

    public void deleteEmail(Long id) {
        jdbc.update("DELETE FROM emails WHERE id = ?", id);
    }

    // ========== Recipient CRUD ==========

    public List<EmailRecipient> findRecipientsByEmailId(Long emailId) {
        return jdbc.query(
                "SELECT * FROM email_recipients WHERE email_id = ?",
                recipientRowMapper, emailId);
    }

    public List<EmailRecipient> findRecipientsByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM email_recipients WHERE user_id = ?",
                recipientRowMapper, userId);
    }

    public Long insertRecipient(EmailRecipient recipient) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO email_recipients (email_id, user_id, address, type) VALUES (?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, recipient.getEmailId());
            ps.setObject(2, recipient.getUserId());
            ps.setString(3, recipient.getAddress());
            ps.setString(4, recipient.getType() != null ? recipient.getType() : "TO");
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void deleteRecipientsByEmailId(Long emailId) {
        jdbc.update("DELETE FROM email_recipients WHERE email_id = ?", emailId);
    }

    // ========== Statistics ==========

    public int countTodayEmails(Long userId) {
        Integer count = jdbc.queryForObject(
                "SELECT COUNT(*) FROM emails WHERE from_user_id = ? AND DATE(created_at) = CURDATE()",
                Integer.class, userId);
        return count != null ? count : 0;
    }

    public int countTotalTodayEmails() {
        Integer count = jdbc.queryForObject(
                "SELECT COUNT(*) FROM emails WHERE DATE(created_at) = CURDATE()",
                Integer.class);
        return count != null ? count : 0;
    }
}
