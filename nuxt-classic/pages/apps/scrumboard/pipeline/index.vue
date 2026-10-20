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
      <BContainer>
        <div class="d-flex justify-content-center align-items-center h-80p">
          <BButton variant="danger" class="w-200p me-3">输</BButton>
          <BButton variant="primary" class="w-200p">赢</BButton>
        </div>
      </BContainer>
    </div>
  </div>
</template>

<script setup>
import PipelineHeader from "@/components/scrumboard/pipeline-kanban/PipelineHeader.vue";
import LeadBoard from "@/components/scrumboard/pipeline-kanban/LeadBoard.vue";
import AddNewDeal from "@/components/scrumboard/pipeline-kanban/AddNewDeal.vue";
import AddNewLeadBoard from "@/components/scrumboard/pipeline-kanban/AddNewLeadBoard.vue";
import EditLeadBoard from "@/components/scrumboard/pipeline-kanban/EditLeadBoard.vue";
</script>
