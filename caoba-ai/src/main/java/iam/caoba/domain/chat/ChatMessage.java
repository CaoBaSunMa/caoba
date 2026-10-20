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
public class ChatMessage {
    private Long id;
    private Long conversationId;
    private Long senderId;
    private String content;
    private String type;       // TEXT, IMAGE, FILE
    private LocalDateTime createdAt;
}
