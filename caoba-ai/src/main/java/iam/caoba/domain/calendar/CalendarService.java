package iam.caoba.domain.calendar;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarService {

    private final CalendarRepository calendarRepo;

    // ========== Event ==========

    public List<CalendarEvent> getEvents(Long userId) {
        return calendarRepo.findByUserId(userId);
    }

    public List<CalendarEvent> getEventsByDateRange(Long userId, LocalDateTime start, LocalDateTime end) {
        return calendarRepo.findByUserIdAndDateRange(userId, start, end);
    }

    public CalendarEvent getEvent(Long id) {
        CalendarEvent event = calendarRepo.findById(id);
        if (event == null) {
            throw new ResourceNotFoundException("事件不存在");
        }
        return event;
    }

    public CalendarEvent createEvent(Long userId, CalendarEvent event) {
        event.setUserId(userId);
        if (event.getCreatedAt() == null) {
            event.setCreatedAt(LocalDateTime.now());
        }
        Long id = calendarRepo.insertEvent(event);
        event.setId(id);
        return event;
    }

    public CalendarEvent updateEvent(Long id, Long userId, CalendarEvent updates) {
        CalendarEvent event = calendarRepo.findById(id);
        if (event == null) {
            throw new ResourceNotFoundException("事件不存在");
        }
        if (!event.getUserId().equals(userId)) {
            throw new RuntimeException("无权修改此事件");
        }
        if (updates.getTitle() != null) event.setTitle(updates.getTitle());
        if (updates.getDescription() != null) event.setDescription(updates.getDescription());
        if (updates.getStartTime() != null) event.setStartTime(updates.getStartTime());
        if (updates.getEndTime() != null) event.setEndTime(updates.getEndTime());
        event.setAllDay(updates.isAllDay());
        if (updates.getLocation() != null) event.setLocation(updates.getLocation());
        if (updates.getCategory() != null) event.setCategory(updates.getCategory());
        if (updates.getVisibility() != null) event.setVisibility(updates.getVisibility());
        if (updates.getPriority() != null) event.setPriority(updates.getPriority());
        calendarRepo.updateEvent(event);
        return event;
    }

    public void deleteEvent(Long id, Long userId) {
        CalendarEvent event = calendarRepo.findById(id);
        if (event == null) {
            throw new ResourceNotFoundException("事件不存在");
        }
        if (!event.getUserId().equals(userId)) {
            throw new RuntimeException("无权删除此事件");
        }
        calendarRepo.deleteRemindersByEventId(id);
        calendarRepo.deleteEvent(id);
    }

    // ========== Reminder ==========

    public List<CalendarReminder> getRemindersByEvent(Long eventId) {
        return calendarRepo.findRemindersByEventId(eventId);
    }

    public List<CalendarReminder> getRemindersByUser(Long userId) {
        return calendarRepo.findRemindersByUserId(userId);
    }

    public CalendarReminder getReminder(Long id) {
        CalendarReminder reminder = calendarRepo.findReminderById(id);
        if (reminder == null) {
            throw new ResourceNotFoundException("提醒不存在");
        }
        return reminder;
    }

    public CalendarReminder createReminder(Long userId, CalendarReminder reminder) {
        CalendarEvent event = calendarRepo.findById(reminder.getEventId());
        if (event == null) {
            throw new ResourceNotFoundException("关联事件不存在");
        }
        reminder.setUserId(userId);
        if (reminder.getCreatedAt() == null) {
            reminder.setCreatedAt(LocalDateTime.now());
        }
        Long id = calendarRepo.insertReminder(reminder);
        reminder.setId(id);
        return reminder;
    }

    public CalendarReminder updateReminder(Long id, Long userId, CalendarReminder updates) {
        CalendarReminder reminder = calendarRepo.findReminderById(id);
        if (reminder == null) {
            throw new ResourceNotFoundException("提醒不存在");
        }
        if (!reminder.getUserId().equals(userId)) {
            throw new RuntimeException("无权修改此提醒");
        }
        if (updates.getRemindAt() != null) reminder.setRemindAt(updates.getRemindAt());
        if (updates.getFrequency() != null) reminder.setFrequency(updates.getFrequency());
        calendarRepo.updateReminder(reminder);
        return reminder;
    }

    public void deleteReminder(Long id, Long userId) {
        CalendarReminder reminder = calendarRepo.findReminderById(id);
        if (reminder == null) {
            throw new ResourceNotFoundException("提醒不存在");
        }
        if (!reminder.getUserId().equals(userId)) {
            throw new RuntimeException("无权删除此提醒");
        }
        calendarRepo.deleteReminder(id);
    }
}
