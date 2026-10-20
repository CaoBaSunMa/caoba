// Mixins for pipeline board functionality - 走后端 API
export const pipelineMixins = {
    methods: {
        // 编辑列标题
        async editTitle(oldBoardName, newTitle) {
            const columnIndex = this.columns.findIndex((c) => c.title === oldBoardName);
            if (columnIndex === -1 || this.columns[columnIndex].id == null) return;
            await this.pipelineStore.updateColumn(this.columns[columnIndex].id, newTitle);
        },
        // 删除交易卡
        async removeTask(columnIndex, taskId) {
            await this.pipelineStore.deleteCard(taskId);
        },
        // 清除列内全部交易
        async removeAllTasks(columnIndex) {
            const col = this.columns[columnIndex];
            if (!col) return;
            const leads = [...(col.leads || [])];
            for (const l of leads) {
                try {
                    await this.pipelineStore.deleteCard(l.id);
                } catch (e) {
                    console.error('[pipeline] clear lead failed:', l.id, e);
                }
            }
        },
        // 新增交易（走后端 API）
        async addNewDeal(columnIndex, newDeal) {
            const col = this.columns[columnIndex];
            if (!col) return;
            await this.pipelineStore.createCard(col.id, {
                title: newDeal,
                priority: 'MEDIUM',
            });
        },
        // 删除整列（走后端 API）
        async deleteBoard(boardIndex) {
            const col = this.columns[boardIndex];
            if (!col || col.id == null) return;
            await this.pipelineStore.deleteColumn(col.id);
        },
        // 新建列（走后端 API）
        async addNewBoard(newBoard) {
            await this.pipelineStore.createColumn(newBoard);
        },
    }
};