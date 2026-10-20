package iam.caoba.domain.task;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Task {

    private Long id;
    private Long userId;
    private String title;
    private String description;
    private String status;       // TODO, IN_PROGRESS, DONE
    private String priority;     // LOW, MEDIUM, HIGH, URGENT
    private LocalDate dueDate;
    private LocalDate startDate;
    private Integer progress;    // 0~100
    private Long assignedTo;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
