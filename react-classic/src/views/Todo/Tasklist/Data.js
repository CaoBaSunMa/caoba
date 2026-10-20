import { useEffect } from 'react';
import { useTasks } from '../../../context/TaskProvider';

export const useTodoDataset = () => {
    const { tasks, fetchTasks, loading } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const tasksMap = {};
    const cardsMap = {};
    const cardOrder = [];
    const groupTaskIds = {};

    tasks.forEach((task) => {
        const taskId = task.id || `task-${task.id}`;
        tasksMap[taskId] = {
            id: taskId,
            checked: task.checked || false,
            stared: task.stared || task.starred || false,
            task_name: task.task_name || task.title || task.name || '',
            priority: task.priority,
            indicator: task.indicator || task.priorityIndicator || 'warning',
            task_time: task.task_time || task.time || [{ time: '', text: '' }],
            img: task.img || task.avatar,
            badge: task.badge || task.tags,
            init_avt: task.init_avt || task.initAvatar,
        };

        const groupKey = task.task_group || task.group || '未分类';
        if (!groupTaskIds[groupKey]) {
            groupTaskIds[groupKey] = [];
        }
        groupTaskIds[groupKey].push(taskId);
    });

    let cardIdx = 1;
    Object.entries(groupTaskIds).forEach(([groupTitle, taskIds]) => {
        const cardId = `card-${cardIdx++}`;
        cardsMap[cardId] = {
            id: cardId,
            title: groupTitle,
            taskIds,
        };
        cardOrder.push(cardId);
    });

    const DATASET = { tasks: tasksMap, cards: cardsMap, cardOrder };

    return { DATASET, loading };
};
