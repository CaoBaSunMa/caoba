'use client';
// import Gantt from 'frappe-gantt';
import Gantt from './gantt-master/src/index';
import { useEffect, useRef } from 'react'

const HkGantt = ({ tasks, onClick, onViewChange, onDateChange, onProgressChange, viewMode, customPopupHtml }) => {

    const chartRef = useRef(null);

    const popupHtml = task => {
        // const end_date = task._end.format('MMM D');
        // this.setState({ editTask: "open" });
        return `
        <div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">
          <div class="arrow">
        </div>
        <div class="popover-body">
        <h5>${task.name}</h5>
        <p class="mb-2">预计完成时间：${task.end}</p>
        <div class="progress mb-2" style="height: 10px;"><div class="progress-bar" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}" aria-valuemin="0" aria-valuemax="100">${task.progress}%</div></div></div></div>
        `;
    };


    useEffect(() => {
        const wrapper = chartRef.current;
        if (!wrapper) return;

        // The library builds its own <svg class="gantt"> and then re-parents it inside a
        // .gantt-container it appends to whatever element it was handed — so a React-
        // rendered <svg> gets wrapped, and every extra construction stacks another
        // container plus another .popup-wrapper inside the previous one. Handing it an
        // empty <div> we own (and wiping it on cleanup) keeps repeat runs flat.
        wrapper.innerHTML = '';

        // An empty task list leaves gantt_start null, and setup_gantt_dates() then calls
        // date_utils.start_of(null), which throws. Callers render their own empty state.
        if (!tasks || tasks.length === 0) return;

        new Gantt(wrapper, tasks, {
            on_click: onClick,
            on_view_change: onViewChange,
            on_date_change: (task, start, end) => onDateChange && onDateChange(task, start, end),
            on_progress_change: (task, progress) => onProgressChange && onProgressChange(task, progress),
            view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
            view_mode: viewMode,
            custom_popup_html: customPopupHtml ? customPopupHtml : popupHtml,
        })
        // The constructor already applies options.view_mode, so no extra
        // change_view_mode() pass (it would just re-render the whole chart).

        return () => { wrapper.innerHTML = ''; };
    }, [tasks, onClick, onViewChange, onDateChange, onProgressChange, viewMode, customPopupHtml])

    return <div ref={chartRef} />
}

export default HkGantt
