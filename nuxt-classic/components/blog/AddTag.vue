<template>
  <BModal ref="addNewTag" id="add_new_tag" size="sm" hide-header hide-footer centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h6 class="text-uppercase fw-bold mb-3">添加标签</h6>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <hk-tag :option="multiSelectOpt" :selected-value="selectedTags"></hk-tag>
          </BFormGroup>
        </BCol>
      </BRow>
      <BButton variant="primary" class="float-end" @click="closeModal"> 添加 </BButton>
    </BForm>
  </BModal>
</template>

<script setup>
const multiSelectOpt = ref([
  "协作者",
  "设计师",
  "React 开发",
  "促销",
  "广告",
]);

const selectedTags = ref(["协作者", "设计师", "React 开发"]);

// Modal reference
const addNewTag = ref(null);

// Function to close the modal
const closeModal = () => {
  addNewTag.value.hide(); // Close the modal programmatically
};
</script>
