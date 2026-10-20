package iam.caoba.domain.chat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatMember {
    private Long id;
    private Long conversationId;
    private Long userId;
    private String role;       // MEMBER, ADMIN
    private LocalDateTime joinedAt;
}
