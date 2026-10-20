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
  <a
    href="#"
    class="btn btn-icon btn-floating btn-primary btn-lg btn-rounded btn-popup-open"
    @click="toggleChatPopup"
  >
    <span class="icon">
      <span class="feather-icon"
        ><feather-icon name="message-circle"></feather-icon
      ></span>
    </span>
  </a>
  <div class="chat-popover shadow-xl">
    <p>免费试用 caoba 聊天，立即连接你的客户！</p>
  </div>
</template>

<script>
import { ref } from "vue";
import DmHeader from "./DmHeader.vue";
import DmFooter from "./DmFooter.vue";
import DmBody from "./DmBody.vue";

export default {
  name: "DirectMessage",

  components: {
    DmHeader,
    DmBody,
    DmFooter,
  },
  setup() {
    const showChatPopup = ref(true);
    const showContacts = ref(false);

    const toggleChatPopup = () => {
      showChatPopup.value = !showChatPopup.value;
    };

    const toggleContacts = () => {
      showContacts.value = !showContacts.value;
    };

    return {
      showChatPopup,
      showContacts,
      toggleChatPopup,
      toggleContacts,
    };
  },
  // Your component's logic goes here
};
</script>
