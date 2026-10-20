<template>
  <BModal ref="newMemberModal" id="add_new_team" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建成员</h5>
    <BForm>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="member-name" class="mb-3">
            <BFormInput id="member-name" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup label="邮箱" label-for="email" class="mb-3">
            <BFormInput id="email" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <div class="dropify-square">
              <HkDropZone class="w-30"> 上传照片 </HkDropZone>
            </div>
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 取消 </BButton>
      <BButton variant="primary">添加</BButton>
    </template>
  </BModal>
</template>

<script setup>
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";

// Modal reference
const newMemberModal = ref(null);

// Function to close the modal
const closeModal = () => {
  newMemberModal.value.hide(); // Close the modal programmatically
};
</script>
