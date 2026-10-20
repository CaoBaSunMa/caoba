package iam.caoba.domain.chat;

import iam.caoba.common.ApiResponse;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    /** 鑾峰彇褰撳墠鐢ㄦ埛鐨勫璇濆垪琛?*/
    @GetMapping("/conversations")
    public ApiResponse<List<ChatConversation>> listConversations(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(chatService.getConversations(userId));
    }

    /** 鑾峰彇鍗曚釜瀵硅瘽璇︽儏 */
    @GetMapping("/conversations/{id}")
    public ApiResponse<ChatConversation> getConversation(@PathVariable Long id) {
        return ApiResponse.ok(chatService.getConversation(id));
    }

    /** 鑾峰彇瀵硅瘽鎴愬憳鍒楄〃 */
    @GetMapping("/conversations/{id}/members")
    public ApiResponse<List<ChatMember>> listMembers(@PathVariable Long id) {
        return ApiResponse.ok(chatService.getMembers(id));
    }

    /** 鍒涘缓绉佽亰 */
    @PostMapping("/conversations/direct")
    public ApiResponse<ChatConversation> createDirect(@RequestAttribute("userId") Long userId,
                                                       @RequestBody CreateDirectRequest req) {
        return ApiResponse.ok(chatService.createDirect(userId, req.getTargetUserId()));
    }

    /** 鍒涘缓缇よ亰 */
    @PostMapping("/conversations/group")
    public ApiResponse<ChatConversation> createGroup(@RequestAttribute("userId") Long userId,
                                                      @RequestBody CreateGroupRequest req) {
        return ApiResponse.ok(chatService.createGroup(userId, req.getName(), req.getAvatar(), req.getMemberIds()));
    }

    /** 鑾峰彇瀵硅瘽鐨勬秷鎭垪琛紙鍒嗛〉锛?*/
    @GetMapping("/conversations/{id}/messages")
    public ApiResponse<List<ChatMessage>> listMessages(@PathVariable Long id,
                                                        @RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "20") int size) {
        return ApiResponse.ok(chatService.getMessages(id, page, size));
    }

    /** 鍙戦€佹秷鎭?*/
    @PostMapping("/conversations/{id}/messages")
    public ApiResponse<ChatMessage> sendMessage(@RequestAttribute("userId") Long userId,
                                                 @PathVariable Long id,
                                                 @RequestBody SendMessageRequest req) {
        return ApiResponse.ok(chatService.sendMessage(id, userId, req.getContent(), req.getType()));
    }

    /** 鑾峰彇鏈娑堟伅鏁?*/
    @GetMapping("/conversations/{id}/unread")
    public ApiResponse<Map<String, Object>> unreadCount(@PathVariable Long id,
                                                         @RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(chatService.getUnreadCount(id, userId));
    }

    /** 鏍囪宸茶 */
    @PostMapping("/conversations/{id}/read")
    public ApiResponse<Long> markAsRead(@PathVariable Long id,
                                         @RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(chatService.markAsRead(id, userId));
    }

    // ========== Request DTOs ==========

    @Data
    public static class CreateDirectRequest {
        private Long targetUserId;
    }

    @Data
    public static class CreateGroupRequest {
        @NotBlank private String name;
        private String avatar;
        private List<Long> memberIds;
    }

    @Data
    public static class SendMessageRequest {
        @NotBlank private String content;
        private String type; // TEXT, IMAGE, FILE
    }
}
