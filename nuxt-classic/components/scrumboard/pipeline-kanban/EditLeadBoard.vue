<template>
  <BModal ref="editDealModal" id="edit_task_list" size="sm" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">编辑任务列表</h5>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="deal-board">
            <BFormInput id="deal-board" type="text" v-model="boardName" />
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 取消 </BButton>
      <BButton
        variant="primary"
        @click="editTitle(pipelineStore.$state.oldBoardName, boardName, editDealModal)"
      >
        保存
      </BButton>
    </template>
  </BModal>
</template>

<script>
import { useKanbanStore } from "@/stores/kanbanStore";
import { computed, ref, onMounted } from "vue";

export default {
  name: "EditLeadBoard",
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
    const pipelineStore = usePipelineStore();
    const boardName = computed({
      get: () => pipelineStore.$state.boardName,
      set: (value) => {
        pipelineStore.setBoardName(value);
      },
    });

    // Modal reference
    const editDealModal = ref(null);

    // Function to close the modal
    const closeModal = () => {
      editDealModal.value.hide(); // Close the modal programmatically
    };

    return {
      pipelineStore,
      boardName,
      editDealModal,
      closeModal,
    };
  },
};
</script>
