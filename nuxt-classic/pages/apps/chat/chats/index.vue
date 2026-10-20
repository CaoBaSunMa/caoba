<template>
  <div class="hk-pg-body py-0">
    <div :class="['chatapp-wrap', chatAppClasses]">
      <div class="chatapp-content">
        <!-- chat aside -->
        <ContactList />
        <div class="chatapp-single-chat">
          <ChatHeader
            :info-state="showInfo"
            :info-toggle="toggleShowInfo"
            @invite-people="toggleInvitePeople"
          />
          <ChatBody />
          <ChatFooter />
          <ChatInfo :info-toggle="toggleShowInfo" />
        </div>
        <InvitePeopleModal />
        <!--Audio Call Window -->
        <AudioCallModal />
        <!-- /Audio Call Window -->
        <!--Video Call Window -->
        <VideoCallModal />
        <!-- /Video Call Window -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/stores/chatStore";

// Child components
import ChatBody from "@/components/chat/chats/ChatBody.vue";
import ChatFooter from "@/components/chat/chats/ChatFooter.vue";
import ChatHeader from "@/components/chat/ChatHeader.vue";
import ContactList from "@/components/chat/chats/ContactList.vue";
import ChatInfo from "@/components/chat/chats/ChatInfo.vue";
import InvitePeopleModal from "@/components/chat/InvitePeopleModal.vue";
import AudioCallModal from "@/components/chat/AudioCallModal.vue";
import VideoCallModal from "@/components/chat/VideoCallModal.vue";

// Chat Store
const chatStore = useChatStore();
const chatState = chatStore.$state;

// Reactive states
const showInfo = ref(true);
const invitePeople = ref(false);

// Computed class for chat app
const chatAppClasses = computed(() => ({
  "chatapp-info-active": showInfo.value,
  "chatapp-slide": chatState.startChat,
}));

// Methods
const toggleShowInfo = () => {
  showInfo.value = !showInfo.value;
};

const toggleInvitePeople = () => {
  invitePeople.value = !invitePeople.value;
};

// Window resize handler
const handleResize = () => {
  const windowWidth = window.innerWidth;
  showInfo.value = windowWidth > 1199;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // Initial call to set the state based on current window width
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
