import { defineStore } from 'pinia';
import { taskAPI } from '@/services/modules';

const PRIO_LABEL = { URGENT: '紧急', HIGH: '高', MEDIUM: '中', LOW: '低' };
const PRIO_EN = { URGENT: 'Urgent', HIGH: 'High', MEDIUM: 'Medium', LOW: 'Low' };
const PRIO_INDICATOR = { URGENT: 'badge-danger', HIGH: 'badge-danger', MEDIUM: 'badge-warning', LOW: 'badge-gold' };
const STATUS_LABEL = { TODO: '待办', IN_PROGRESS: '进行中', DONE: '已完成' };
const STATUS_BG = { TODO: 'badge-warning', IN_PROGRESS: 'badge-primary', DONE: 'badge-success' };

export const useTodoStore = defineStore('todo', {
    state: () => ({
        // API data
        tasks: [],
        loading: false,
        error: null,
        // UI state
        vm: 'Week',
        filter: 'all',               // all | todo | in-progress | done | urgent | high | medium | low | keyword
        keyword: '',
        selectedTask: null,
        editingTask: null,
    }),
    getters: {
        /** 过滤后的任务 */
        visibleTasks(state) {
            let list = state.tasks;
            if (state.filter === 'todo') list = list.filter(t => t.status === 'TODO');
            else if (state.filter === 'in-progress') list = list.filter(t => t.status === 'IN_PROGRESS');
            else if (state.filter === 'done') list = list.filter(t => t.status === 'DONE');
            else if (state.filter === 'urgent') list = list.filter(t => t.priority === 'URGENT');
            else if (state.filter === 'high') list = list.filter(t => t.priority === 'HIGH');
            else if (state.filter === 'medium') list = list.filter(t => t.priority === 'MEDIUM');
            else if (state.filter === 'low') list = list.filter(t => t.priority === 'LOW');
            if (state.keyword) {
                const kw = state.keyword.toLowerCase();
                list = list.filter(t => (t.title || '').toLowerCase().includes(kw));
            }
            return list;
        },
        /** 按状态分组，映射为模板结构 [{id,title,tasks:[...]}] */
        groups(state) {
            const visible = this.visibleTasks;
            const order = ['TODO', 'IN_PROGRESS', 'DONE'];
            const result = [];
            for (const st of order) {
                const items = visible.filter(t => t.status === st);
                if (items.length) {
                    result.push({
                        id: 'group_' + st.toLowerCase(),
                        title: STATUS_LABEL[st],
                        tasks: items.map(t => this.mapTask(t)),
                    });
                }
            }
            if (this.visibleTasks.length) {
                const extra = visible.filter(t => !order.includes(t.status || ''));
                if (extra.length) {
                    result.push({
                        id: 'group_other',
                        title: '其他',
                        tasks: extra.map(t => this.mapTask(t)),
                    });
                }
            }
            return result;
        },
        countTasks(state) {
            return state.tasks.length;
        },
        doneCount(state) {
            return state.tasks.filter(t => t.status === 'DONE').length;
        },
        activeCount(state) {
            return state.tasks.filter(t => t.status !== 'DONE').length;
        },
    },
    actions: {
        // ---- API actions ----
        async fetchTasks(params) {
            this.loading = true;
            this.error = null;
            try {
                const res = await taskAPI.getTasks(params);
                this.tasks = res.data ?? [];
            } catch (err) {
                this.error = err.response?.data?.message || err.message;
                console.error('[todo] fetchTasks failed:', err);
            } finally {
                this.loading = false;
            }
        },

        async createTask(data) {
            this.loading = true;
            this.error = null;
            try {
                const res = await taskAPI.createTask(data);
                const task = res.data ?? res;
                const idx = this.tasks.findIndex(t => t.id === task.id);
                if (idx !== -1) this.tasks[idx] = task;
                else this.tasks.push(task);
                return task;
            } catch (err) {
                this.error = err.response?.data?.message || err.message;
                console.error('[todo] createTask failed:', err);
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async updateTask(id, data) {
            this.loading = true;
            this.error = null;
            try {
                const res = await taskAPI.updateTask(id, data);
                const updated = res.data ?? res;
                const idx = this.tasks.findIndex(t => t.id === id);
                if (idx !== -1) this.tasks[idx] = updated;
                if (this.selectedTask?.id === id) this.selectedTask = updated;
                return updated;
            } catch (err) {
                this.error = err.response?.data?.message || err.message;
                console.error('[todo] updateTask failed:', err);
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async updateStatus(id, status) {
            try {
                const res = await taskAPI.updateStatus(id, status);
                const updated = res.data ?? res;
                const idx = this.tasks.findIndex(t => t.id === id);
                if (idx !== -1) this.tasks[idx] = { ...this.tasks[idx], status };
                if (this.selectedTask?.id === id) this.selectedTask = { ...this.selectedTask, status };
                return updated;
            } catch (err) {
                this.error = err.response?.data?.message || err.message;
                console.error('[todo] updateStatus failed:', err);
                throw err;
            }
        },

        async deleteTask(id) {
            this.loading = true;
            this.error = null;
            try {
                await taskAPI.deleteTask(id);
                this.tasks = this.tasks.filter(t => t.id !== id);
                if (this.selectedTask?.id === id) this.selectedTask = null;
            } catch (err) {
                this.error = err.response?.data?.message || err.message;
                console.error('[todo] deleteTask failed:', err);
                throw err;
            } finally {
                this.loading = false;
            }
        },

        // ---- UI actions ----
        changeVm(newVm) {
            this.vm = newVm;
        },
        selectTask(task) {
            this.selectedTask = task;
        },
        setFilter(filter) {
            this.filter = filter;
            this.keyword = '';
        },
        setKeyword(kw) {
            this.filter = 'all';
            this.keyword = kw || '';
        },
        /** 面板任务 → 模板行结构 */
        mapTask(t) {
            const prio = t.priority || 'MEDIUM';
            return {
                id: t.id,
                task_name: t.title || '未命名任务',
                checked: t.status === 'DONE',
                stared: false,
                priority: PRIO_EN[prio] || 'Medium',
                indicator: PRIO_INDICATOR[prio] || 'badge-warning',
                task_time: [{ time: t.dueDate ? '截止 ' + t.dueDate : '', textClass: t.dueDate ? 'text-primary' : '' }],
                badge: [{ text: STATUS_LABEL[t.status] || t.status, bg: STATUS_BG[t.status] || 'badge-warning' }],
                _src: t,
            };
        },
        prioLabel(p) {
            return PRIO_LABEL[p] || p;
        },
    }
});