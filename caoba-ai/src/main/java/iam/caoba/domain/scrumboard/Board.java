package iam.caoba.domain.scrumboard;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Board {

    private Long id;
    private String name;
    private String type;        // KANBAN, PIPELINE, PROJECT
    private Long userId;
    private LocalDateTime createdAt;
}
