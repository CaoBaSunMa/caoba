import { useEffect } from 'react';
import { useBoard } from '../../../context/BoardProvider';

export const ITEM_TYPES = {
    CARD: "card",
    TASK: "task"
};

export const usePipelineDataset = () => {
    const { columns: boardColumns, cards: boardCards, fetchBoards, selectedBoardId, loading } = useBoard();

    useEffect(() => {
        fetchBoards();
    }, [fetchBoards]);

    const tasksMap = {};
    const cardsMap = {};
    const cardOrder = [];

    boardColumns.forEach((col, colIdx) => {
        const cardId = String(col.id || `card-${colIdx + 1}`);
        const cardTaskIds = [];

        (col.cards || []).forEach((card, taskIdx) => {
            const taskId = String(card.id || `task-${colIdx * 100 + taskIdx + 1}`);
            cardTaskIds.push(taskId);
            tasksMap[taskId] = {
                id: taskId,
                symbolLogo: card.symbolLogo || card.icon || undefined,
                logo: card.logo || undefined,
                initLogo: card.initLogo || undefined,
                logoBg: card.logoBg || undefined,
                brandName: card.brandName || card.title || card.name || '',
                price: card.price || card.amount || '',
                type: card.type || '',
                avatar: card.avatar || undefined,
                lastUsed: card.lastUsed || '',
                status: card.status || undefined,
                growth: card.growth || 'normal',
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
