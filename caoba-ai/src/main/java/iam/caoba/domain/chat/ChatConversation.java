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
public class ChatConversation {
    private Long id;
    private String type;       // DIRECT, GROUP
    private String name;
    private String avatar;
    private Long createdBy;
    private String lastMessage;
    private Integer unread;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
