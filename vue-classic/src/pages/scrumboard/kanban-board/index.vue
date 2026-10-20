<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'taskboardapp-wrap',
        { 'taskboardapp-sidebar-toggle': showSidebar },
        { 'taskboardapp-info-active': showInfo },
      ]"
    >
      <BoardSidebar boardType="KANBAN" />
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
        <TaskDetails />
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
        <AddNewTask boardType="KANBAN" />
      </div>
    </div>
  </div>
</template>

<script>
import AddNewMember from "../AddNewMember.vue";
import AddNewCard from "./AddNewCard.vue";
import AddNewTask from "../AddNewTask.vue";
import AddNewTaskBoard from "./AddNewTaskBoard.vue";
import BoardHeader from "./BoardHeader.vue";
import BoardSidebar from "../BoardSidebar.vue";
import EditTaskList from "./EditTaskList.vue";
import TaskBoard from "./TaskBoard.vue";
import TaskInfo from "./TaskInfo.vue";
import TaskDetails from "./TaskDetails.vue";
import AddFavBoard from "../AddFavBoard.vue";
import { useKanbanStore } from "@/stores/kanban";

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
    TaskDetails,
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
    const kanbanStore = useKanbanStore();
    if (!kanbanStore.boards.length) kanbanStore.fetchBoards();
  },
};
</script>
