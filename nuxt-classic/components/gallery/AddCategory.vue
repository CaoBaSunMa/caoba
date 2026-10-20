<template>
  <BModal ref="addNewCat" id="add_new_cat" size="sm" hide-header hide-footer centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h6 class="text-uppercase fw-bold mb-3">新建分类</h6>
    <BForm @submit.prevent>
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
const addNewCat = ref(null);

// Function to close the modal
const closeModal = () => {
  addNewCat.value.hide(); // Close the modal programmatically
};
</script>
