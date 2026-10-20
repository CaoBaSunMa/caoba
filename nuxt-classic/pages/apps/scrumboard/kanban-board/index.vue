<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'taskboardapp-wrap',
        { 'taskboardapp-sidebar-toggle': showSidebar },
        { 'taskboardapp-info-active': showInfo },
      ]"
    >
      <BoardSidebar />
      <div class="taskboardapp-content">
        <div class="taskboardapp-detail-wrap">
          <BoardHeader
            :showSidebar="showSidebar"
            @toggle-sidebar="toggleSidebar"
            :showInfo="showInfo"
            @toggle-info="toggleTaskInfo"
          />
          <TaskBoard />
          <TaskInfo @toggle-info="toggleTaskInfo" />
        </div>
        <!-- Task Details -->
        <!-- <TaskDetails /> -->
        <!-- /Task Details -->

        <!-- Add New Card -->
        <AddNewCard />
        <!-- /Add New Card -->

        <!-- Add Task List -->
        <AddNewTaskBoard />
        <!-- /Add Task List -->

        <!-- Edit Task List -->
        <EditTaskList />
        <!-- /Edit Task List -->

        <!-- Add New Board -->
        <AddNewMember />
        <!-- /Add New Board -->

        <!-- Add Fav Board -->
        <AddFavBoard />
        <!-- /Add Fav Board -->
        <AddNewTask />
      </div>
    </div>
  </div>
</template>

<script>
import AddNewMember from "@/components/scrumboard/AddNewMember.vue";
import AddNewCard from "@/components/scrumboard/kanban-board/AddNewCard.vue";
import AddNewTask from "@/components/scrumboard/AddNewTask.vue";
import AddNewTaskBoard from "@/components/scrumboard/kanban-board/AddNewTaskBoard.vue";
import BoardHeader from "@/components/scrumboard/kanban-board/BoardHeader.vue";
import BoardSidebar from "@/components/scrumboard/BoardSidebar.vue";
import EditTaskList from "@/components/scrumboard/kanban-board/EditTaskList.vue";
import TaskBoard from "@/components/scrumboard/kanban-board/TaskBoard.vue";
import TaskInfo from "@/components/scrumboard/kanban-board/TaskInfo.vue";
// import TaskDetails from "@/components/scrumboard/kanban-board/TaskDetails.vue";
import AddFavBoard from "@/components/scrumboard/AddFavBoard.vue";

export default {
  name: "KanbanBoard",
  components: {
    AddNewMember,
    BoardHeader,
    TaskBoard,
    EditTaskList,
    AddNewCard,
    AddNewTaskBoard,
    BoardSidebar,
    AddNewTask,
    TaskInfo,
    // TaskDetails,
    AddFavBoard,
  },
  data() {
    return {
      showSidebar: false,
      showInfo: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    toggleTaskInfo() {
      this.showInfo = !this.showInfo;
    },
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>
