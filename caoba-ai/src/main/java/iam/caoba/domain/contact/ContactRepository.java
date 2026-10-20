package iam.caoba.domain.contact;

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
public class ContactRepository {

    private final JdbcTemplate jdbc;

    public ContactRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private final RowMapper<Contact> rowMapper = (rs, i) -> Contact.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .firstName(rs.getString("first_name"))
            .lastName(rs.getString("last_name"))
            .email(rs.getString("email"))
            .phone(rs.getString("phone"))
            .company(rs.getString("company"))
            .position(rs.getString("position"))
            .location(rs.getString("location"))
            .avatar(rs.getString("avatar"))
            .notes(rs.getString("notes"))
            .labels(rs.getString("labels"))
            .starred(rs.getBoolean("is_starred"))
            .archived(rs.getBoolean("is_archived"))
            .blocked(rs.getBoolean("is_blocked"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    public Contact findById(Long id) {
        List<Contact> list = jdbc.query("SELECT * FROM contacts WHERE id = ?", rowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    /** 鍏ㄩ儴鑱旂郴浜猴紙鍚綊妗ｏ紝鐢ㄤ簬缁熻锛?*/
    public List<Contact> findAllByUserId(Long userId) {
        return jdbc.query("SELECT * FROM contacts WHERE user_id = ? ORDER BY created_at DESC", rowMapper, userId);
    }

    /** 闈炲綊妗ｈ仈绯讳汉 */
    public List<Contact> findByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM contacts WHERE user_id = ? AND is_archived = FALSE ORDER BY created_at DESC",
                rowMapper, userId);
    }

    /** 閲嶈锛堝凡鏄熸爣锛夎仈绯讳汉 */
    public List<Contact> findStarredByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM contacts WHERE user_id = ? AND is_starred = TRUE AND is_archived = FALSE ORDER BY created_at DESC",
                rowMapper, userId);
    }

    /** 宸插綊妗ｈ仈绯讳汉 */
    public List<Contact> findArchivedByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM contacts WHERE user_id = ? AND is_archived = TRUE ORDER BY created_at DESC",
                rowMapper, userId);
    }

    public List<Contact> searchByUserId(Long userId, String keyword) {
        String like = "%" + keyword + "%";
        return jdbc.query(
                "SELECT * FROM contacts WHERE user_id = ? AND is_archived = FALSE AND (first_name LIKE ? OR last_name LIKE ? "
                        + "OR email LIKE ? OR phone LIKE ? OR company LIKE ?) ORDER BY created_at DESC",
                rowMapper, userId, like, like, like, like, like);
    }

    public List<Contact> findByUserIdAndLabel(Long userId, String label) {
        return jdbc.query(
                "SELECT * FROM contacts WHERE user_id = ? AND is_archived = FALSE AND JSON_CONTAINS(labels, ?) ORDER BY created_at DESC",
                rowMapper, userId, "\"" + label + "\"");
    }

    public Long insert(Contact contact) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO contacts (user_id, first_name, last_name, email, phone, company, position, "
                            + "location, avatar, notes, labels, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, contact.getUserId());
            ps.setString(2, contact.getFirstName());
            ps.setString(3, contact.getLastName());
            ps.setString(4, contact.getEmail());
            ps.setString(5, contact.getPhone());
            ps.setString(6, contact.getCompany());
            ps.setString(7, contact.getPosition());
            ps.setString(8, contact.getLocation());
            ps.setString(9, contact.getAvatar());
            ps.setString(10, contact.getNotes());
            ps.setString(11, contact.getLabels() != null ? contact.getLabels() : "[]");
            ps.setTimestamp(12, Timestamp.valueOf(LocalDateTime.now()));
            ps.setTimestamp(13, Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void update(Contact contact) {
        jdbc.update("UPDATE contacts SET first_name=?, last_name=?, email=?, phone=?, company=?, position=?, "
                        + "location=?, avatar=?, notes=?, labels=?, updated_at=? WHERE id=?",
                contact.getFirstName(), contact.getLastName(), contact.getEmail(), contact.getPhone(),
                contact.getCompany(), contact.getPosition(), contact.getLocation(),
                contact.getAvatar(), contact.getNotes(), contact.getLabels(),
                Timestamp.valueOf(LocalDateTime.now()), contact.getId());
    }

    public void setStarred(Long id, boolean starred) {
        jdbc.update("UPDATE contacts SET is_starred = ?, updated_at = NOW() WHERE id = ?", starred, id);
    }

    public void setArchived(Long id, boolean archived) {
        jdbc.update("UPDATE contacts SET is_archived = ?, updated_at = NOW() WHERE id = ?", archived, id);
    }

    public void setBlocked(Long id, boolean blocked) {
        jdbc.update("UPDATE contacts SET is_blocked = ?, updated_at = NOW() WHERE id = ?", blocked, id);
    }

    public void deleteById(Long id) {
        jdbc.update("DELETE FROM contacts WHERE id=?", id);
    }

    public long countByUserId(Long userId) {
        Long count = jdbc.queryForObject("SELECT COUNT(*) FROM contacts WHERE user_id=?", Long.class, userId);
        return count != null ? count : 0;
    }
}
