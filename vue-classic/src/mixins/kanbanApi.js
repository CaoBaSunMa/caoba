// Mixins for Kanban board functionality - 走后端 API
export const kanbanMixins = {
    methods: {
        // 编辑列标题
        async editTitle(oldBoardName, newTitle) {
            const columnIndex = this.columns.findIndex((c) => c.title === oldBoardName);
            if (columnIndex === -1 || this.columns[columnIndex].id == null) return;
            await this.kanbanStore.updateColumn(this.columns[columnIndex].id, newTitle);
        },
        // 删除卡片（走后端 API）
        async removeTask(columnIndex, taskId) {
            await this.kanbanStore.deleteCard(taskId);
        },
        // 清除列内全部任务
        async removeAllTasks(columnIndex) {
            const col = this.columns[columnIndex];
            if (!col) return;
            const tasks = [...(col.tasks || [])];
            for (const t of tasks) {
                try {
                    await this.kanbanStore.deleteCard(t.id);
                } catch (e) {
                    console.error('[kanban] clear task failed:', t.id, e);
                }
            }
        },
        // 新增卡片（走后端 API）
        async addNewTask(columnIndex, newTask) {
            const col = this.columns[columnIndex];
            if (!col) return;
            await this.kanbanStore.createCard(col.id, {
                title: newTask,
                priority: 'MEDIUM',
            });
        },
        // 删除整列（走后端 API）
        async deleteBoard(boardIndex) {
            const col = this.columns[boardIndex];
            if (!col || col.id == null) return;
            await this.kanbanStore.deleteColumn(col.id);
        },
        // 新建列（走后端 API）
        async addNewBoard(newBoard) {
            await this.kanbanStore.createColumn(newBoard);
        },
    }
};