<script>
    import { writable } from 'svelte/store';
    import DmHeader from '../../../../components/apps/chat-popup/direct-message/DmHeader.svelte';
    import DmBody from '../../../../components/apps/chat-popup/direct-message/BmBody.svelte';
    import DmFooter from '../../../../components/apps/chat-popup/direct-message/DmFooter.svelte';
    import { chatPopupStore } from '$lib/stores/chatPopup';
    import { MessageCircleIcon } from 'svelte-feather-icons';
  
    let showChatPopup = true;
    let showContacts = false;
  
    function toggleChatPopup() {
      showChatPopup = !showChatPopup;
    }
  
    function toggleContacts() {
      showContacts = !showContacts;
    }
  </script>
  
  <div class:hk-chat-popup={true} class:d-flex={showChatPopup}>
    <DmHeader {showChatPopup} {showContacts} on:close={toggleChatPopup} on:hideContact={toggleContacts} />
    <DmBody {showContacts} />
    {#if !showContacts}
      <DmFooter />
    {/if}
  </div>
  <a
    href="#"
    class="btn btn-icon btn-floating btn-primary btn-lg btn-rounded btn-popup-open"
    on:click|preventDefault={toggleChatPopup}
  >
    <span class="icon">
      <span class="feather-icon">
        <MessageCircleIcon />
      </span>
    </span>
  </a>
  <div class="chat-popover shadow-xl">
    <p>免费试用 caoba 聊天，立即连接你的客户！</p>
  </div>
  
