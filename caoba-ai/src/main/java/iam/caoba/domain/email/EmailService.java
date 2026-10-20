package iam.caoba.domain.email;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final EmailRepository emailRepo;

    // ========== 发邮件 ==========

    public Email sendEmail(Long fromUserId, String fromAddress, String subject, String body,
                           List<RecipientDto> toRecipients, List<RecipientDto> ccRecipients,
                           List<RecipientDto> bccRecipients) {
        // 1. 创建邮件（发件人文件夹为 SENT）
        Email email = Email.builder()
                .fromUserId(fromUserId)
                .fromAddress(fromAddress)
                .subject(subject)
                .body(body)
                .isRead(true)   // 发件人已读
                .isStarred(false)
                .folder("SENT")
                .createdAt(LocalDateTime.now())
                .build();
        Long emailId = emailRepo.insertEmail(email);
        email.setId(emailId);

        // 2. 添加收件人
        if (toRecipients != null) {
            for (RecipientDto r : toRecipients) {
                emailRepo.insertRecipient(EmailRecipient.builder()
                        .emailId(emailId).userId(r.getUserId()).address(r.getAddress()).type("TO").build());
            }
        }
        if (ccRecipients != null) {
            for (RecipientDto r : ccRecipients) {
                emailRepo.insertRecipient(EmailRecipient.builder()
                        .emailId(emailId).userId(r.getUserId()).address(r.getAddress()).type("CC").build());
            }
        }
        if (bccRecipients != null) {
            for (RecipientDto r : bccRecipients) {
                emailRepo.insertRecipient(EmailRecipient.builder()
                        .emailId(emailId).userId(r.getUserId()).address(r.getAddress()).type("BCC").build());
            }
        }

        // 3. 为每个收件人创建 INBOX 副本
        if (toRecipients != null) {
            for (RecipientDto r : toRecipients) {
                createInboxCopy(emailId, r);
            }
        }
        if (ccRecipients != null) {
            for (RecipientDto r : ccRecipients) {
                createInboxCopy(emailId, r);
            }
        }

        return email;
    }

    private void createInboxCopy(Long originalEmailId, RecipientDto recipient) {
        // 简化处理：对于内部用户，直接在 INBOX 中保留同一封邮件
        // 实际场景可能需要为每个收件人创建独立的邮件副本
    }

    // ========== 获取邮件 ==========

    public List<Email> getInbox(Long userId) {
        return emailRepo.findByUserIdAndFolder(userId, "INBOX");
    }

    public List<Email> getSent(Long userId) {
        return emailRepo.findByUserIdAndFolder(userId, "SENT");
    }

    public List<Email> getDrafts(Long userId) {
        return emailRepo.findByUserIdAndFolder(userId, "DRAFT");
    }

    public List<Email> getTrash(Long userId) {
        return emailRepo.findByUserIdAndFolder(userId, "TRASH");
    }

    public List<Email> getSpam(Long userId) {
        return emailRepo.findByUserIdAndFolder(userId, "SPAM");
    }

    public List<Email> getArchive(Long userId) {
        return emailRepo.findByUserIdAndFolder(userId, "ARCHIVE");
    }

    public Email getEmail(Long id, Long userId) {
        Email email = emailRepo.findById(id);
        if (email == null) {
            throw new ResourceNotFoundException("邮件不存在");
        }
        // 验证权限：发件人或收件人
        List<EmailRecipient> recipients = emailRepo.findRecipientsByEmailId(id);
        boolean isRecipient = recipients.stream().anyMatch(r -> userId.equals(r.getUserId()));
        boolean isSender = userId.equals(email.getFromUserId());
        if (!isSender && !isRecipient) {
            throw new RuntimeException("无权查看此邮件");
        }
        return email;
    }

    public List<EmailRecipient> getRecipients(Long emailId) {
        return emailRepo.findRecipientsByEmailId(emailId);
    }

    // ========== 标记操作 ==========

    public void markAsRead(Long id, Long userId, boolean read) {
        Email email = emailRepo.findById(id);
        if (email == null) throw new ResourceNotFoundException("邮件不存在");
        emailRepo.updateReadStatus(id, read);
    }

    public void toggleStarred(Long id, Long userId) {
        Email email = emailRepo.findById(id);
        if (email == null) throw new ResourceNotFoundException("邮件不存在");
        emailRepo.updateStarredStatus(id, !email.isStarred());
    }

    public void moveToFolder(Long id, Long userId, String folder) {
        Email email = emailRepo.findById(id);
        if (email == null) throw new ResourceNotFoundException("邮件不存在");
        emailRepo.moveToFolder(id, folder);
    }

    public void deleteEmail(Long id, Long userId) {
        Email email = emailRepo.findById(id);
        if (email == null) throw new ResourceNotFoundException("邮件不存在");
        emailRepo.moveToFolder(id, "TRASH");
    }

    // ========== DTOs ==========

    @lombok.Data
    public static class RecipientDto {
        private Long userId;
        private String address;
    }
}
