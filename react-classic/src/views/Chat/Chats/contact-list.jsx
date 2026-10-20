import { useEffect } from 'react';
import { useChat } from '../../../context/ChatProvider';

export const useChatContacts = () => {
    const { conversations, fetchConversations, loading } = useChat();

    useEffect(() => {
        fetchConversations();
    }, [fetchConversations]);

    const contacts = conversations.map((conv) => ({
        id: conv.id,
        name: conv.name || conv.title,
        avatar: conv.avatar,
        initAvatar: conv.initAvatar,
        time: conv.lastMessageTime || conv.time || '',
        lastChat: conv.lastMessage || conv.lastChat || '',
        status: conv.status || '',
        unread: conv.unread || 0,
    }));

    return { contacts, loading };
};
