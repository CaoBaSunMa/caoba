import { useEffect } from 'react';
import { nanoid } from "nanoid";
import { useTasks } from '../../../context/TaskProvider';

export const useTaskListData = () => {
    const { tasks, fetchTasks, loading } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const TaskListData = tasks.reduce((groups, task) => {
        const groupKey = task.task_group || task.group || '未分类';
        let group = groups.find((g) => g.task_group === groupKey);
        if (!group) {
            group = { id: nanoid(), task_group: groupKey, tasks: [] };
            groups.push(group);
        }
        group.tasks.push({
            id: task.id || nanoid(),
            checked: task.checked || false,
            stared: task.stared || task.starred || false,
            task_name: task.task_name || task.title || task.name || '',
            priority: task.priority,
            indicator: task.indicator || task.priorityIndicator || 'warning',
            task_time: task.task_time || task.time || [{ time: '', text: '' }],
            img: task.img || task.avatar,
            badge: task.badge || task.tags,
            init_avt: task.init_avt || task.initAvatar,
        });
        return groups;
    }, []);

    return { TaskListData, loading };
};
