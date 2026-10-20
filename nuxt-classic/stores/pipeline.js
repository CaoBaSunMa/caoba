import { defineStore } from 'pinia';

export const usePipelineStore = defineStore('pipeline', {
    state: () => ({
        boardName: "",
        oldBoardName: "",
        columnIndex: 0,
    }),
    actions: {
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
})