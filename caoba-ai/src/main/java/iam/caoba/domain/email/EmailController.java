package iam.caoba.domain.email;

import iam.caoba.common.ApiResponse;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emails")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    // ========== 鑾峰彇閭欢鍒楄〃 ==========

    @GetMapping("/inbox")
    public ApiResponse<List<Email>> inbox(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getInbox(userId));
    }

    @GetMapping("/sent")
    public ApiResponse<List<Email>> sent(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getSent(userId));
    }

    @GetMapping("/drafts")
    public ApiResponse<List<Email>> drafts(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getDrafts(userId));
    }

    @GetMapping("/trash")
    public ApiResponse<List<Email>> trash(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getTrash(userId));
    }

    @GetMapping("/spam")
    public ApiResponse<List<Email>> spam(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getSpam(userId));
    }

    @GetMapping("/archive")
    public ApiResponse<List<Email>> archive(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getArchive(userId));
    }

    // ========== 鍗曞皝閭欢 ==========

    @GetMapping("/{id}")
    public ApiResponse<Email> getEmail(@PathVariable Long id,
                                        @RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(emailService.getEmail(id, userId));
    }

    @GetMapping("/{id}/recipients")
    public ApiResponse<List<EmailRecipient>> getRecipients(@PathVariable Long id) {
        return ApiResponse.ok(emailService.getRecipients(id));
    }

    // ========== 鍙戦€侀偖浠?==========

    @PostMapping
    public ApiResponse<Email> sendEmail(@RequestAttribute("userId") Long userId,
                                         @RequestBody SendEmailRequest req) {
        Email email = emailService.sendEmail(
                userId,
                req.getFromAddress(),
                req.getSubject(),
                req.getBody(),
                req.getTo(),
                req.getCc(),
                req.getBcc());
        return ApiResponse.ok(email);
    }

    // ========== 鏍囪鎿嶄綔 ==========

    @PutMapping("/{id}/read")
    public ApiResponse<Void> markAsRead(@PathVariable Long id,
                                         @RequestParam boolean read,
                                         @RequestAttribute("userId") Long userId) {
        emailService.markAsRead(id, userId, read);
        return ApiResponse.ok("鎿嶄綔鎴愬姛", null);
    }

    @PutMapping("/{id}/star")
    public ApiResponse<Void> toggleStar(@PathVariable Long id,
                                         @RequestAttribute("userId") Long userId) {
        emailService.toggleStarred(id, userId);
        return ApiResponse.ok("鎿嶄綔鎴愬姛", null);
    }

    @PutMapping("/{id}/move")
    public ApiResponse<Void> moveToFolder(@PathVariable Long id,
                                           @RequestParam String folder,
                                           @RequestAttribute("userId") Long userId) {
        emailService.moveToFolder(id, userId, folder);
        return ApiResponse.ok("鎿嶄綔鎴愬姛", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteEmail(@PathVariable Long id,
                                          @RequestAttribute("userId") Long userId) {
        emailService.deleteEmail(id, userId);
        return ApiResponse.ok("鍒犻櫎鎴愬姛", null);
    }

    // ========== Request DTOs ==========

    @Data
    public static class SendEmailRequest {
        private String fromAddress;
        @NotBlank private String subject;
        @NotBlank private String body;
        private List<EmailService.RecipientDto> to;
        private List<EmailService.RecipientDto> cc;
        private List<EmailService.RecipientDto> bcc;
    }
}
