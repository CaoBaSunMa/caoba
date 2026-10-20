import { useEffect } from 'react';
import { useBoard } from '../../../context/BoardProvider';

export const ITEM_TYPES = {
    CARD: "card",
    TASK: "task"
};

export const useKanbanDataset = () => {
    const { columns: boardColumns, cards: boardCards, fetchBoards, selectedBoardId, loading } = useBoard();

    useEffect(() => {
        fetchBoards();
    }, [fetchBoards]);

    const tasksMap = {};
    const cardsMap = {};
    const cardOrder = [];

    boardColumns.forEach((col, colIdx) => {
        const cardId = col.id || `card-${colIdx + 1}`;
        const cardTaskIds = [];

        (col.cards || []).forEach((card, taskIdx) => {
            const taskId = card.id || `task-${colIdx * 100 + taskIdx + 1}`;
            cardTaskIds.push(taskId);
            tasksMap[taskId] = {
                id: taskId,
                Task_Name: card.title || card.name || '',
                Avatar: card.assignees || card.avatar ? (Array.isArray(card.assignees || card.avatar) ? (card.assignees || card.avatar) : []) : [],
                InitAvatar: card.initAvatar,
                Description: card.description || '',
                Footer: card.footer !== undefined ? card.footer : true,
                Task_Counter: card.counter || card.progress || '',
                Task_Discuss: card.discussion || card.comments || '',
                Deadline: card.deadline || card.dueDate || '',
                Progressed_Value: card.progress || card.progressValue,
                Badges: card.badges || card.tags,
            };
        });

        cardsMap[cardId] = {
            id: cardId,
            title: col.title || col.name || '',
            taskIds: cardTaskIds,
        };
        cardOrder.push(cardId);
    });

    const DATASET = { tasks: tasksMap, cards: cardsMap, cardOrder };

    return { DATASET, loading };
};
