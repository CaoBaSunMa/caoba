<script>
  import { onMount } from "svelte";
  import { chatStore } from "../../../../lib/stores/chatStore";
  import { ArrowRightIcon, ShareIcon, SmileIcon } from "svelte-feather-icons";

  let message = "";
  let msgTime = "";

  const sendMessage = () => {
    if (message.length > 0) {
      const current = new Date();
      msgTime = current.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      });

      chatStore.sendMsg({ text: message, time: msgTime, types: "sent" });
      setTimeout(() => {
        chatStore.sendMsg({
          text: "你在说什么呀？",
          time: msgTime,
          types: "received",
        });
      }, 800);
    } else {
      alert("请输入内容！");
    }
  };

  const handleClick = () => {
    sendMessage();
    message = "";
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      sendMessage();
      message = "";
    }
  };
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
        id="input_msg_send_chatapp"
        name="send-msg"
        class="input-msg-send form-control rounded-input"
        placeholder="输入消息..."
        bind:value={message}
        on:keydown={onKeyDown}
      />
      <span class="input-suffix">
        <button
          class="btn btn-icon btn-flush-primary btn-rounded btn-send"
          on:click={handleClick}
        >
          <span class="icon">
            <span class="feather-icon">
              <ArrowRightIcon />
            </span>
          </span>
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