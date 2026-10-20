<!-- src/routes/+page.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";
  import { chatStore } from "../../../../lib/stores/chatStore"; // Import your global store
  import ContactList from "../../../../components/apps/chat/chats/ContactList.svelte";
  import ChatBody from "../../../../components/apps/chat/chats/ChatBody.svelte";
  import ChatFooter from "../../../../components/apps/chat/chats/ChatFooter.svelte";
  import ChatHeader from "../../../../components/apps/chat/ChatHeader.svelte";
  import ChatInfo from "../../../../components/apps/chat/chats/ChatInfo.svelte";

  // Reactive state
  let showInfo = true;
  // let invitePeople = false;

  // // Subscribe to the global store
  // let chatState;
  // const unsubscribe = chatStore.subscribe((state) => {
  //   chatState = state;
  // });

  // // Computed property for dynamic classes
  // $: chatAppClasses = {
  //   "chatapp-info-active": showInfo,
  //   "chatapp-slide": chatState?.startChat,
  // };

  // Toggle functions
  const toggleShowInfo = () => {
    showInfo = !showInfo;
  };

  // const toggleInvitePeople = () => {
  //   invitePeople = !invitePeople;
  // };

  // // Handle window resize
  // const handleResize = () => {
  //   const windowWidth = window.innerWidth;
  //   showInfo = windowWidth > 1199;
  // };

  // // Lifecycle hooks
  // onMount(() => {
  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Initialize based on current window width
  // });

  // onDestroy(() => {
  //   window.removeEventListener("resize", handleResize);
  //   unsubscribe(); // Unsubscribe from the store
  // });
</script>

<div class="hk-pg-body py-0">
  <div class={`chatapp-wrap ${showInfo ? "chatapp-info-active" : ""}`}>
    <div class="chatapp-content">
      <!-- Chat aside -->
      <ContactList />
      <div class="chatapp-single-chat">
        <!-- <ChatHeader
          infoState={showInfo}
          on:info-toggle={toggleShowInfo}
          on:invite-people={toggleInvitePeople}
        /> -->
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
        <!-- <ChatInfo on:info-toggle={toggleShowInfo} /> -->
        <ChatInfo />
      </div>
      <!-- <InvitePeopleModal /> -->
      <!-- Audio Call Window -->
      <!-- <AudioCallModal /> -->
      <!-- Video Call Window -->
      <!-- <VideoCallModal /> -->
    </div>
  </div>
</div>
