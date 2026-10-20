<template>
  <BModal ref="editTaskModal" id="edit_task_list" size="sm" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">编辑任务列表</h5>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="board-name1">
            <BFormInput id="board-name1" type="text" v-model="boardName" />
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 取消 </BButton>
      <BButton
        variant="primary"
        @click="editTitle(kanbanStore.$state.oldBoardName, boardName, editTaskModal)"
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
  name: "EditTaskList",
  data() {
    return {
      columns: [],
    };
  },
  async mounted() {
    const kanbanStore = useKanbanStore();
    await kanbanStore.fetchBoards();
    const kanbanBoard = kanbanStore.boards.find(b => b.type === 'KANBAN');
    if (kanbanBoard) {
      await kanbanStore.selectBoard(kanbanBoard.id);
      this.columns = kanbanStore.columns.map(col => ({ title: col.name, id: col.id }));
    }
  },
  setup() {
    const kanbanStore = useKanbanStore();
    const boardName = computed({
      get: () => kanbanStore.$state.boardName,
      set: (value) => {
        kanbanStore.setBoardName(value);
      },
    });

    // Modal reference
    const editTaskModal = ref(null);

    // Function to close the modal
    const closeModal = () => {
      editTaskModal.value.hide(); // Close the modal programmatically
    };

    return {
      kanbanStore,
      boardName,
      editTaskModal,
      closeModal,
    };
  },
};
</script>
