package iam.caoba.domain.calendar;

import iam.caoba.common.ApiResponse;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/calendar")
@RequiredArgsConstructor
public class CalendarController {

    private final CalendarService calendarService;

    // ========== Events ==========

    @GetMapping("/events")
    public ApiResponse<List<CalendarEvent>> listEvents(@RequestAttribute("userId") Long userId,
                                                        @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
                                                        @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        if (start != null && end != null) {
            return ApiResponse.ok(calendarService.getEventsByDateRange(userId, start, end));
        }
        return ApiResponse.ok(calendarService.getEvents(userId));
    }

    @GetMapping("/events/{id}")
    public ApiResponse<CalendarEvent> getEvent(@PathVariable Long id) {
        return ApiResponse.ok(calendarService.getEvent(id));
    }

    @PostMapping("/events")
    public ApiResponse<CalendarEvent> createEvent(@RequestAttribute("userId") Long userId,
                                                   @RequestBody CreateEventRequest req) {
        CalendarEvent event = CalendarEvent.builder()
                .title(req.getTitle())
                .description(req.getDescription())
                .startTime(req.getStartTime())
                .endTime(req.getEndTime())
                .allDay(req.isAllDay())
                .location(req.getLocation())
                .category(req.getCategory())
                .visibility(req.getVisibility())
                .priority(req.getPriority())
                .build();
        return ApiResponse.ok(calendarService.createEvent(userId, event));
    }

    @PutMapping("/events/{id}")
    public ApiResponse<CalendarEvent> updateEvent(@RequestAttribute("userId") Long userId,
                                                   @PathVariable Long id,
                                                   @RequestBody UpdateEventRequest req) {
        CalendarEvent updates = CalendarEvent.builder()
                .title(req.getTitle())
                .description(req.getDescription())
                .startTime(req.getStartTime())
                .endTime(req.getEndTime())
                .allDay(req.isAllDay())
                .location(req.getLocation())
                .category(req.getCategory())
                .visibility(req.getVisibility())
                .priority(req.getPriority())
                .build();
        return ApiResponse.ok(calendarService.updateEvent(id, userId, updates));
    }

    @DeleteMapping("/events/{id}")
    public ApiResponse<Void> deleteEvent(@RequestAttribute("userId") Long userId,
                                          @PathVariable Long id) {
        calendarService.deleteEvent(id, userId);
        return ApiResponse.ok("删除成功", null);
    }

    // ========== Reminders ==========

    @GetMapping("/reminders")
    public ApiResponse<List<CalendarReminder>> listReminders(@RequestAttribute("userId") Long userId,
                                                              @RequestParam(required = false) Long eventId) {
        if (eventId != null) {
            return ApiResponse.ok(calendarService.getRemindersByEvent(eventId));
        }
        return ApiResponse.ok(calendarService.getRemindersByUser(userId));
    }

    @GetMapping("/reminders/{id}")
    public ApiResponse<CalendarReminder> getReminder(@PathVariable Long id) {
        return ApiResponse.ok(calendarService.getReminder(id));
    }

    @PostMapping("/reminders")
    public ApiResponse<CalendarReminder> createReminder(@RequestAttribute("userId") Long userId,
                                                         @RequestBody CreateReminderRequest req) {
        CalendarReminder reminder = CalendarReminder.builder()
                .eventId(req.getEventId())
                .remindAt(req.getRemindAt())
                .frequency(req.getFrequency())
                .build();
        return ApiResponse.ok(calendarService.createReminder(userId, reminder));
    }

    @PutMapping("/reminders/{id}")
    public ApiResponse<CalendarReminder> updateReminder(@RequestAttribute("userId") Long userId,
                                                         @PathVariable Long id,
                                                         @RequestBody UpdateReminderRequest req) {
        CalendarReminder updates = CalendarReminder.builder()
                .remindAt(req.getRemindAt())
                .frequency(req.getFrequency())
                .build();
        return ApiResponse.ok(calendarService.updateReminder(id, userId, updates));
    }

    @DeleteMapping("/reminders/{id}")
    public ApiResponse<Void> deleteReminder(@RequestAttribute("userId") Long userId,
                                             @PathVariable Long id) {
        calendarService.deleteReminder(id, userId);
        return ApiResponse.ok("删除成功", null);
    }

    // ========== Request DTOs ==========

    @Data
    public static class CreateEventRequest {
        @NotBlank private String title;
        private String description;
        private LocalDateTime startTime;
        private LocalDateTime endTime;
        private boolean allDay;
        private String location;
        private String category;
        private String visibility;
        private String priority;
    }

    @Data
    public static class UpdateEventRequest {
        private String title;
        private String description;
        private LocalDateTime startTime;
        private LocalDateTime endTime;
        private boolean allDay;
        private String location;
        private String category;
        private String visibility;
        private String priority;
    }

    @Data
    public static class CreateReminderRequest {
        private Long eventId;
        private LocalDateTime remindAt;
        private String frequency;
    }

    @Data
    public static class UpdateReminderRequest {
        private LocalDateTime remindAt;
        private String frequency;
    }
}
