<script>
  import { onMount } from "svelte";
  import {
    chatStore,
    chatActions,
  } from "../../../../lib/stores/groupChatStore.js";
  import { ArrowRightIcon, ShareIcon, SmileIcon } from "svelte-feather-icons";

  let message = $state("");
  let chatState = $state({});

  onMount(() => {
    const unsubscribe = chatStore.subscribe((value) => {
      chatState = value;
    });
    return unsubscribe;
  });

  function sendMessage() {
    if (message.length > 0) {
      const current = new Date();
      const msgTime = current.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      });

      chatActions.sendGrpMsg({ text: message, time: msgTime, types: "sent" });

      // Simulate response
      setTimeout(() => {
        chatActions.sendGrpMsg({
          avatar: chatState.grpAvatar,
          text: "你在说什么呀？",
          time: msgTime,
          types: "received",
        });
      }, 800);

      message = "";
    } else {
      alert("请输入内容！");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }
</script>

<footer class="chat-footer">
  <button
    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover flex-shrink-0"
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
          <span class="h6 mb-0">照片或视频库</span>
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
          <span class="h6 mb-0">文档</span>
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
          <span class="h6 mb-0">位置</span>
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
          <span class="h6 mb-0">联系人</span>
        </div>
      </div>
    </a>
  </div>
  <div class="input-group">
    <span class="input-affix-wrapper">
      <input
        type="text"
        class="input-msg-send form-control rounded-input"
        placeholder="输入消息..."
        bind:value={message}
        onkeydown={handleKeyDown}
      />
      <span class="input-suffix">
        <button
          class="btn btn-icon btn-flush-primary btn-rounded btn-send"
          onclick={sendMessage}
        >
          <ArrowRightIcon />
        </button>
      </span>
    </span>
  </div>
  <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
    <span class="icon">
      <span class="feather-icon">
        <SmileIcon />
      </span>
    </span>
  </button>
</footer>