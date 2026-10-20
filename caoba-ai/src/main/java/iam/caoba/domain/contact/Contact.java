package iam.caoba.domain.contact;

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
public class Contact {

    private Long id;
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String company;
    private String position;
    private String location;
    private String avatar;
    private String notes;
    private String labels;       // JSON array string, e.g. ["VIP","partner"]
    private boolean starred;
    private boolean archived;
    private boolean blocked;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
