<template>
  <BModal ref="addNewLabel" id="add_new_label" size="sm" hide-header hide-footer centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h6 class="text-uppercase fw-bold mb-3">添加标签</h6>
    <BForm @submit.prevent>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <BFormInput type="text" placeholder="标签名称" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BButton variant="primary" class="float-end" @click="closeModal"> 添加 </BButton>
    </BForm>
  </BModal>
</template>

<script setup>
// Modal reference
const addNewLabel = ref(null);

// Function to close the modal
const closeModal = () => {
  addNewLabel.value.hide(); // Close the modal programmatically
};
</script>
