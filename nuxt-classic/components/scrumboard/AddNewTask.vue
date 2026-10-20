<template>
  <BModal ref="newTaskModal" id="add_new_board" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5>新建看板</h5>
    <p class="mb-4">
      您仅被授予有限许可，仅用于查看本网站所包含的材料。
    </p>
    <BForm>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="task-name" class="mb-3">
            <BFormInput id="task-name" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup
            label="可见性"
            label-for="task-type"
            description="公开设置将向所有拥有登录信息的用户可见。"
            class="mb-3"
          >
            <BFormSelect id="task-type" model-value="1">
              <BFormSelectOption value="1">公开</BFormSelectOption>
              <BFormSelectOption value="2">私有</BFormSelectOption>
            </BFormSelect>
            <!-- <small class="form-text text-muted">
              Public setting will be seen by everybody with login details.
            </small> -->
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup label="头像" label-for="avatar-text" class="mb-3">
            <BFormSelect id="avatar-text" model-value="1">
              <BFormSelectOption value="1">选择头像文字</BFormSelectOption>
              <BFormSelectOption value="2">A</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup label="头像颜色" label-for="avatar-color" class="mb-3">
            <BInputGroup class="color-picker">
              <BInputGroupText class="colorpicker-input-addon">
                <BFormInput v-model="avatarColor" type="color" class="p-0" />
              </BInputGroupText>
              <BFormInput id="avatar-color" type="text" v-model="avatarColor" />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <HkDropZone class="dropify-square w-30"> 上传照片 </HkDropZone>
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
import { ref } from "vue";

const avatarColor = ref("#009B84");

// Modal reference
const newTaskModal = ref(null);

// Function to close the modal
const closeModal = () => {
  newTaskModal.value.hide(); // Close the modal programmatically
};
</script>
