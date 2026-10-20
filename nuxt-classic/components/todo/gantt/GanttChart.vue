<template>
  <simplebar :auto-hide="false" class="split" id="split_2" style="max-height: 100vh">
    <div class="gantt-wrap">
      <div class="gantt-container">
        <div class="gantt">
          <HkGantt
            :tasks="tasks"
            :viewMode="viewMode"
            @progress-change="logProgress"
            @date-change="logDateChange"
          />
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import HkGantt from "@/hk-components/@hk-gantt/HkGantt.vue";
import { useTodoStore } from "@/stores/todoStore";

const tasks = ref([
  {
    id: "task_1",
    name: "为销售团队起草新的合同文档",
    start: "2019-07-16",
    end: "2019-07-20",
    progress: 55,
  },
  {
    id: "task_2",
    name: "查找旧的合同文档",
    start: "2019-07-19",
    end: "2019-07-21",
    progress: 85,
    dependencies: "task_1",
  },
  {
    id: "task_3",
    name: "组织与销售同事的会议以详细了解需求",
    start: "2019-07-21",
    end: "2019-07-22",
    progress: 80,
    dependencies: "task_2",
  },
  {
    id: "task_4",
    name: "iOS 应用首页",
    start: "2019-07-15",
    end: "2019-07-17",
    progress: 80,
  },
  {
    id: "task_5",
    name: "编写发布说明",
    start: "2019-07-18",
    end: "2019-07-22",
    progress: 65,
    dependencies: "task_4",
  },
  {
    id: "task_6",
    name: "建立新的销售项目",
    start: "2019-07-20",
    end: "2019-07-31",
    progress: 15,
  },
  {
    id: "task_7",
    name: "邀请用户加入项目",
    start: "2019-07-25",
    end: "2019-07-26",
    progress: 99,
    dependencies: "task_6",
  },
  {
    id: "task_8",
    name: "与业务发展部门协调",
    start: "2019-07-28",
    end: "2019-07-30",
    progress: 35,
    dependencies: "task_7",
  },
  {
    id: "task_9",
    name: "看板设计",
    start: "2019-08-01",
    end: "2019-08-03",
    progress: 25,
    dependencies: "task_8",
  },
  {
    id: "task_10",
    name: "启用分析跟踪",
    start: "2019-08-05",
    end: "2019-08-07",
    progress: 60,
    dependencies: "task_9",
  },
]);

const todoStore = useTodoStore();
const viewMode = computed(() => todoStore.$state.vm);

const logProgress = () => {
  // HkGantt @progress-change 回调占位，如需接入后端在此处理
};

const logDateChange = () => {
  // HkGantt @date-change 回调占位，如需接入后端在此处理
};

onMounted(() => {
  const element = document.querySelector("#split_2 .simplebar-content-wrapper");
  element.scrollTo({ left: 500, behavior: "smooth" });
});

// gantt chart scroll to view port when veiw mode changed
watch(viewMode, () => {
  const element = document.querySelector("#split_2 .simplebar-content-wrapper");

  setTimeout(() => {
    if (viewMode.value === "Day" || viewMode.value === "Quarter Day") {
      element.scrollTo({ left: 1000, behavior: "smooth" });
    } else {
      element.scrollTo({ left: 500, behavior: "smooth" });
    }
  }, 200);
});
</script>
