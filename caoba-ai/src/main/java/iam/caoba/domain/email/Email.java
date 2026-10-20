package iam.caoba.domain.email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Email {
    private Long id;
    private Long fromUserId;
    private String fromAddress;
    private String subject;
    private String body;
    private boolean isRead;
    private boolean isStarred;
    private String folder;    // INBOX, SENT, DRAFT, TRASH, SPAM, ARCHIVE
    private LocalDateTime createdAt;
}
