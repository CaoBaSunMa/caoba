import { defineStore } from 'pinia';
import { boardAPI } from '~/services/modules';

export const useKanbanStore = defineStore('kanban', {
  state: () => ({
    boards: [],
    columns: [],
    cards: [],
    selectedBoardId: null,
    selectedBoard: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchBoards() {
      this.loading = true;
      this.error = null;
      try {
        const res = await boardAPI.getBoards();
        this.boards = res.data || [];
        if (this.boards.length > 0 && !this.selectedBoardId) {
          await this.selectBoard(this.boards[0].id);
        }
      } catch (e) {
        this.error = e?.data?.message || '加载看板失败';
      } finally {
        this.loading = false;
      }
    },

    async selectBoard(boardId) {
      this.selectedBoardId = boardId;
      this.loading = true;
      try {
        const boardRes = await boardAPI.getBoard(boardId);
        this.selectedBoard = boardRes.data;
        const colRes = await boardAPI.getColumns(boardId);
        this.columns = colRes.data || [];
        const cardRes = await boardAPI.getCards(boardId);
        this.cards = cardRes.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载看板数据失败';
      } finally {
        this.loading = false;
      }
    },

    async createBoard(data) {
      try {
        const res = await boardAPI.createBoard(data);
        this.boards.push(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建看板失败';
        throw e;
      }
    },

    async deleteBoard(id) {
      try {
        await boardAPI.deleteBoard(id);
        this.boards = this.boards.filter(b => b.id !== id);
        if (this.selectedBoardId === id) {
          this.selectedBoardId = null;
          this.columns = [];
          this.cards = [];
        }
      } catch (e) {
        this.error = e?.data?.message || '删除看板失败';
      }
    },

    async createColumn(boardId, data) {
      try {
        const res = await boardAPI.createColumn(boardId, data);
        this.columns.push(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建列失败';
        throw e;
      }
    },

    async createCard(boardId, columnId, data) {
      try {
        const res = await boardAPI.createCard(boardId, columnId, data);
        this.cards.push(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建卡片失败';
        throw e;
      }
    },

    async updateCard(id, data) {
      try {
        const res = await boardAPI.updateCard(id, data);
        const idx = this.cards.findIndex(c => c.id === id);
        if (idx >= 0) this.cards[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新卡片失败';
      }
    },

    async deleteCard(id) {
      try {
        await boardAPI.deleteCard(id);
        this.cards = this.cards.filter(c => c.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '删除卡片失败';
      }
    },

    async moveCard(cardId, targetColumnId, targetPosition) {
      try {
        const res = await boardAPI.moveCard(cardId, { targetColumnId, targetPosition });
        const idx = this.cards.findIndex(c => c.id === cardId);
        if (idx >= 0) this.cards[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '移动卡片失败';
      }
    },

    getCardsByColumn(columnId) {
      return this.cards
        .filter(c => c.columnId === columnId)
        .sort((a, b) => (a.position || 0) - (b.position || 0));
    },
  },
});
