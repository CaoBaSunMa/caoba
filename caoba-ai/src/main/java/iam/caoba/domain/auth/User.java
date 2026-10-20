package iam.caoba.domain.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String fullName;
    private String avatar;
    private String phone;
    private String role;          // ADMIN, USER
    private boolean enabled;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
