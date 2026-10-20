<template>
  <footer>
    <BInputGroup>
      <BInputGroupText class="overflow-show border-0">
        <BDropdown
          variant="flush-dark"
          toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
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
          </BDropdownItem>
        </BDropdown>
      </BInputGroupText>
      <BFormInput
        type="text"
        id="input_msg_chat_popup"
        name="send-msg"
        class="input-msg-send border-0 shadow-none"
        placeholder="输入内容..."
        v-model="message"
        @keydown="onKeyDown"
      />
      <BInputGroupText class="overflow-show border-0">
        <BButton variant="flush-dark" class="btn-icon btn-rounded flush-soft-hover">
          <span class="icon">
            <feather-icon name="smile"></feather-icon>
          </span>
        </BButton>
      </BInputGroupText>
    </BInputGroup>
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
