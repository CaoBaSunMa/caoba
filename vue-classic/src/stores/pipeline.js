import { defineStore } from 'pinia';
import { boardAPI } from '@/services/modules';

const priorityBadge = (p) => {
    switch ((p || '').toUpperCase()) {
        case 'URGENT': return 'btn-danger';
        case 'HIGH': return 'btn-danger';
        case 'MEDIUM': return 'btn-warning';
        case 'LOW': return 'btn-light';
        default: return 'btn-light';
    }
};

export const usePipelineStore = defineStore('pipeline', {
    state: () => ({
        // API data
        boards: [],
        columns: [],
        cards: [],
        selectedBoardId: null,
        selectedBoard: null,
        loading: false,
        error: null,
        // Existing UI state
        boardName: "",
        oldBoardName: "",
        columnIndex: 0,
    }),
    getters: {
        // 映射为模板需要的列结构 { title, leads: [...], leadValue }
        boardColumns(state) {
            const cols = state.columns
                .slice()
                .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
            return cols.map((col) => ({
                id: col.id,
                columnId: col.id,
                title: col.name || col.title || '',
                leadValue: '',
                leads: state.cards
                    .filter((c) => c.columnId === col.id)
                    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
                    .map((c) => ({
                        id: c.id,
                        brandName: c.title,
                        price: '',
                        category: c.description || (c.priority || ''),
                        logoBg: 'avatar-soft-primary',
                        initLogo: (c.title || '').charAt(0).toUpperCase() || '·',
                        growth: 'normal',
                        status: '',
                        lastUsed: c.dueDate ? String(c.dueDate) : '',
                        btnClass: priorityBadge(c.priority),
                    })),
            }));
        },
    },
    actions: {
        // ---- Board ----
        async fetchBoards() {
            this.loading = true;
            this.error = null;
            try {
                const res = await boardAPI.getBoards();
                this.boards = res.data ?? res;
                // 默认选中第一个 PIPELINE 看板
                if (!this.selectedBoardId && this.boards.length) {
                    const first = this.boards.find((b) => b.type === 'PIPELINE') || this.boards[0];
                    await this.selectBoard(first.id);
                }
            } catch (err) {
                this.error = err.message || '获取看板列表失败';
                console.error('[pipeline] fetchBoards failed:', err);
            } finally {
                this.loading = false;
            }
        },

        async createBoard(data) {
            this.error = null;
            try {
                const res = await boardAPI.createBoard(data);
                const board = res.data ?? res;
                this.boards.push(board);
                return board;
            } catch (err) {
                this.error = err.message || '创建看板失败';
                console.error('[pipeline] createBoard failed:', err);
                throw err;
            }
        },

        async deleteBoard(boardId) {
            this.error = null;
            try {
                const res = await boardAPI.deleteBoard(boardId);
                this.boards = this.boards.filter((b) => b.id !== boardId);
                if (this.selectedBoardId === boardId) {
                    this.selectedBoardId = null;
                    this.selectedBoard = null;
                    this.columns = [];
                    this.cards = [];
                    await this.fetchBoards();
                }
                return res;
            } catch (err) {
                this.error = err.message || '删除看板失败';
                console.error('[pipeline] deleteBoard failed:', err);
                throw err;
            }
        },

        async selectBoard(boardId) {
            this.selectedBoardId = boardId;
            this.selectedBoard = this.boards.find((b) => b.id === boardId) || null;
            this.columns = [];
            this.cards = [];
            await Promise.all([this.fetchColumns(boardId), this.fetchCards(boardId)]);
        },

        // ---- Column ----
        async fetchColumns(boardId) {
            this.error = null;
            try {
                const res = await boardAPI.getColumns(boardId);
                this.columns = res.data ?? res ?? [];
            } catch (err) {
                this.error = err.message || '获取列失败';
                console.error('[pipeline] fetchColumns failed:', err);
            }
        },

        async createColumn(name) {
            if (!this.selectedBoardId) throw new Error('请先选择看板');
            this.error = null;
            try {
                const res = await boardAPI.createColumn(this.selectedBoardId, {
                    name,
                    position: this.columns.length,
                });
                const col = res.data ?? res;
                this.columns.push(col);
                return col;
            } catch (err) {
                this.error = err.message || '创建列失败';
                console.error('[pipeline] createColumn failed:', err);
                throw err;
            }
        },

        async updateColumn(columnId, name) {
            this.error = null;
            try {
                const res = await boardAPI.updateColumn(this.selectedBoardId, columnId, { name });
                const col = res.data ?? res;
                const idx = this.columns.findIndex((c) => c.id === columnId);
                if (idx !== -1) this.columns[idx] = col;
                return col;
            } catch (err) {
                this.error = err.message || '更新列失败';
                console.error('[pipeline] updateColumn failed:', err);
                throw err;
            }
        },

        async deleteColumn(columnId) {
            this.error = null;
            try {
                const res = await boardAPI.deleteColumn(this.selectedBoardId, columnId);
                this.columns = this.columns.filter((c) => c.id !== columnId);
                this.cards = this.cards.filter((c) => c.columnId !== columnId);
                return res;
            } catch (err) {
                this.error = err.message || '删除列失败';
                console.error('[pipeline] deleteColumn failed:', err);
                throw err;
            }
        },

        // ---- Card ----
        async fetchCards(boardId) {
            this.error = null;
            try {
                const res = await boardAPI.getCards(boardId);
                this.cards = res.data ?? res ?? [];
            } catch (err) {
                this.error = err.message || '获取卡片失败';
                console.error('[pipeline] fetchCards failed:', err);
            }
        },

        async createCard(columnId, newDeal) {
            if (!this.selectedBoardId) throw new Error('请先选择看板');
            this.error = null;
            try {
                const title = typeof newDeal === 'string' ? newDeal : newDeal?.title || '';
                const res = await boardAPI.createCard(this.selectedBoardId, columnId, {
                    title,
                    description: typeof newDeal === 'object' ? newDeal.description || '' : '',
                    priority: typeof newDeal === 'object' ? newDeal.priority || 'MEDIUM' : 'MEDIUM',
                });
                const card = res.data ?? res;
                this.cards.push(card);
                return card;
            } catch (err) {
                this.error = err.message || '创建交易失败';
                console.error('[pipeline] createCard failed:', err);
                throw err;
            }
        },

        async deleteCard(cardId) {
            this.error = null;
            try {
                const res = await boardAPI.deleteCard(cardId);
                this.cards = this.cards.filter((c) => c.id !== cardId);
                return res;
            } catch (err) {
                this.error = err.message || '删除交易失败';
                console.error('[pipeline] deleteCard failed:', err);
                throw err;
            }
        },

        async moveCard(cardId, data) {
            this.error = null;
            try {
                const res = await boardAPI.moveCard(cardId, data);
                const updated = res.data ?? res;
                const idx = this.cards.findIndex((c) => c.id === cardId);
                if (idx !== -1) this.cards[idx] = updated;
                return updated;
            } catch (err) {
                this.error = err.message || '移动交易失败';
                console.error('[pipeline] moveCard failed:', err);
                throw err;
            }
        },

        // ---- Existing UI logic (kept as-is) ----
        setBoardName(name) {
            this.boardName = name;
        },
        setOldBoardName(name) {
            this.oldBoardName = name;
        },
        setColumnIndex(index) {
            this.columnIndex = index;
        },
    },
});