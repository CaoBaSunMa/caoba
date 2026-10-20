import { nanoid } from "nanoid";

// Mixins for Kanban board functionality
export const kanbanMixins = {
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
            column.tasks = column.tasks.filter(task => task.id !== taskId);
        },
        // Remove all tasks from a column
        removeAllTasks(columnIndex) {
            this.columns[columnIndex].tasks = [];
        },
        // Add a new task to a column
        addNewTask(columnIndex, newTask,modalRef) {
            this.columns[columnIndex].tasks.push({
                id: nanoid(),
                Task_Name: newTask,
                Footer: true,
                Task_Counter: "4/8",
                Task_Discuss: "24",
                Deadline: "22 Sep, 22"
            });
            modalRef.hide();
        },
        //delete a board
        deleteBoard(boardIndex) {
            this.columns.splice(boardIndex, 1);
        },
        // Add a new board
        addNewBoard(newBoard) {
            this.columns.push({
                title: newBoard,
                tasks: []
            });
        },
    }
};
