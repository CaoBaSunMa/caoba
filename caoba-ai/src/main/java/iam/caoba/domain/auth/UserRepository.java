package iam.caoba.domain.auth;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class UserRepository implements UserDetailsService {

    private final JdbcTemplate jdbc;

    public UserRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private final RowMapper<User> rowMapper = (rs, i) -> User.builder()
            .id(rs.getLong("id"))
            .username(rs.getString("username"))
            .email(rs.getString("email"))
            .password(rs.getString("password"))
            .fullName(rs.getString("full_name"))
            .avatar(rs.getString("avatar"))
            .phone(rs.getString("phone"))
            .role(rs.getString("role"))
            .enabled(rs.getBoolean("enabled"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUsername(username);
        if (user == null) throw new UsernameNotFoundException("User not found: " + username);
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities("ROLE_" + user.getRole())
                .accountLocked(false)
                .disabled(!user.isEnabled())
                .build();
    }

    public User findByUsername(String username) {
        List<User> list = jdbc.query("SELECT * FROM users WHERE username = ?", rowMapper, username);
        return list.isEmpty() ? null : list.get(0);
    }

    public User findByEmail(String email) {
        List<User> list = jdbc.query("SELECT * FROM users WHERE email = ?", rowMapper, email);
        return list.isEmpty() ? null : list.get(0);
    }

    public User findById(Long id) {
        List<User> list = jdbc.query("SELECT * FROM users WHERE id = ?", rowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public List<User> findAll() {
        return jdbc.query("SELECT * FROM users ORDER BY created_at DESC", rowMapper);
    }

    public Long insert(User user) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO users (username, email, password, full_name, avatar, phone, role, enabled, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)",
                Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getPassword());
            ps.setString(4, user.getFullName());
            ps.setString(5, user.getAvatar());
            ps.setString(6, user.getPhone());
            ps.setString(7, user.getRole());
            ps.setBoolean(8, user.isEnabled());
            ps.setTimestamp(9, Timestamp.valueOf(LocalDateTime.now()));
            ps.setTimestamp(10, Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void update(User user) {
        jdbc.update("UPDATE users SET full_name=?, avatar=?, phone=?, updated_at=? WHERE id=?",
                user.getFullName(), user.getAvatar(), user.getPhone(),
                Timestamp.valueOf(LocalDateTime.now()), user.getId());
    }
}
