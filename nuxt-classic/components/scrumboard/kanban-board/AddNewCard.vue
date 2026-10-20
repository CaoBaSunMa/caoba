<template>
  <BModal ref="addNewTaskModal" id="add_new_card" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建卡片</h5>
    <BForm
      @submit.prevent="
        addNewTask(kanbanStore.$state.columnIndex, taskName, addNewTaskModal)
      "
    >
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="task-name" class="mb-3">
            <BFormInput id="task-name" type="text" v-model="taskName" />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <label class="form-label">开始日期</label>
            <date-range-picker
              v-model="startDate"
              :date-range="{ startDate: startDate }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
            />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <label class="form-label">结束日期</label>
            <date-range-picker
              v-model="endDate"
              :dateRange="{ startDate: endDate }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
              append-to-body
            />
          </BFormGroup>
        </BCol>
        <BCol md="12">
          <BFormGroup label="备注/描述" label-for="desc" class="mb-3">
            <BFormTextarea id="desc" rows="3" />
          </BFormGroup>
        </BCol>
        <BCol md="12">
          <BFormGroup class="mt-3">
            <label class="form-label me-3">设置优先级：</label>
            <BFormRadio v-model="selectedPriority" name="priority" value="high" inline>
              高
            </BFormRadio>
            <BFormRadio v-model="selectedPriority" name="priority" value="medium" inline>
              中
            </BFormRadio>
            <BFormRadio v-model="selectedPriority" name="priority" value="low" inline>
              低
            </BFormRadio>
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 取消 </BButton>
      <BButton
        variant="primary"
        @click="addNewTask(kanbanStore.$state.columnIndex, taskName, addNewTaskModal)"
      >
        添加
      </BButton>
    </template>
  </BModal>
</template>

<script>
import { useKanbanStore } from "@/stores/kanbanStore";
import { ref, onMounted } from "vue";

export default {
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
    const taskName = ref("");
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    // 模板里的优先级单选 v-model="selectedPriority" 之前没有定义，
    // SSR 渲染时会报 "Property 'selectedPriority' was accessed during render
    // but is not defined on instance"
    const selectedPriority = ref("medium");

    // Modal reference
    const addNewTaskModal = ref(null);

    // Function to close the modal
    const closeModal = () => {
      addNewTaskModal.value.hide(); // Close the modal programmatically
    };

    return {
      kanbanStore,
      taskName,
      startDate,
      endDate,
      selectedPriority,
      addNewTaskModal,
      closeModal,
    };
  },
};
</script>
