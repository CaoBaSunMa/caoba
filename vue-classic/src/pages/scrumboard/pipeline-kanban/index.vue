<template>
  <div class="hk-pg-body py-0">
    <div class="taskboardapp-wrap">
      <div class="taskboardapp-content ps-0">
        <div class="taskboardapp-detail-wrap">
          <PipelineHeader />
          <LeadBoard />
        </div>

        <!-- Add New Deal -->
        <AddNewDeal />
        <!-- /Add New Deal -->

        <!-- Add Lead Board -->
        <AddNewLeadBoard />
        <!-- /Add Lead Board -->

        <!-- Edit Task List -->
        <EditLeadBoard />
        <!-- /Edit Task List -->
      </div>
    </div>
    <div class="hk-fixed-footer">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center h-80p">
          <button type="button" class="btn btn-danger w-200p me-3">流失</button>
          <button type="button" class="btn btn-primary w-200p">成交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PipelineHeader from "./PipelineHeader.vue";
import LeadBoard from "./LeadBoard.vue";
import EditLeadBoard from "./EditLeadBoard.vue";
import AddNewDeal from "./AddNewDeal.vue";
import AddNewLeadBoard from "./AddNewLeadBoard.vue";
import { usePipelineStore } from "@/stores/pipeline";

export default {
  name: "PipelineKanban",
  components: {
    PipelineHeader,
    LeadBoard,
    EditLeadBoard,
    AddNewDeal,
    AddNewLeadBoard,
  },
  mounted() {
    const pipelineStore = usePipelineStore();
    if (!pipelineStore.boards.length) pipelineStore.fetchBoards();
  },
};
</script>
