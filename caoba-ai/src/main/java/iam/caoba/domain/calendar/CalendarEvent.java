package iam.caoba.domain.calendar;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalendarEvent {
    private Long id;
    private Long userId;
    private String title;
    private String description;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private boolean allDay;
    private String location;
    private String category;
    private String visibility;  // PUBLIC, PRIVATE
    private String priority;    // LOW, MEDIUM, HIGH
    private LocalDateTime createdAt;
}
