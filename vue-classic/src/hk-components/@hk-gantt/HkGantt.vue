<template>
  <svg ref="chartRef" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import Gantt from './gantt-master/src/index';

export default {
  name: 'HkGantt',
  props: {
    tasks: Array,
    onClick: Function,
    onViewChange: Function,
    onDateChange: Function,
    onProgressChange: Function,
    viewMode: String,
    customPopupHtml: Function
  },
  setup(props) {
    const chartRef = ref(null);
    let gantt = null;

    const popupHtml = task => {
      return `
          <div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">
            <div class="arrow"></div>
            <div class="popover-body">
              <h5>${task.name}</h5>
              <p class="mb-2">Expected to finish by ${task.end}</p>
              <div class="progress mb-2" style="height: 10px;">
                <div class="progress-bar" role="progressbar" style="width: ${task.progress}%;"
                  aria-valuenow="${task.progress}" aria-valuemin="0" aria-valuemax="100">
                  ${task.progress}%
                </div>
              </div>
            </div>
          </div>
        `;
    };

    onMounted(() => {
      gantt = new Gantt(chartRef.value, props.tasks, {
        on_click: props.onClick,
        on_view_change: props.onViewChange,
        on_date_change: props.onDateChange,
        on_progress_change: props.onProgressChange,
        view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
        view_mode: props.viewMode,
        custom_popup_html: props.customPopupHtml || popupHtml,
      });

      gantt.change_view_mode(props.viewMode);
    });

    // Watch for changes in viewMode prop
    watch(() => props.viewMode, (newViewMode) => {
      if (gantt) {
        gantt.change_view_mode(newViewMode);
      }
    });


    return {
      chartRef
    };
  }
};
</script>