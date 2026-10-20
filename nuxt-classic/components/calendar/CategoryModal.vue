<template>
  <BModal id="add_new_cat" ref="catModal" size="sm" hide-header hide-footer centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h6 class="text-uppercase fw-bold mb-3">添加分类</h6>
    <BForm>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <BFormInput type="text" placeholder="分类名称" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BButton variant="primary" class="float-end" @click="closeModal"> 添加 </BButton>
    </BForm>
  </BModal>
</template>

<script setup>
// Modal reference
const catModal = ref(null);
// Function to close the modal
const closeModal = () => {
  catModal.value.hide(); // Close the modal programmatically
};
</script>
