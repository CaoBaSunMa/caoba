<script>
    import { onMount, tick } from "svelte";
    import { chatPopupStore } from "$lib/stores/chatPopup";
    import logo from "../../../assets/img/logo-light.png";
    import { CpuIcon, CreditCardIcon, EyeIcon, MessageCircleIcon, MinusIcon, MoreHorizontalIcon, ShareIcon, SmileIcon, ZapIcon } from "svelte-feather-icons";
    import HkScrollbar from "../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";
  
    export let show = false;

  let showChatBot = show;
  let showChatPopup = true;
  let conversation = false;
  let isTyping = true;
  let messages = [];
  let sendNewMsg = '';
  let bottomRef;

  $: messages = $chatPopupStore.popupMsgs;

  function toggleChatBot() {
    showChatBot = !showChatBot;
    showChatPopup = false;
  }

  function startConversation() {
    conversation = !conversation;
  }

  function sendMessage() {
    if (sendNewMsg.length > 0) {
      chatPopupStore.sendPopupMsg({
        text: sendNewMsg,
        types: 'sent'
      });
      isTyping = false;
      setTimeout(() => {
        chatPopupStore.sendPopupMsg({
          text: 'What are you saying?',
          types: 'received'
        });
      }, 1000);
      sendNewMsg = '';
    } else {
      alert('Please type something!');
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  onMount(() => {
    if (bottomRef) {
      bottomRef.scrollIntoView({ behavior: 'smooth' });
    }
    return chatPopupStore.subscribe(() => {
      tick().then(() => {
        if (bottomRef) {
          bottomRef.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  </script>
  
  {#if showChatBot}
  <div class="hk-chatbot-popup d-md-block d-flex">
    <header class:pb-2={conversation}>
      <div class="chatbot-head-top">
        <a
          class="btn btn-sm btn-icon btn-dark btn-rounded"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="icon">
            <span class="feather-icon">
              <MoreHorizontalIcon />
            </span>
          </span>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon zmdi zmdi-notifications-active"></i>
            <span>发送推送通知</span>
          </a>
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon zmdi zmdi-volume-off"></i>
            <span>静音聊天</span>
          </a>
        </div>
        <span class="text-white">与我们聊天</span>
        <a
          id="minimize_chatbot"
          href="#"
          class="btn btn-sm btn-icon btn-dark btn-rounded"
          on:click|preventDefault={toggleChatBot}
        >
          <span class="icon">
            <span class="feather-icon">
              <MinusIcon />
            </span>
          </span>
        </a>
      </div>
      <div class="separator-full separator-light mt-0 opacity-10"></div>
      <div class="media-wrap">
        <div class="media">
          <div class="media-head">
            <div
              class="avatar avatar-sm avatar-soft-primary avatar-icon avatar-rounded position-relative"
            >
              <span class="initial-wrap">
                <i class="ri-customer-service-2-line"></i>
              </span>
              <span
                class="badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1"
              ></span>
            </div>
          </div>
          <div class="media-body">
            <div class="user-name">聊天机器人</div>
            <div class="user-status">在线</div>
          </div>
        </div>
      </div>
    </header>
    <div class="chatbot-popup-body">
      <HkScrollbar class={`nicescroll-bar ${conversation ? "mt-0" : ""}`}>
        <div>
          {#if !conversation}
            <div class="init-content-wrap">
              <div class="card card-shadow">
                <div class="card-body">
                  <p class="card-text">
                    你好，我是聊天机器人 😈<br />对我们的工具有任何疑问吗？<br /><br />请选择主题或开始聊天。
                  </p>
                  <button
                    class="btn btn-block btn-primary text-nonecase start-conversation"
                    on:click={startConversation}
                  >
                    开始对话
                  </button>
                </div>
              </div>
              <div class="btn-wrap">
                <button
                  class="btn btn-soft-primary text-nonecase btn-rounded start-conversation"
                  on:click={startConversation}
                >
                  <span>
                    <span class="icon">
                      <span class="feather-icon">
                        <EyeIcon />
                      </span>
                    </span>
                    <span class="btn-text">随便看看</span>
                  </span>
                </button>
                <button
                  class="btn btn-soft-danger text-nonecase btn-rounded start-conversation"
                  on:click={startConversation}
                >
                  <span>
                    <span class="icon">
                      <span class="feather-icon">
                        <CreditCardIcon />
                      </span>
                    </span>
                    <span class="btn-text">我有关于定价的问题</span>
                  </span>
                </button>
                <button
                  class="btn btn-soft-warning text-nonecase btn-rounded start-conversation"
                  on:click={startConversation}
                >
                  <span>
                    <span class="icon">
                      <span class="feather-icon">
                        <CpuIcon />
                      </span>
                    </span>
                    <span class="btn-text">需要技术方面的帮助</span>
                  </span>
                </button>
                <button
                  class="btn btn-soft-success text-nonecase btn-rounded start-conversation"
                  on:click={startConversation}
                >
                  <span>
                    <span class="icon">
                      <span class="feather-icon">
                        <ZapIcon />
                      </span>
                    </span>
                    <span class="btn-text">我有购买前的问题</span>
                  </span>
                </button>
              </div>
            </div>
          {:else}
            <ul class="list-unstyled">
              {#each messages as message, index}
                <li class="media {message.types}" key={index}>
                  {#if message.types === 'received'}
                    <div
                      class="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded"
                    >
                      <span class="initial-wrap">
                        <i class="ri-customer-service-2-line"></i>
                      </span>
                    </div>
                  {/if}
                  <div class="media-body">
                    <div class="msg-box">
                      <div>
                        <p>{message.text}</p>
                      </div>
                    </div>
                  </div>
                </li>
              {/each}
              {#if isTyping}
                <li class="media received">
                  <div
                    class="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded"
                  >
                    <span class="initial-wrap">
                      <i class="ri-customer-service-2-line"></i>
                    </span>
                  </div>
                  <div class="media-body">
                    <div class="msg-box typing-wrap">
                      <div>
                        <div class="typing">
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              {/if}
              <div bind:this={bottomRef}></div>
            </ul>
          {/if}
        </div>
      </HkScrollbar>
    </div>
    <footer>
      {#if !conversation}
        <div class="chatbot-intro-text fs-7">
          <div class="separator-full separator-light"></div>
          <p class="mb-2">
            这是 caoba 的测试版本，请立即注册以抢先体验我们的完整版
          </p>
          <a class="d-block mb-2" href="#"><u>提供反馈</u></a>
        </div>
      {:else}
        <div class="input-group">
          <div class="input-group-text overflow-show border-0">
            <button
              class="btn btn-icon btn-flush-dark flush-soft-hover btn-rounded dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="icon">
                <span class="feather-icon">
                  <ShareIcon />
                </span>
              </span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                <div class="d-flex align-items-center">
                  <div
                    class="avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3"
                  >
                    <span class="initial-wrap">
                      <i class="ri-image-line"></i>
                    </span>
                  </div>
                  <div>
                    <span class="h6 mb-0">Photo or Video Library</span>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="d-flex align-items-center">
                  <div
                    class="avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3"
                  >
                    <span class="initial-wrap">
                      <i class="ri-file-4-line"></i>
                    </span>
                  </div>
                  <div>
                    <span class="h6 mb-0">Documents</span>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="d-flex align-items-center">
                  <div
                    class="avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3"
                  >
                    <span class="initial-wrap">
                      <i class="ri-map-pin-line"></i>
                    </span>
                  </div>
                  <div>
                    <span class="h6 mb-0">Location</span>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="d-flex align-items-center">
                  <div
                    class="avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3"
                  >
                    <span class="initial-wrap">
                      <i class="ri-contacts-line"></i>
                    </span>
                  </div>
                  <div>
                    <span class="h6 mb-0">Contact</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <input
            type="text"
            id="input_msg_chat_popup"
            name="send-msg"
            class="input-msg-send form-control border-0 shadow-none"
            placeholder="输入内容..."
            bind:value={sendNewMsg}
            on:keydown={onKeyDown}
          />
          <div class="input-group-text overflow-show border-0">
            <button class="btn btn-icon btn-flush-dark flush-soft-hover btn-rounded">
              <span class="icon">
                <span class="feather-icon">
                  <SmileIcon />
                </span>
              </span>
            </button>
          </div>
        </div>
      {/if}
      <div class="footer-copy-text">
        Powered by <a class="brand-link" href="#"><img src={logo} alt="logo-brand" /></a>
      </div>
    </footer>
  </div>
{/if}
<a
  href="#"
  class="btn btn-icon btn-floating btn-primary btn-lg btn-rounded btn-popup-open"
  on:click|preventDefault={toggleChatBot}
>
  <span class="icon">
    <span class="feather-icon">
      <MessageCircleIcon />
    </span>
  </span>
</a>
{#if showChatPopup}
  <div class="chat-popover shadow-xl d-flex">
    <p>免费试用 caoba Chat，立即与您的客户建立联系！</p>
  </div>
{/if}
  