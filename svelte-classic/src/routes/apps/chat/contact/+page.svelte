<script>
  import { onMount, onDestroy } from "svelte";
  import { chatStore } from "$lib/stores/chatStore.js";
  import ChatHeader from "../../../../components/apps/chat/ChatHeader.svelte";
  //   import ContactList from "$lib/components/ContactList.svelte";
  import ContactBody from "../../../../components/apps/chat/contact/ContactBody.svelte";
  //   import ContactFooter from "$lib/components/ContactFooter.svelte";
  //   import ContactInfo from "$lib/components/ContactInfo.svelte";
  //   import InvitePeopleModal from "$lib/components/InvitePeopleModal.svelte";
  //   import AudioCallModal from "$lib/components/AudioCallModal.svelte";
  //   import VideoCallModal from "$lib/components/VideoCallModal.svelte";

  let showInfo = $state(true);
  let invitePeople = false;

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
</script>

<div class="hk-pg-body py-0">
  <div
    class="chatapp-wrap"
    class:chatapp-info-active={showInfo}
    class:chatapp-slide={chatState.startChat}
  >
    <div class="chatapp-content">
      <!-- <ContactList /> -->
      <div class="chatapp-single-chat">
        <ChatHeader
          infoState={showInfo}
          infoToggle={toggleShowInfo}
          onfoo={toggleInvitePeople}
        />
        <ContactBody />
        <!-- <ContactFooter />
        <ContactInfo infoToggle={toggleShowInfo} /> -->
      </div>

      <!--Audio Call Window -->
      <!-- <AudioCallModal /> -->
      <!-- /Audio Call Window -->

      <!--Video Call Window -->
      <!-- <VideoCallModal /> -->
      <!-- /Video Call Window -->

      <!-- Invite People -->
      <!-- <InvitePeopleModal /> -->
      <!-- /Invite People -->
    </div>
  </div>
</div>
