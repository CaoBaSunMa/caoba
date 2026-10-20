'use client';
import { useCallback, useEffect, useMemo } from 'react';
import SimpleBar from 'simplebar-react';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';
import { useTasks } from '@/context';
import HkGantt from '@/components/@hk-gantt/@hk-gantt';

// `/api/tasks` speaks camelCase (startDate / dueDate) while frappe-gantt wants
// { id, name, start, end, progress }.
//
// Two things the library forces on us:
//  - it MUTATES the objects it is handed (adds _start / _end / _index), so never pass
//    the context state itself, only fresh copies;
//  - it uses `id` for DOM lookups, so ids must be strings (the API returns Long).
//
// A task with neither date is dropped: setup_tasks() calls date_utils.diff() on
// undefined and then start_of(null), which throws.
const toGanttTask = (task, index) => {
    const start = task.startDate || task.start_date;
    const end = task.dueDate || task.due_date;

    if (!start && !end) return null;

    return {
        id: String(task.id ?? `task_${index}`),
        name: task.title || task.name || '未命名任务',
        start: start || undefined,
        end: end || undefined,
        progress: Number.isFinite(task.progress) ? task.progress : 0,
    };
};

const GanttChart = () => {

    const { states } = useGlobalStateContext();
    const { tasks: apiTasks, loading, fetchTasks } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const tasks = useMemo(
        () => (apiTasks || []).map(toGanttTask).filter(Boolean),
        [apiTasks]
    );

    // Stable identities matter here: @hk-gantt rebuilds the entire Gantt instance from
    // scratch whenever any of its effect deps change, and each rebuild appends another
    // .gantt-container to the DOM. Inline arrows would re-fire it on every render.
    const handleProgressChange = useCallback(() => { }, []);
    const handleDateChange = useCallback(() => { }, []);

    // 👇️ bring the chart into view once the API data lands
    useEffect(() => {
        if (!tasks.length) return;
        const element = document.querySelector('#split_2 .simplebar-content-wrapper');
        if (!element) return;
        // Clamp: the real data spans a couple of months, which can be narrower than the
        // old hardcoded 500px offset and would otherwise scroll past the end.
        const max = Math.max(0, element.scrollWidth - element.clientWidth);
        element.scrollTo({ left: Math.min(500, max), behavior: "smooth" });
    }, [tasks]);

    return (
        <SimpleBar autoHide={false} style={{ maxHeight: "100vh" }} className="split" id="split_2" >
            <div className="gantt-wrap">
                <span className="gantt-container" >
                    <span className="gantt">
                        {/* HkGantt crashes on an empty task list (gantt_start stays null),
                            so hold off until there is at least one renderable bar. */}
                        {tasks.length > 0
                            ? (
                                <HkGantt
                                    tasks={tasks}
                                    viewMode={states.todoState.vm}
                                    onProgressChange={handleProgressChange}
                                    onDateChange={handleDateChange}
                                />
                            )
                            : (
                                <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                                    {loading ? '正在加载任务...' : '暂无排期任务'}
                                </div>
                            )}
                    </span>
                </span>
            </div>
        </SimpleBar>
    )
}


export default GanttChart;
