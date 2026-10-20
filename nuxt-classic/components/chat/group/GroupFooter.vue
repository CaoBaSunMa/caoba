<template>
  <footer class="chat-footer">
    <BDropdown
      variant="flush-dark"
      class="action-drp"
      toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
    >
      <template #button-content>
        <span class="icon">
          <feather-icon name="share"></feather-icon>
        </span>
      </template>
      <BDropdownItem href="#">
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
      </BDropdownItem>
      <BDropdownItem href="#">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3">
            <span class="initial-wrap">
              <i class="ri-file-4-line"></i>
            </span>
          </div>
          <div>
            <span class="h6 mb-0">文档</span>
          </div>
        </div>
      </BDropdownItem>
      <BDropdownItem href="#">
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
      </BDropdownItem>
      <BDropdownItem href="#">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3">
            <span class="initial-wrap">
              <i class="ri-contacts-line"></i>
            </span>
          </div>
          <div>
            <span class="h6 mb-0">联系人</span>
          </div>
        </div>
      </BDropdownItem>
    </BDropdown>
    <BInputGroup>
      <span class="input-affix-wrapper">
        <BFormInput
          type="text"
          id="input_msg_send_chatapp"
          name="send-msg"
          class="input-msg-send rounded-input"
          placeholder="输入消息..."
          v-model="message"
          @keydown="onKeyDown"
        />
        <span class="input-suffix">
          <BButton
            variant="flush-primary"
            class="btn-icon btn-rounded btn-send"
            @click="handleClick"
          >
            <span class="icon">
              <feather-icon name="arrow-right"></feather-icon>
            </span>
          </BButton>
        </span>
      </span>
    </BInputGroup>
    <BButton variant="flush-dark" class="btn-icon btn-rounded flush-soft-hover">
      <span class="icon">
        <feather-icon name="smile"></feather-icon>
      </span>
    </BButton>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useChatStore } from "@/stores/chatStore";

const chatStore = useChatStore();
const message = ref("");
const chatState = chatStore.$state;

const current = new Date();
const msgTime = current.toLocaleTimeString("zh-CN", {
  hour: "2-digit",
  minute: "2-digit",
});

const sendMessage = () => {
  if (message.value.length > 0) {
    chatStore.sendGrpMsg({ text: message.value, time: msgTime, types: "sent" });
    setTimeout(() => {
      chatStore.sendGrpMsg({
        avatar: chatState.grpAvatar,
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
  message.value = "";
};

const onKeyDown = (event) => {
  if (event.keyCode === 13) {
    sendMessage();
    message.value = "";
  }
};
</script>
