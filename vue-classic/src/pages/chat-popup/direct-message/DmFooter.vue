<template>
  <footer>
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
              <feather-icon name="share"></feather-icon>
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
      </div>
      <input
        type="text"
        id="input_msg_chat_popup"
        name="send-msg"
        class="input-msg-send form-control border-0 shadow-none"
        placeholder="输入消息..."
        v-model="message"
        @keydown="onKeyDown"
      />
      <div class="input-group-text overflow-show border-0">
        <button class="btn btn-icon btn-flush-dark flush-soft-hover btn-rounded">
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="smile"></feather-icon>
            </span>
          </span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useChatPopupStore } from "@/stores/chatPopup";

const message = ref("");
const chatPopupStore = useChatPopupStore();

const sendMessage = () => {
  const current = new Date();
  const currentTime = current.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (message.value.length > 0) {
    chatPopupStore.sendDirectMsg({
      text: message.value,
      time: currentTime,
      types: "sent",
    });
    // Default response
    setTimeout(() => {
      chatPopupStore.sendDirectMsg({
        text: "你在说什么呀？",
        time: currentTime,
        types: "received",
      });
    }, 1000);
    message.value = "";
  } else {
    alert("请输入内容！");
  }
};

const onKeyDown = (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
};
</script>
