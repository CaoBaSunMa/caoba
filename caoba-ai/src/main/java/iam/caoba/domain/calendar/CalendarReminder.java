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
public class CalendarReminder {
    private Long id;
    private Long eventId;
    private Long userId;
    private LocalDateTime remindAt;
    private String frequency;  // ONCE, DAILY, WEEKLY, MONTHLY
    private LocalDateTime createdAt;
}
