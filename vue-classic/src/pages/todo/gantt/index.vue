<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'todoapp-wrap ganttapp-wrap full-screenapp',
        { 'todoapp-sidebar-toggle': showSidebar },
      ]"
    >
      <GanttSidebar />
      <div class="todoapp-content">
        <div class="todoapp-detail-wrap">
          <GanttHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <GanttBody />
        </div>

        <!-- Add New Task -->
        <AddNewTask />
        <!-- /Add New Task -->
        <!-- Add Project -->
        <AddNewProject />
        <!-- /Add Project -->
      </div>
    </div>
  </div>
</template>

<script>
import GanttSidebar from "./GanttSidebar.vue";
import GanttHeader from "./GanttHeader.vue";
import GanttBody from "./GanttBody.vue";
import AddNewTask from "../AddNewTask.vue";
import AddNewProject from "./AddNewProject.vue";

export default {
  name: "Gantt",
  components: {
    GanttSidebar,
    GanttHeader,
    GanttBody,
    AddNewTask,
    AddNewProject,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
