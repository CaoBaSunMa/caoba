import { createContext, useContext, useState, useCallback } from 'react';
import { boardAPI } from '../services/modules';

const BoardContext = createContext(null);

export function BoardProvider({ children }) {
  const [boards, setBoards] = useState([]);
  const [columns, setColumns] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBoards = useCallback(async () => {
    setLoading(true);
    try {
      const res = await boardAPI.getBoards();
      setBoards(res.data || []);
      if (res.data?.length > 0 && !selectedBoardId) {
        await selectBoard(res.data[0].id);
      }
    } catch (e) {
      setError(e?.data?.message || '加载看板失败');
    } finally {
      setLoading(false);
    }
  }, [selectedBoardId]);

  const selectBoard = useCallback(async (boardId) => {
    setSelectedBoardId(boardId);
    setLoading(true);
    try {
      const colRes = await boardAPI.getColumns(boardId);
      setColumns(colRes.data || []);
      const cardRes = await boardAPI.getCards(boardId);
      setCards(cardRes.data || []);
    } catch (e) {
      setError(e?.data?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createBoard = useCallback(async (data) => {
    const res = await boardAPI.createBoard(data);
    setBoards(prev => [...prev, res.data]);
    return res.data;
  }, []);

  const createCard = useCallback(async (boardId, columnId, data) => {
    const res = await boardAPI.createCard(boardId, columnId, data);
    setCards(prev => [...prev, res.data]);
    return res.data;
  }, []);

  const updateCard = useCallback(async (id, data) => {
    const res = await boardAPI.updateCard(id, data);
    setCards(prev => prev.map(c => c.id === id ? res.data : c));
  }, []);

  const deleteCard = useCallback(async (id) => {
    await boardAPI.deleteCard(id);
    setCards(prev => prev.filter(c => c.id !== id));
  }, []);

  const moveCard = useCallback(async (cardId, targetColumnId, targetPosition) => {
    const res = await boardAPI.moveCard(cardId, { targetColumnId, targetPosition });
    setCards(prev => prev.map(c => c.id === cardId ? res.data : c));
  }, []);

  return (
    <BoardContext.Provider value={{
      boards, columns, cards, selectedBoardId, loading, error,
      fetchBoards, selectBoard, createBoard, createCard, updateCard, deleteCard, moveCard,
    }}>
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
