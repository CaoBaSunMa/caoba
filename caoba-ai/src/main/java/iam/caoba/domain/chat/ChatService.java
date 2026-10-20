package iam.caoba.domain.chat;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepo;
    private final SimpMessagingTemplate messagingTemplate;

    // ========== 瀵硅瘽 ==========

    public List<ChatConversation> getConversations(Long userId) {
        return chatRepo.findConversationsByUserId(userId);
    }

    public ChatConversation getConversation(Long id) {
        ChatConversation conversation = chatRepo.findById(id);
        if (conversation == null) {
            throw new ResourceNotFoundException("会话不存在");
        }
        return conversation;
    }

    /** 鍒涘缓绉佽亰锛堝凡瀛樺湪鍒欒繑鍥炲凡鏈夊璇濓級 */
    public ChatConversation createDirect(Long userId1, Long userId2) {
        ChatConversation existing = chatRepo.findDirectConversation(userId1, userId2);
        if (existing != null) {
            return existing;
        }
        ChatConversation conversation = ChatConversation.builder()
                .type("DIRECT")
                .createdBy(userId1)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        Long id = chatRepo.insertConversation(conversation);
        conversation.setId(id);

        chatRepo.insertMember(ChatMember.builder().conversationId(id).userId(userId1).role("MEMBER").joinedAt(LocalDateTime.now()).build());
        chatRepo.insertMember(ChatMember.builder().conversationId(id).userId(userId2).role("MEMBER").joinedAt(LocalDateTime.now()).build());
        return conversation;
    }

    /** 鍒涘缓缇よ亰 */
    public ChatConversation createGroup(Long creatorId, String name, String avatar, List<Long> memberIds) {
        ChatConversation conversation = ChatConversation.builder()
                .type("GROUP")
                .name(name)
                .avatar(avatar)
                .createdBy(creatorId)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        Long id = chatRepo.insertConversation(conversation);
        conversation.setId(id);

        // 鍒涘缓鑰呬负 ADMIN
        chatRepo.insertMember(ChatMember.builder().conversationId(id).userId(creatorId).role("ADMIN").joinedAt(LocalDateTime.now()).build());
        // 鍏朵粬鎴愬憳
        for (Long memberId : memberIds) {
            if (!memberId.equals(creatorId)) {
                chatRepo.insertMember(ChatMember.builder().conversationId(id).userId(memberId).role("MEMBER").joinedAt(LocalDateTime.now()).build());
            }
        }
        return conversation;
    }

    public List<ChatMember> getMembers(Long conversationId) {
        return chatRepo.findMembersByConversationId(conversationId);
    }

    // ========== 娑堟伅 ==========

    public ChatMessage sendMessage(Long conversationId, Long senderId, String content, String type) {
        if (!chatRepo.isMember(conversationId, senderId)) {
            throw new RuntimeException("您不是该会话的成员");
        }
        ChatMessage message = ChatMessage.builder()
                .conversationId(conversationId)
                .senderId(senderId)
                .content(content)
                .type(type != null ? type : "TEXT")
                .createdAt(LocalDateTime.now())
                .build();
        Long id = chatRepo.insertMessage(message);
        message.setId(id);

        // 鏇存柊瀵硅瘽鏃堕棿
        chatRepo.updateConversation(ChatConversation.builder().id(conversationId).updatedAt(LocalDateTime.now()).build());

        // WebSocket 推送
        Map<String, Object> payload = new HashMap<>();
        payload.put("conversationId", conversationId);
        payload.put("message", message);
        messagingTemplate.convertAndSend("/topic/chat/" + conversationId, payload);

        return message;
    }

    public List<ChatMessage> getMessages(Long conversationId, int page, int size) {
        int offset = page * size;
        return chatRepo.findMessagesByConversationId(conversationId, offset, size);
    }

    public Map<String, Object> getUnreadCount(Long conversationId, Long userId) {
        int count = chatRepo.countUnreadMessages(conversationId, userId, null);
        Map<String, Object> result = new HashMap<>();
        result.put("conversationId", conversationId);
        result.put("unreadCount", count);
        return result;
    }

    /** 鏍囪宸茶锛氳繑鍥炴渶鏂版秷鎭?ID锛屽墠绔繚瀛樺嵆鍙?*/
    public Long markAsRead(Long conversationId, Long userId) {
        List<ChatMessage> messages = chatRepo.findMessagesByConversationId(conversationId, 0, 1);
        if (messages.isEmpty()) {
            return null;
        }
        return messages.get(0).getId();
    }
}
