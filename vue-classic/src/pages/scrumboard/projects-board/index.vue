<template>
  <div class="hk-pg-body py-0">
    <div :class="['taskboardapp-wrap', { 'taskboardapp-sidebar-toggle': !showSidebar }]">
      <BoardSidebar boardType="ALL" mode="navigate" />
      <TaskBoard :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </div>
    <AddNewTask boardType="PROJECT" />
  </div>
</template>

<script>
import TaskBoard from "./TaskBoard.vue";
import BoardSidebar from "../BoardSidebar.vue";
import AddNewTask from "../AddNewTask.vue";

export default {
  components: {
    TaskBoard,
    BoardSidebar,
    AddNewTask,
  },
  data() {
    return {
      showSidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>