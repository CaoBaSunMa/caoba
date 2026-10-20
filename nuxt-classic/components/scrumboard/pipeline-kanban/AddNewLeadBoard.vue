<template>
  <BModal ref="newDealBoardRef" id="add_task_list" size="sm" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建列表</h5>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="board-name">
            <BFormInput id="board-name" type="text" v-model="boardName" />
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 取消 </BButton>
      <BButton variant="primary" @click="addNewBoard(boardName, newDealBoardRef)">
        添加
      </BButton>
    </template>
  </BModal>
</template>

<script>
import { ref, onMounted } from "vue";
import { useKanbanStore } from "@/stores/kanbanStore";

export default {
  data() {
    return {
      columns: [],
    };
  },
  async mounted() {
    const kanbanStore = useKanbanStore();
    await kanbanStore.fetchBoards();
    const pipelineBoard = kanbanStore.boards.find(b => b.type === 'PIPELINE');
    if (pipelineBoard) {
      await kanbanStore.selectBoard(pipelineBoard.id);
      this.columns = kanbanStore.columns.map(col => ({ title: col.name, id: col.id }));
    }
  },
  setup() {
    const boardName = ref("");
    // Modal reference
    const newDealBoardRef = ref(null);
    // Function to close the modal
    const closeModal = () => {
      newTaskModal.value.hide(); // Close the modal programmatically
    };

    return {
      boardName,
      newDealBoardRef,
      closeModal,
    };
  },
};
</script>
