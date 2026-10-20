<template>
  <div class="hk-pg-body py-0">
    <div :class="['chatapp-wrap', chatAppClasses]">
      <div class="chatapp-content">
        <ContactGroup />
        <div class="chatapp-single-chat">
          <ChatHeader
            :info-state="showInfo"
            :info-toggle="toggleShowInfo"
            @invite-people="toggleInvitePeople"
          />
          <GroupChatBody />
          <GroupFooter />
          <GroupInfo :info-toggle="toggleShowInfo" />
        </div>

        <!--Audio Call Window -->
        <AudioCallModal />
        <!-- /Audio Call Window -->

        <!--Video Call Window -->
        <VideoCallModal />
        <!-- /Video Call Window -->

        <!-- Invite People -->
        <InvitePeopleModal />
        <!-- /Invite People -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/stores/chatStore";

// Child components
import ChatHeader from "@/components/chat/ChatHeader.vue";
import GroupChatBody from "@/components/chat/group/GroupChatBody.vue";
import ContactGroup from "@/components/chat/group/ContactGroup.vue";
import GroupFooter from "@/components/chat/group/GroupFooter.vue";
import GroupInfo from "@/components/chat/group/GroupInfo.vue";
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
