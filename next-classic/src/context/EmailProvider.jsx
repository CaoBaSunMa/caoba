'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import { emailAPI } from '@/services/modules';

const EmailContext = createContext(null);

export function EmailProvider({ children }) {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [currentFolder, setCurrentFolder] = useState('INBOX');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEmails = useCallback(async (folder) => {
    if (folder) setCurrentFolder(folder);
    setLoading(true);
    try {
      const res = await emailAPI.getEmails(folder || currentFolder);
      setEmails(res.data || []);
    } catch (e) {
      setError(e?.data?.message || '加载邮件失败');
    } finally {
      setLoading(false);
    }
  }, [currentFolder]);

  const sendEmail = useCallback(async (data) => {
    const res = await emailAPI.sendEmail(data);
    return res.data;
  }, []);

  const markRead = useCallback(async (id, read = true) => {
    await emailAPI.markRead(id, read);
    setEmails(prev => prev.map(e => e.id === id ? { ...e, read } : e));
  }, []);

  const toggleStar = useCallback(async (id) => {
    await emailAPI.markStar(id);
    setEmails(prev => prev.map(e => e.id === id ? { ...e, starred: !e.starred } : e));
  }, []);

  const moveToFolder = useCallback(async (id, folder) => {
    await emailAPI.moveToFolder(id, folder);
    setEmails(prev => prev.filter(e => e.id !== id));
  }, []);

  const deleteEmail = useCallback(async (id) => {
    await emailAPI.deleteEmail(id);
    setEmails(prev => prev.filter(e => e.id !== id));
  }, []);

  return (
    <EmailContext.Provider value={{
      emails, selectedEmail, currentFolder, loading, error,
      fetchEmails, sendEmail, markRead, toggleStar, moveToFolder, deleteEmail,
      setSelectedEmail,
    }}>
      {children}
    </EmailContext.Provider>
  );
}

export const useEmails = () => useContext(EmailContext);
