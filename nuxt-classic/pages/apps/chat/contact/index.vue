<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'chatapp-wrap',
        { 'chatapp-info-active': showInfo },
        { 'chatapp-slide': chatState.startChat },
      ]"
    >
      <div class="chatapp-content">
        <ContactList />
        <div class="chatapp-single-chat">
          <ChatHeader
            :info-state="showInfo"
            :info-toggle="toggleShowInfo"
            @invite-people="toggleInvitePeople"
          />
          <ContactBody />
          <ContactFooter />
          <ContactInfo :info-toggle="toggleShowInfo" />
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

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { useChatStore } from "@/stores/chatStore";
//child components
import ChatHeader from "@/components/chat/ChatHeader.vue";
import ContactList from "@/components/chat/contact/ContactList.vue";
import ContactBody from "@/components/chat/contact/ContactBody.vue";
import ContactFooter from "@/components/chat/contact/ContactFooter.vue";
import ContactInfo from "@/components/chat/contact/ContactInfo.vue";
import InvitePeopleModal from "@/components/chat/InvitePeopleModal.vue";
import AudioCallModal from "@/components/chat/AudioCallModal.vue";
import VideoCallModal from "@/components/chat/VideoCallModal.vue";

export default {
  components: {
    ChatHeader,
    ContactBody,
    ContactFooter,
    ContactList,
    ContactInfo,
    InvitePeopleModal,
    AudioCallModal,
    VideoCallModal,
  },
  setup() {
    const chatStore = useChatStore();
    const chatState = chatStore.$state;
    const showInfo = ref(true);
    const invitePeople = ref(false);

    const toggleShowInfo = () => {
      showInfo.value = !showInfo.value;
    };

    const toggleInvitePeople = () => {
      invitePeople.value = !invitePeople.value;
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      showInfo.value = windowWidth > 1199;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize(); // Call it initially to set the state based on current window width
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      chatState,
      showInfo,
      toggleShowInfo,
      invitePeople,
      toggleInvitePeople,
    };
  },
};
</script>
