import { useEffect, useMemo } from 'react';
import { useContacts } from '../../../context/ContactProvider';

// The backend returns `firstName` but the mock data used `name`.  We also
// always derive an `initAvatar` so the card component never tries to `.map()`
// on `undefined` when the contact has no avatar image.
const AVATAR_VARIANTS = ['primary', 'info', 'success', 'warning', 'danger', 'secondary'];

const displayName = (c) => c.name || c.firstName || [c.firstName, c.lastName].filter(Boolean).join(' ') || c.email || '';

const initialsOf = (name) => {
    const s = String(name).trim();
    return s[0] || '?';
};

export const useContactCards = () => {
    const { contacts, fetchAll, loading } = useContacts();

    useEffect(() => {
        fetchAll();
    }, [fetchAll]);

    const contactCards = useMemo(() => {
        return contacts.map((contact) => {
            const name = displayName(contact);
            return {
                id: contact.id,
                name,
                mail: contact.email,
                phone: contact.phone,
                position: contact.position || contact.labels?.[0] || '',
                badge: contact.badge || 'primary',
                avatar: contact.avatar,
                initAvatar: contact.initAvatar || [
                    {
                        variant: AVATAR_VARIANTS[(name.charCodeAt(0) || 0) % AVATAR_VARIANTS.length],
                        name: initialsOf(name),
                    },
                ],
                checked: false,
                stared: contact.starred || false,
            };
        });
    }, [contacts]);

    return { contactCards, loading };
};
