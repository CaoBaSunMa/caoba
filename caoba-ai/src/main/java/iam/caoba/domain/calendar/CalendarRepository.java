package iam.caoba.domain.calendar;

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
public class CalendarRepository {

    private final JdbcTemplate jdbc;

    public CalendarRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private final RowMapper<CalendarEvent> eventRowMapper = (rs, i) -> CalendarEvent.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .title(rs.getString("title"))
            .description(rs.getString("description"))
            .startTime(rs.getTimestamp("start_time") != null ? rs.getTimestamp("start_time").toLocalDateTime() : null)
            .endTime(rs.getTimestamp("end_time") != null ? rs.getTimestamp("end_time").toLocalDateTime() : null)
            .allDay(rs.getBoolean("all_day"))
            .location(rs.getString("location"))
            .category(rs.getString("category"))
            .visibility(rs.getString("visibility"))
            .priority(rs.getString("priority"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    private final RowMapper<CalendarReminder> reminderRowMapper = (rs, i) -> CalendarReminder.builder()
            .id(rs.getLong("id"))
            .eventId(rs.getLong("event_id"))
            .userId(rs.getLong("user_id"))
            .remindAt(rs.getTimestamp("remind_at") != null ? rs.getTimestamp("remind_at").toLocalDateTime() : null)
            .frequency(rs.getString("frequency"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    // ========== Event CRUD ==========

    public List<CalendarEvent> findByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM calendar_events WHERE user_id = ? ORDER BY start_time",
                eventRowMapper, userId);
    }

    public List<CalendarEvent> findByUserIdAndDateRange(Long userId, LocalDateTime start, LocalDateTime end) {
        return jdbc.query(
                "SELECT * FROM calendar_events WHERE user_id = ? AND start_time >= ? AND start_time <= ? ORDER BY start_time",
                eventRowMapper, userId, Timestamp.valueOf(start), Timestamp.valueOf(end));
    }

    public CalendarEvent findById(Long id) {
        List<CalendarEvent> list = jdbc.query(
                "SELECT * FROM calendar_events WHERE id = ?", eventRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public Long insertEvent(CalendarEvent event) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO calendar_events (user_id, title, description, start_time, end_time, all_day, location, category, visibility, priority, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, event.getUserId());
            ps.setString(2, event.getTitle());
            ps.setString(3, event.getDescription());
            ps.setTimestamp(4, Timestamp.valueOf(event.getStartTime()));
            ps.setTimestamp(5, event.getEndTime() != null ? Timestamp.valueOf(event.getEndTime()) : null);
            ps.setBoolean(6, event.isAllDay());
            ps.setString(7, event.getLocation());
            ps.setString(8, event.getCategory());
            ps.setString(9, event.getVisibility() != null ? event.getVisibility() : "PUBLIC");
            ps.setString(10, event.getPriority() != null ? event.getPriority() : "MEDIUM");
            ps.setTimestamp(11, Timestamp.valueOf(event.getCreatedAt() != null ? event.getCreatedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateEvent(CalendarEvent event) {
        jdbc.update(
                "UPDATE calendar_events SET title=?, description=?, start_time=?, end_time=?, all_day=?, location=?, category=?, visibility=?, priority=? WHERE id=?",
                event.getTitle(), event.getDescription(),
                Timestamp.valueOf(event.getStartTime()),
                event.getEndTime() != null ? Timestamp.valueOf(event.getEndTime()) : null,
                event.isAllDay(), event.getLocation(), event.getCategory(),
                event.getVisibility(), event.getPriority(), event.getId());
    }

    public void deleteEvent(Long id) {
        jdbc.update("DELETE FROM calendar_events WHERE id = ?", id);
    }

    // ========== Reminder CRUD ==========

    public List<CalendarReminder> findRemindersByEventId(Long eventId) {
        return jdbc.query(
                "SELECT * FROM calendar_reminders WHERE event_id = ? ORDER BY remind_at",
                reminderRowMapper, eventId);
    }

    public List<CalendarReminder> findRemindersByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM calendar_reminders WHERE user_id = ? ORDER BY remind_at",
                reminderRowMapper, userId);
    }

    public CalendarReminder findReminderById(Long id) {
        List<CalendarReminder> list = jdbc.query(
                "SELECT * FROM calendar_reminders WHERE id = ?", reminderRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public Long insertReminder(CalendarReminder reminder) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO calendar_reminders (event_id, user_id, remind_at, frequency, created_at) VALUES (?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, reminder.getEventId());
            ps.setLong(2, reminder.getUserId());
            ps.setTimestamp(3, Timestamp.valueOf(reminder.getRemindAt()));
            ps.setString(4, reminder.getFrequency());
            ps.setTimestamp(5, Timestamp.valueOf(reminder.getCreatedAt() != null ? reminder.getCreatedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateReminder(CalendarReminder reminder) {
        jdbc.update(
                "UPDATE calendar_reminders SET remind_at=?, frequency=? WHERE id=?",
                Timestamp.valueOf(reminder.getRemindAt()), reminder.getFrequency(), reminder.getId());
    }

    public void deleteReminder(Long id) {
        jdbc.update("DELETE FROM calendar_reminders WHERE id = ?", id);
    }

    public void deleteRemindersByEventId(Long eventId) {
        jdbc.update("DELETE FROM calendar_reminders WHERE event_id = ?", eventId);
    }
}
