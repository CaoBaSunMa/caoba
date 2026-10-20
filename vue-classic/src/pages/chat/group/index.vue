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

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/stores/chat";
//child components
import ChatHeader from "../ChatHeader.vue";
import GroupChatBody from "./GroupChatBody.vue";
import ContactGroup from "./ContactGroup.vue";
import GroupFooter from "./GroupFooter.vue";
import GroupInfo from "./GroupInfo.vue";
import InvitePeopleModal from "../InvitePeopleModal.vue";
import AudioCallModal from "../AudioCallModal.vue";
import VideoCallModal from "../VideoCallModal.vue";

export default {
  components: {
    ChatHeader,
    GroupChatBody,
    ContactGroup,
    GroupFooter,
    GroupInfo,
    InvitePeopleModal,
    AudioCallModal,
    VideoCallModal,
  },
  setup() {
    const chatStore = useChatStore();
    const chatState = chatStore.$state;
    const showInfo = ref(true);
    const invitePeople = ref(false);

    const chatAppClasses = computed(() => ({
      "chatapp-info-active": showInfo.value,
      "chatapp-slide": chatState.startChat,
    }));

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
      invitePeople,
      chatAppClasses,
      toggleShowInfo,
      toggleInvitePeople,
    };
  },
};
</script>
