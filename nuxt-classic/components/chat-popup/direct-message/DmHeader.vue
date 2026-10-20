<template>
  <header>
    <BInputGroup v-if="showContact" class="contact-search-wrap">
      <BFormInput
        type="text"
        class="contact-search shadow-none"
        placeholder="搜索联系人"
      />
      <BButton
        href="#"
        variant="dark"
        size="sm"
        class="btn-icon btn-rounded"
        @click="onHideContact"
      >
        <span class="icon">
          <feather-icon name="x"></feather-icon>
        </span>
      </BButton>
    </BInputGroup>
    <div v-else class="media-wrap">
      <div class="media">
        <div class="media-head">
          <div class="avatar avatar-sm avatar-rounded position-relative">
            <img :src="avatar8" alt="user" class="avatar-img" />
            <HkBadge
              variant="success"
              indicator
              indicatorSize="lg"
              class="position-bottom-end-overflow-1"
              borderless
            />
          </div>
        </div>
        <div class="media-body">
          <div class="user-name">伊芙·小野</div>
          <div class="user-status">助理经理</div>
        </div>
      </div>
    </div>
    <div v-if="!showContact" class="chat-popup-action d-flex">
      <BDropdown variant="dark" size="sm" toggle-class="btn-icon btn-rounded no-caret">
        <template #button-content>
          <span class="icon">
            <feather-icon name="more-vertical" />
          </span>
        </template>
        <BDropdownItem href="#">
          <i class="dropdown-icon zmdi zmdi-notifications-active"></i>
          <span>发送推送通知</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <i class="dropdown-icon zmdi zmdi-volume-off"></i>
          <span>静音聊天</span>
        </BDropdownItem>
      </BDropdown>
      <BButton
        href="#"
        variant="dark"
        size="sm"
        class="btn-icon btn-rounded"
        @click="onHideContact"
      >
        <span class="icon">
          <feather-icon name="users"></feather-icon>
        </span>
      </BButton>
      <BButton
        href="#"
        variant="dark"
        size="sm"
        class="btn-icon btn-rounded"
        @click="onClose"
      >
        <span class="icon">
          <feather-icon name="x"></feather-icon>
        </span>
      </BButton>
    </div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import avatar8 from "@/assets/img/avatar8.jpg";

const props = defineProps({
  showContact: Boolean,
});

const emit = defineEmits(["hideContact", "close"]);

const onHideContact = () => {
  emit("hideContact"); // Emitting event
};

const onClose = () => {
  emit("close"); // Emitting event
};
</script>
