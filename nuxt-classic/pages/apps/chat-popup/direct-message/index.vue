<template>
  <div :class="{ 'hk-chat-popup': true, 'd-flex': showChatPopup }">
    <DmHeader
      :show="showChatPopup"
      @close="toggleChatPopup"
      :show-contact="showContacts"
      @hideContact="toggleContacts"
    />
    <DmBody :show-contact-list="showContacts" />
    <DmFooter v-if="!showContacts" />
  </div>
  <BButton
    variant="primary"
    size="lg"
    href="#"
    class="btn-icon btn-floating btn-rounded btn-popup-open"
    @click="toggleChatPopup"
  >
    <span class="icon">
      <feather-icon name="message-circle"></feather-icon>
    </span>
  </BButton>
  <div v-if="!showChatPopup" class="chat-popover shadow-xl d-flex">
    <p>免费试用 caoba 聊天，立即连接你的客户！</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DmHeader from "@/components/chat-popup/direct-message/DmHeader.vue";
import DmBody from "@/components/chat-popup/direct-message/DmBody.vue";
import DmFooter from "@/components/chat-popup/direct-message/DmFooter.vue";

const showChatPopup = ref(true);
const showContacts = ref(false);

const toggleChatPopup = () => {
  showChatPopup.value = !showChatPopup.value;
};

const toggleContacts = () => {
  showContacts.value = !showContacts.value;
};
</script>
