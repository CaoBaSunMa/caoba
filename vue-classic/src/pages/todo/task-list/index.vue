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

<script>
import TodoSidebar from "./TodoSidebar.vue";
import TodoHeader from "./TodoHeader.vue";
import TaskList from "./TaskList.vue";
import TaskInfo from "./TaskInfo.vue";
import AddNewTask from "../AddNewTask.vue";

export default {
  components: {
    TodoSidebar,
    TodoHeader,
    TaskList,
    TaskInfo,
    AddNewTask,
  },
  data() {
    return {
      showSidebar: false,
      showTaskInfo: true,
      vpWidth: window.innerWidth,
    };
  },
  mounted() {
    this.checkViewportWidth();

    // Add event listener for resize
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // Remove event listener for resize
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    openInfo() {
      this.showTaskInfo = true;
    },
    closeInfo() {
      this.showTaskInfo = false;
    },

    handleResize() {
      this.vpWidth = window.innerWidth;
      this.checkViewportWidth();
    },
    checkViewportWidth() {
      if (this.vpWidth < 1199) {
        this.showTaskInfo = false;
      } else {
        this.showTaskInfo = true;
      }
    },
  },
};
</script>
