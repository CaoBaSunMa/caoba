package iam.caoba.domain.chat;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class ChatRepository {

    private final JdbcTemplate jdbc;

    public ChatRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private final RowMapper<ChatConversation> conversationRowMapper = (rs, i) -> ChatConversation.builder()
            .id(rs.getLong("id"))
            .type(rs.getString("type"))
            .name(rs.getString("name"))
            .avatar(rs.getString("avatar"))
            .createdBy(rs.getObject("created_by") != null ? rs.getLong("created_by") : null)
            .lastMessage(rs.getString("last_message"))
            .unread(rs.getObject("unread") != null ? rs.getInt("unread") : 0)
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    private final RowMapper<ChatMember> memberRowMapper = (rs, i) -> ChatMember.builder()
            .id(rs.getLong("id"))
            .conversationId(rs.getLong("conversation_id"))
            .userId(rs.getLong("user_id"))
            .role(rs.getString("role"))
            .joinedAt(rs.getTimestamp("joined_at") != null ? rs.getTimestamp("joined_at").toLocalDateTime() : null)
            .build();

    private final RowMapper<ChatMessage> messageRowMapper = (rs, i) -> ChatMessage.builder()
            .id(rs.getLong("id"))
            .conversationId(rs.getLong("conversation_id"))
            .senderId(rs.getLong("sender_id"))
            .content(rs.getString("content"))
            .type(rs.getString("type"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    // ========== Conversation ==========

    public List<ChatConversation> findConversationsByUserId(Long userId) {
        return jdbc.query(
                "SELECT c.* FROM chat_conversations c " +
                "JOIN chat_members m ON c.id = m.conversation_id " +
                "WHERE m.user_id = ? ORDER BY c.updated_at DESC",
                conversationRowMapper, userId);
    }

    public ChatConversation findById(Long id) {
        List<ChatConversation> list = jdbc.query(
                "SELECT * FROM chat_conversations WHERE id = ?", conversationRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public Long insertConversation(ChatConversation conversation) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO chat_conversations (type, name, avatar, created_by, created_at, updated_at) VALUES (?,?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, conversation.getType());
            ps.setString(2, conversation.getName());
            ps.setString(3, conversation.getAvatar());
            ps.setObject(4, conversation.getCreatedBy());
            ps.setTimestamp(5, Timestamp.valueOf(conversation.getCreatedAt() != null ? conversation.getCreatedAt() : LocalDateTime.now()));
            ps.setTimestamp(6, Timestamp.valueOf(conversation.getUpdatedAt() != null ? conversation.getUpdatedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateConversation(ChatConversation conversation) {
        jdbc.update("UPDATE chat_conversations SET name=?, avatar=?, updated_at=? WHERE id=?",
                conversation.getName(), conversation.getAvatar(),
                Timestamp.valueOf(LocalDateTime.now()), conversation.getId());
    }

    // ========== Member ==========

    public List<ChatMember> findMembersByConversationId(Long conversationId) {
        return jdbc.query(
                "SELECT * FROM chat_members WHERE conversation_id = ?", memberRowMapper, conversationId);
    }

    public ChatMember findByConversationAndUser(Long conversationId, Long userId) {
        List<ChatMember> list = jdbc.query(
                "SELECT * FROM chat_members WHERE conversation_id = ? AND user_id = ?",
                memberRowMapper, conversationId, userId);
        return list.isEmpty() ? null : list.get(0);
    }

    public Long insertMember(ChatMember member) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO chat_members (conversation_id, user_id, role, joined_at) VALUES (?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, member.getConversationId());
            ps.setLong(2, member.getUserId());
            ps.setString(3, member.getRole() != null ? member.getRole() : "MEMBER");
            ps.setTimestamp(4, Timestamp.valueOf(member.getJoinedAt() != null ? member.getJoinedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public boolean isMember(Long conversationId, Long userId) {
        Integer count = jdbc.queryForObject(
                "SELECT COUNT(*) FROM chat_members WHERE conversation_id = ? AND user_id = ?",
                Integer.class, conversationId, userId);
        return count != null && count > 0;
    }

    // ========== Direct Conversation Lookup ==========

    public ChatConversation findDirectConversation(Long userId1, Long userId2) {
        List<ChatConversation> list = jdbc.query(
                "SELECT c.* FROM chat_conversations c " +
                "WHERE c.type = 'DIRECT' " +
                "AND EXISTS (SELECT 1 FROM chat_members m1 WHERE m1.conversation_id = c.id AND m1.user_id = ?) " +
                "AND EXISTS (SELECT 1 FROM chat_members m2 WHERE m2.conversation_id = c.id AND m2.user_id = ?)",
                conversationRowMapper, userId1, userId2);
        return list.isEmpty() ? null : list.get(0);
    }

    // ========== Message ==========

    public List<ChatMessage> findMessagesByConversationId(Long conversationId, int offset, int limit) {
        return jdbc.query(
                "SELECT * FROM chat_messages WHERE conversation_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?",
                messageRowMapper, conversationId, limit, offset);
    }

    public ChatMessage findMessageById(Long id) {
        List<ChatMessage> list = jdbc.query(
                "SELECT * FROM chat_messages WHERE id = ?", messageRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public Long insertMessage(ChatMessage message) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) VALUES (?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, message.getConversationId());
            ps.setLong(2, message.getSenderId());
            ps.setString(3, message.getContent());
            ps.setString(4, message.getType() != null ? message.getType() : "TEXT");
            ps.setTimestamp(5, Timestamp.valueOf(message.getCreatedAt() != null ? message.getCreatedAt() : LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int countUnreadMessages(Long conversationId, Long userId, Long lastReadMessageId) {
        if (lastReadMessageId == null) {
            return jdbc.queryForObject(
                    "SELECT COUNT(*) FROM chat_messages WHERE conversation_id = ? AND sender_id != ?",
                    Integer.class, conversationId, userId);
        }
        return jdbc.queryForObject(
                "SELECT COUNT(*) FROM chat_messages WHERE conversation_id = ? AND sender_id != ? AND id > ?",
                Integer.class, conversationId, userId, lastReadMessageId);
    }
}
