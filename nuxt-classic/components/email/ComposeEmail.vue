<template>
  <div
    :class="[
      'compose-email-popup',
      { 'd-block': emailStore.$state.composeEmail },
      { 'minimize-email-popup': emailStore.$state.minimize },
      { 'maximize-email-popup': emailStore.$state.maximize },
    ]"
  >
    <div class="d-flex flex-column h-100">
      <header class="d-flex align-items-center justify-content-between">
        <h6 class="text-white mb-0">写邮件</h6>
        <div class="d-flex">
          <BButton
            variant="dark"
            size="sm"
            class="btn-icon btn-rounded d-lg-block d-none"
            @click="handleMinimize"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="minus"></feather-icon>
              </span>
            </span>
          </BButton>
          <BButton
            variant="dark"
            size="sm"
            class="btn-icon btn-rounded d-lg-block d-none"
            @click="handleMaximize"
          >
            <span class="icon">
              <span v-if="emailStore.$state.maximize" class="feather-icon">
                <feather-icon name="minimize-2"></feather-icon>
              </span>
              <span v-else class="feather-icon">
                <feather-icon name="maximize-2"></feather-icon>
              </span>
            </span>
          </BButton>
          <BButton
            variant="dark"
            size="sm"
            class="btn-icon btn-rounded"
            @click="handleClose"
          >
            <span class="icon">
              <feather-icon name="x"></feather-icon>
            </span>
          </BButton>
        </div>
      </header>
      <BForm @submit.prevent>
        <BFormGroup class="mb-3">
          <div class="d-flex flex-wrap">
            <HkChip class="mb-2 me-2" variant="primary" :src="avatar11" dismissable>
              摩根
            </HkChip>

            <HkChip class="mb-2 me-2" variant="primary" :src="avatar12" dismissable>
              查理
            </HkChip>

            <HkChip class="mb-2 me-2" variant="primary" :src="avatar13" dismissable>
              温斯顿
            </HkChip>
            <HkChip
              v-for="(recipient, index) in recipients"
              :key="index"
              class="mb-2 me-2"
              variant="primary"
              dismissable
            >
              {{ recipient }}
            </HkChip>
            <BFormInput
              type="text"
              class="border-0 p-0 shadow-none flex-1 mb-2 me-2"
              placeholder="添加收件人"
              v-model="newRecipient"
              @keyup.enter="addRecipient"
            />
          </div>
        </BFormGroup>
        <BFormGroup class="mb-3">
          <BFormInput type="text" placeholder="主题" />
        </BFormGroup>
        <BFormGroup class="mb-3">
          <!-- <textarea class="form-control"></textarea> -->
          <BFormTextarea rows="8" />
        </BFormGroup>
      </BForm>
      <div class="compose-email-footer">
        <div>
          <BButton variant="primary" class="me-2"> 发送 </BButton>
          <BButton variant="flush-dark" class="btn-icon btn-rounded flush-soft-hover">
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="添加标记"
              data-bs-original-title="添加标记"
            >
              <span class="feather-icon">
                <feather-icon name="paperclip"></feather-icon>
              </span>
            </span>
          </BButton>
        </div>
        <div>
          <BButton variant="flush-dark" class="btn-icon btn-rounded flush-soft-hover">
            <span
              class="icon"
              data-bs-toggle="Save Draft"
              data-bs-placement="top"
              title="保存草稿"
              data-bs-original-title="保存草稿"
            >
              <span class="feather-icon">
                <feather-icon name="edit"></feather-icon>
              </span>
            </span>
          </BButton>
          <BButton
            variant="flush-dark"
            class="btn-icon btn-rounded flush-soft-hover"
            type="button"
          >
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="删除"
              data-bs-original-title="删除"
            >
              <span class="feather-icon">
                <feather-icon name="trash-2"></feather-icon>
              </span>
            </span>
          </BButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useEmailStore } from "@/stores/emailStore";
//Images
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

const emailStore = useEmailStore();
const recipients = ref([]);
const newRecipient = ref("");

const handleMinimize = () => {
  emailStore.closeMaximize();
  emailStore.toggleMinimize();
};

const handleMaximize = () => {
  emailStore.toggleMaximize();
};

const handleClose = () => {
  emailStore.toggleComposeEmail();
  emailStore.closeMaximize();
  emailStore.closeMinimize();
};

const addRecipient = () => {
  if (newRecipient.value) {
    recipients.value.push(newRecipient.value);
    newRecipient.value = "";
  }
};
</script>
