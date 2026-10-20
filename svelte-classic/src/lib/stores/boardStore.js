import { writable } from 'svelte/store';
import { boardAPI } from '../services/modules';

function createBoardStore() {
  const { subscribe, set, update } = writable({
    boards: [],
    columns: [],
    cards: [],
    selectedBoardId: null,
    loading: false,
    error: null,
  });

  return {
    subscribe,

    async fetchBoards() {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await boardAPI.getBoards();
        update(s => ({ ...s, boards: res.data || [], loading: false }));
        if (res.data?.length > 0) {
          await this.selectBoard(res.data[0].id);
        }
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载看板失败' }));
      }
    },

    async selectBoard(boardId) {
      update(s => ({ ...s, selectedBoardId: boardId, loading: true }));
      try {
        const colRes = await boardAPI.getColumns(boardId);
        const cardRes = await boardAPI.getCards(boardId);
        update(s => ({
          ...s,
          columns: colRes.data || [],
          cards: cardRes.data || [],
          loading: false,
        }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message }));
      }
    },

    async createBoard(data) {
      const res = await boardAPI.createBoard(data);
      update(s => ({ ...s, boards: [...s.boards, res.data] }));
      return res.data;
    },

    async createCard(boardId, columnId, data) {
      const res = await boardAPI.createCard(boardId, columnId, data);
      update(s => ({ ...s, cards: [...s.cards, res.data] }));
      return res.data;
    },

    async updateCard(id, data) {
      const res = await boardAPI.updateCard(id, data);
      update(s => ({ ...s, cards: s.cards.map(c => c.id === id ? res.data : c) }));
    },

    async deleteCard(id) {
      await boardAPI.deleteCard(id);
      update(s => ({ ...s, cards: s.cards.filter(c => c.id !== id) }));
    },

    async moveCard(cardId, targetColumnId, targetPosition) {
      const res = await boardAPI.moveCard(cardId, { targetColumnId, targetPosition });
      update(s => ({ ...s, cards: s.cards.map(c => c.id === cardId ? res.data : c) }));
    },

    getCardsByColumn(columnId) {
      let cards = [];
      const unsub = subscribe(s => {
        cards = s.cards.filter(c => c.columnId === columnId).sort((a, b) => (a.position || 0) - (b.position || 0));
      });
      unsub();
      return cards;
    },
  };
}

export const boardStore = createBoardStore();
