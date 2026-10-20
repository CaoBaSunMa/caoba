package iam.caoba.domain.scrumboard;

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
public class BoardCard {

    private Long id;
    private Long columnId;
    private Long boardId;
    private String title;
    private String description;
    private String priority;     // LOW, MEDIUM, HIGH, URGENT
    private Long assignedTo;
    private LocalDate dueDate;
    private Integer position;
    private LocalDateTime createdAt;
}
