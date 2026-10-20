import { createContext, useContext, useState, useCallback } from 'react';
import { invoiceAPI } from '../services/modules';

const InvoiceContext = createContext(null);

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInvoices = useCallback(async (params) => {
    setLoading(true);
    setError(null);
    try {
      const res = await invoiceAPI.getInvoices(params);
      setInvoices(res.data || []);
    } catch (e) {
      setError(e?.data?.message || '加载发票失败');
    } finally {
      setLoading(false);
    }
  }, []);

  const createInvoice = useCallback(async (data) => {
    const res = await invoiceAPI.createInvoice(data);
    setInvoices(prev => [res.data, ...prev]);
    return res.data;
  }, []);

  const updateInvoice = useCallback(async (id, data) => {
    const res = await invoiceAPI.updateInvoice(id, data);
    setInvoices(prev => prev.map(i => i.id === id ? res.data : i));
    return res.data;
  }, []);

  const deleteInvoice = useCallback(async (id) => {
    await invoiceAPI.deleteInvoice(id);
    setInvoices(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateStatus = useCallback(async (id, status) => {
    const res = await invoiceAPI.updateStatus(id, status);
    setInvoices(prev => prev.map(i => i.id === id ? res.data : i));
  }, []);

  return (
    <InvoiceContext.Provider value={{
      invoices, loading, error,
      fetchInvoices, createInvoice, updateInvoice, deleteInvoice, updateStatus,
    }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoices = () => useContext(InvoiceContext);
