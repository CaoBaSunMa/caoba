import { createContext, useContext, useState, useCallback } from 'react';
import { contactAPI } from '../services/modules';

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContacts = useCallback(async (params) => {
    setLoading(true);
    setError(null);
    try {
      const res = await contactAPI.getContacts(params);
      setContacts(res.data || []);
    } catch (e) {
      setError(e?.data?.message || '加载联系人失败');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const res = await contactAPI.getAll();
      setContacts(res.data || []);
    } catch (e) {
      setError(e?.data?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const search = useCallback(async (q) => {
    setLoading(true);
    try {
      const res = q ? await contactAPI.searchContacts(q) : await contactAPI.getAll();
      setContacts(res.data || []);
    } catch (e) {
      setError(e?.data?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createContact = useCallback(async (data) => {
    const res = await contactAPI.createContact(data);
    setContacts(prev => [res.data, ...prev]);
    return res.data;
  }, []);

  const updateContact = useCallback(async (id, data) => {
    const res = await contactAPI.updateContact(id, data);
    setContacts(prev => prev.map(c => c.id === id ? res.data : c));
    return res.data;
  }, []);

  const deleteContact = useCallback(async (id) => {
    await contactAPI.deleteContact(id);
    setContacts(prev => prev.filter(c => c.id !== id));
  }, []);

  const toggleStar = useCallback(async (id) => {
    const res = await contactAPI.toggleStar(id);
    setContacts(prev => prev.map(c => c.id === id ? res.data : c));
  }, []);

  return (
    <ContactContext.Provider value={{
      contacts, loading, error,
      fetchContacts, fetchAll, search, createContact, updateContact, deleteContact, toggleStar,
    }}>
      {children}
    </ContactContext.Provider>
  );
}

export const useContacts = () => useContext(ContactContext);
