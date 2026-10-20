<template>
  <BModal ref="addNewDealModal" id="add_new_deal" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建交易</h5>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="deal-name" class="mb-3">
            <BFormInput id="deal-name" type="text" v-model="leadName" />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <label class="form-label">开始日期</label>
            <date-range-picker
              v-model="startDate"
              :dateRange="{ startDate: startDate }"
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
            />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup label="加入交易到" label-for="deal-cat" class="mb-3">
            <BFormSelect id="deal-cat" model-value="selected" class="custom-select">
              <BFormSelectOption value="selected">选择类别</BFormSelectOption>
              <BFormSelectOption value="1">线索引入</BFormSelectOption>
              <BFormSelectOption value="2">机会</BFormSelectOption>
              <BFormSelectOption value="3">已提案</BFormSelectOption>
              <BFormSelectOption value="4">跟进</BFormSelectOption>
              <BFormSelectOption value="5">转化</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup label="备注/描述" label-for="deal-des" class="mb-3">
            <BFormTextarea id="deal-des" rows="3" />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <HkDropZone class="dropify-square w-30"> 上传照片 </HkDropZone>
          </BFormGroup>
        </BCol>
        <BCol sm="12">
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
        @click="addNewDeal(pipelineStore.$state.columnIndex, leadName, addNewDealModal)"
      >
        添加
      </BButton>
    </template>
  </BModal>
</template>

<script>
import { useKanbanStore } from "@/stores/kanbanStore";
import { usePipelineStore } from "@/stores/pipeline";
import { ref, onMounted } from "vue";
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";

export default {
  name: "AddNewDeal",
  components: {
    HkDropZone,
  },
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
    const leadName = ref("");
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    // 模板里的优先级单选 v-model="selectedPriority" 之前没有定义，
    // SSR 渲染时会报 "Property 'selectedPriority' was accessed during render
    // but is not defined on instance"
    const selectedPriority = ref("medium");

    // Modal reference
    const addNewDealModal = ref(null);

    // Function to close the modal
    const closeModal = () => {
      addNewDealModal.value.hide(); // Close the modal programmatically
    };

    return {
      pipelineStore,
      leadName,
      startDate,
      endDate,
      selectedPriority,
      addNewDealModal,
      closeModal,
    };
  },
};
</script>
