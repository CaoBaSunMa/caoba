<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'todoapp-wrap',
        { 'todoapp-sidebar-toggle': showSidebar, 'todoapp-info-active': showTaskInfo },
      ]"
    >
      <TodoSidebar />
      <div class="todoapp-content">
        <div class="todoapp-detail-wrap">
          <TodoHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <TaskList @open-info="openInfo" />
          <TaskInfo @close-info="closeInfo" />
        </div>
        <!-- Edit Info -->
        <AddNewTask />
        <!-- /Edit Info -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import TodoSidebar from "@/components/todo/task-list/TodoSidebar.vue";
import TodoHeader from "@/components/todo/task-list/TodoHeader.vue";
import TaskList from "@/components/todo/task-list/TaskList.vue";
import TaskInfo from "@/components/todo/task-list/TaskInfo.vue";
import AddNewTask from "@/components/todo/AddNewTask.vue";

// Components
const showSidebar = ref(false);
const showTaskInfo = ref(true);
// SSR 安全：不能在 setup 顶层直接读 window（服务端渲染时会抛 "window is not defined"）。
// 先用桌面端默认值占位，onMounted 后再用真实视口宽度校正。
const vpWidth = ref(1200);

// Methods
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const openInfo = () => {
  showTaskInfo.value = true;
};

const closeInfo = () => {
  showTaskInfo.value = false;
};

const handleResize = () => {
  vpWidth.value = window.innerWidth;
  checkViewportWidth();
};

const checkViewportWidth = () => {
  showTaskInfo.value = vpWidth.value >= 1199;
};

// Lifecycle Hooks
onMounted(() => {
  vpWidth.value = window.innerWidth;
  checkViewportWidth();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
