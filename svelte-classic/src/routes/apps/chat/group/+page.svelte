<script>
  import { chatStore } from "../../../../lib/stores/groupChatStore"; // Adjust path
  import { onMount, onDestroy } from "svelte";
  import GroupChatBody from "../../../../components/apps/chat/group/GroupChatBody.svelte";
  import ChatHeader from "../../../../components/apps/chat/ChatHeader.svelte";
  import GroupFooter from "../../../../components/apps/chat/group/GroupFooter.svelte";
  import GroupInfo from "../../../../components/apps/chat/group/GroupInfo.svelte";
  // import AudioCallModal from "../../../../components/apps/chat/AudioCallModal.svelte";
  // import VideoCallModal from "../../../../components/apps/chat/VideoCallModal.svelte";
  // import InvitePeopleModal from "../../../../components/apps/chat/InvitePeopleModal.svelte";
  import ContactGroup from "../../../../components/apps/chat/group/ContactGroup.svelte";

  let showInfo = $state(true);
  let chatState = $state({});

  onMount(() => {
    const unsubscribe = chatStore.subscribe((value) => {
      chatState = value;
    });

    // Handle window resize
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      showInfo = windowWidth > 1199;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  });

  function toggleShowInfo() {
    showInfo = !showInfo;
  }

  let chatAppClasses = $derived.by(() => ({
    "chatapp-info-active": showInfo,
    "chatapp-slide": chatState.startChat,
  }));
</script>

<div class="hk-pg-body py-0">
  <div
    class="chatapp-wrap"
    class:chatapp-info-active={showInfo}
    class:chatapp-slide={chatState.startChat}
  >
    <div class="chatapp-content">
      <ContactGroup />
      <div class="chatapp-single-chat">
        <ChatHeader infoState={showInfo} infoToggle={toggleShowInfo} />
        <GroupChatBody />
        <GroupFooter />
        <GroupInfo infoToggle={toggleShowInfo} />
      </div>
    </div>
  </div>
</div>
