import { defineStore } from 'pinia';
import { boardAPI } from '@/services/modules';

const priorityBadge = (p) => {
    switch ((p || '').toUpperCase()) {
        case 'URGENT': return { title: '紧急', bg: 'badge-soft-danger' };
        case 'HIGH': return { title: '高', bg: 'badge-soft-danger' };
        case 'MEDIUM': return { title: '中', bg: 'badge-soft-warning' };
        case 'LOW': return { title: '低', bg: 'badge-soft-info' };
        default: return { title: '普通', bg: 'badge-soft-primary' };
    }
};

export const useKanbanStore = defineStore('kanban', {
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
        // 映射为模板需要的列结构 { id, title, tasks: [...] }
        boardColumns(state) {
            const cols = state.columns
                .slice()
                .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
            return cols.map((col) => ({
                id: col.id,
                columnId: col.id,
                title: col.name || col.title || '',
                tasks: state.cards
                    .filter((c) => c.columnId === col.id)
                    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
                    .map((c) => ({
                        id: c.id,
                        Task_Name: c.title,
                        Description: c.description || '',
                        Priority: c.priority,
                        Deadline: c.dueDate ? String(c.dueDate) : '',
                        Footer: !!c.dueDate,
                        Task_Counter: '',
                        Task_Discuss: '',
                        Progressed_Value: c.status === 'COMPLETED' ? 100 : 50,
                        Badges: [priorityBadge(c.priority)],
                        Avatar: [],
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
                // 默认选中第一个 KANBAN 看板
                if (!this.selectedBoardId && this.boards.length) {
                    const first = this.boards.find((b) => b.type === 'KANBAN') || this.boards[0];
                    await this.selectBoard(first.id);
                }
            } catch (err) {
                this.error = err.message || '获取看板列表失败';
                console.error('[kanban] fetchBoards failed:', err);
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
                console.error('[kanban] createBoard failed:', err);
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
                console.error('[kanban] deleteBoard failed:', err);
                throw err;
            }
        },

        async selectBoard(boardId) {
            this.selectedBoardId = boardId;
            this.selectedBoard =
                this.boards.find((b) => b.id === boardId) || null;
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
                console.error('[kanban] fetchColumns failed:', err);
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
                console.error('[kanban] createColumn failed:', err);
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
                console.error('[kanban] updateColumn failed:', err);
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
                console.error('[kanban] deleteColumn failed:', err);
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
                console.error('[kanban] fetchCards failed:', err);
            }
        },

        async createCard(columnId, newTask) {
            if (!this.selectedBoardId) throw new Error('请先选择看板');
            this.error = null;
            try {
                const title =
                    typeof newTask === 'string' ? newTask : newTask?.title || '';
                const res = await boardAPI.createCard(this.selectedBoardId, columnId, {
                    title,
                    description: typeof newTask === 'object' ? newTask.description || '' : '',
                    priority: typeof newTask === 'object' ? newTask.priority || 'MEDIUM' : 'MEDIUM',
                });
                const card = res.data ?? res;
                this.cards.push(card);
                return card;
            } catch (err) {
                this.error = err.message || '创建卡片失败';
                console.error('[kanban] createCard failed:', err);
                throw err;
            }
        },

        async updateCard(cardId, data) {
            this.error = null;
            try {
                const res = await boardAPI.updateCard(cardId, data);
                const card = res.data ?? res;
                const idx = this.cards.findIndex((c) => c.id === cardId);
                if (idx !== -1) this.cards[idx] = card;
                return card;
            } catch (err) {
                this.error = err.message || '更新卡片失败';
                console.error('[kanban] updateCard failed:', err);
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
                this.error = err.message || '删除卡片失败';
                console.error('[kanban] deleteCard failed:', err);
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
                this.error = err.message || '移动卡片失败';
                console.error('[kanban] moveCard failed:', err);
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