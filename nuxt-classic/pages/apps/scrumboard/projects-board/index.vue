<template>
  <div class="hk-pg-body py-0">
    <div :class="['taskboardapp-wrap', { 'taskboardapp-sidebar-toggle': !showSidebar }]">
      <BoardSidebar />
      <TaskBoard :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </div>
  </div>
</template>

<script>
import TaskBoard from "@/components/scrumboard/projects-board/TaskBoard.vue";
import BoardSidebar from "@/components/scrumboard/BoardSidebar.vue";

export default {
  components: {
    TaskBoard,
    BoardSidebar,
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
