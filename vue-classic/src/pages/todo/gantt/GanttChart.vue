<template>
    <simplebar :auto-hide="false" class="split" id="split_2" style="max-height: 100vh">
        <div class="gantt-wrap">
            <div class="gantt-container">
                <div class="gantt">
                    <HkGantt v-if="tasks.length" :tasks="tasks" :viewMode="viewMode" @progress-change="logProgress"
                        @date-change="logDateChange" />
                    <div v-else class="text-center py-5 text-secondary">
                        <div class="spinner-border text-primary mb-2" role="status"></div>
                        <div>正在加载任务…</div>
                    </div>
                </div>
            </div>
        </div>
    </simplebar>
</template>

<script>
import { computed, ref, onMounted, watch } from 'vue';
import SimpleBar from 'simplebar-vue';
import HkGantt from '@/hk-components/@hk-gantt/HkGantt.vue';
import { useTodoStore } from '@/stores/todoStore';

function pad(n) {
  return String(n).padStart(2, '0');
}
function toDateStr(d) {
  if (!d) return null;
  if (typeof d === 'string') return d.slice(0, 10);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default {
    name: 'GanttChart',
    components: {
        SimpleBar,
        HkGantt
    },
    setup() {
        const todoStore = useTodoStore();

        const tasks = ref([]);

        const buildTasks = () => {
            const now = new Date();
            return (todoStore.$state.tasks || []).map((t, i) => {
                let start = toDateStr(t.startDate || t.createdAt);
                if (!start) {
                    const d = new Date(now);
                    d.setDate(d.getDate() - i);
                    start = toDateStr(d);
                }
                const end = toDateStr(t.dueDate) || start;
                return {
                    id: 'task_' + t.id,
                    name: t.title || '未命名任务',
                    start,
                    end,
                    progress: Number(t.progress) || 0,
                    _src: t,
                };
            });
        };

        const sync = () => {
            tasks.value = buildTasks();
        };

        onMounted(async () => {
            if (!todoStore.$state.tasks.length) {
                await todoStore.fetchTasks({});
            }
            sync();
            const element = document.querySelector('#split_2 .simplebar-content-wrapper');
            element?.scrollTo({ left: 500, behavior: 'smooth' });
        });

        watch(() => todoStore.$state.tasks, sync, { deep: true });

        const viewMode = computed(() => todoStore.$state.vm);

        const updateTaskGantt = async (task, patch) => {
            const src = task._src;
            if (!src) return;
            try {
                await todoStore.updateTask(src.id, patch);
            } catch (err) {
                console.error('[gantt] update failed:', err);
            }
        };

        const logProgress = (task, progress) => {
            updateTaskGantt(task, { progress: Number(progress) || 0 });
        };

        const logDateChange = (task, start, end) => {
            updateTaskGantt(task, {
                startDate: toDateStr(start) || toDateStr(task.start),
                dueDate: toDateStr(end) || toDateStr(task.end),
            });
        };

        // gantt chart scroll to view port when veiw mode changed
        watch(viewMode, () => {
            const element = document.querySelector('#split_2 .simplebar-content-wrapper');

            setTimeout(() => {
                if (viewMode.value === 'Day' || viewMode.value === 'Quarter Day') {
                    element?.scrollTo({ left: 1000, behavior: 'smooth' });
                }
                else {
                    element?.scrollTo({ left: 500, behavior: 'smooth' });
                }
            }, 200);

        });

        return {
            tasks,
            logProgress,
            logDateChange,
            viewMode

        };
    }
};
</script>