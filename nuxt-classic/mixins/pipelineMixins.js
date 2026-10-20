import { nanoid } from "nanoid";
//Images
import symbolAvatar4 from '@/assets/img/symbol-avatar-4.png';
import avatar8 from '@/assets/img/avatar8.jpg';

// Mixins for pipeline board functionality
export const pipelineMixins = {
    methods: {
        // Edit the title of a column
        editTitle(oldBoardName, newTitle, modalRef) {
            const columnIndex = this.columns.findIndex(c => c.title === oldBoardName);
            this.columns[columnIndex].title = newTitle;
            modalRef.hide();
        },
        // Remove a task from a column
        removeTask(columnIndex, taskId) {
            const column = this.columns[columnIndex];
            column.leads = column.leads.filter(task => task.id !== taskId);
        },
        // Remove all tasks from a column
        removeAllTasks(columnIndex) {
            this.columns[columnIndex].leads = [];
        },
        // Add a new task to a column
        addNewDeal(columnIndex, newTask, modalRef) {
            this.columns[columnIndex].leads.push({
                id: nanoid(),
                symbolLogo: symbolAvatar4,
                brandName: newTask,
                price: "$16,528",
                type: "Dashboard Template",
                avatar: avatar8,
                lastUsed: "9 days"
            });
            modalRef.hide();
        },
        //delete a board
        deleteBoard(boardIndex) {
            this.columns.splice(boardIndex, 1);
        },
        // Add a new board
        addNewBoard(newBoard, modalRef) {
            this.columns.push({
                title: newBoard,
                leads: []
            });
            modalRef.hide();
        },
    }
};
