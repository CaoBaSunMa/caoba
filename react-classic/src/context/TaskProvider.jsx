import { createContext, useContext, useState, useCallback } from 'react';
import { taskAPI } from '../services/modules';

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (params) => {
    setLoading(true);
    try {
      const res = await taskAPI.getTasks(params);
      setTasks(res.data || []);
    } catch (e) {
      setError(e?.data?.message || '加载任务失败');
    } finally {
      setLoading(false);
    }
  }, []);

  const createTask = useCallback(async (data) => {
    const res = await taskAPI.createTask(data);
    setTasks(prev => [res.data, ...prev]);
    return res.data;
  }, []);

  const updateTask = useCallback(async (id, data) => {
    const res = await taskAPI.updateTask(id, data);
    setTasks(prev => prev.map(t => t.id === id ? res.data : t));
    return res.data;
  }, []);

  const deleteTask = useCallback(async (id) => {
    await taskAPI.deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const updateStatus = useCallback(async (id, status) => {
    const res = await taskAPI.updateStatus(id, status);
    setTasks(prev => prev.map(t => t.id === id ? res.data : t));
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks, loading, error,
      fetchTasks, createTask, updateTask, deleteTask, updateStatus,
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
