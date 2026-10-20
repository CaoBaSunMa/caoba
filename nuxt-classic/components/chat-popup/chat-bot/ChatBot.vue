<template>
  <div v-if="showChatBot" class="hk-chatbot-popup d-md-block d-flex">
    <header :class="{ 'pb-2': conversation }">
      <div class="chatbot-head-top">
        <BDropdown
          variant="dark"
          class="action-drp"
          toggle-class="btn-icon btn-rounded no-caret"
          size="sm"
        >
          <template #button-content>
            <span class="icon">
              <feather-icon name="more-horizontal" />
            </span>
          </template>
          <BDropdownItem href="#">
            <i class="dropdown-icon zmdi zmdi-notifications-active"></i>
            <span>发送推送通知</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <i class="dropdown-icon zmdi zmdi-volume-off"></i>
            <span>静音聊天</span>
          </BDropdownItem>
        </BDropdown>

        <span class="text-white">与我们聊天</span>
        <BButton
          href="#"
          variant="dark"
          size="sm"
          class="btn-icon btn-rounded"
          @click="showChatBot = false"
        >
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="minus"></feather-icon>
            </span>
          </span>
        </BButton>
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
              <HkBadge
                variant="success"
                indicator
                indicatorSize="lg"
                class="position-bottom-end-overflow-1"
                borderless
              />
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
      <simplebar :class="['nicescroll-bar', { 'mt-0': conversation }]">
        <div>
          <div v-if="!conversation" class="init-content-wrap">
            <BCard class="card-shadow">
              <BCardText>
                你好，我是聊天机器人 😈<br />对我们的工具有任何疑问吗？<br /><br />请选择主题或开始聊天。
              </BCardText>
              <BButton
                variant="primary"
                class="btn-block text-nonecase start-conversation"
                @click="startConversation"
              >
                开始对话
              </BButton>
            </BCard>
            <div class="btn-wrap">
              <BButton
                variant="soft-primary"
                class="text-nonecase btn-rounded start-conversation"
                @click="startConversation"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="eye"></feather-icon>
                    </span>
                  </span>
                  <span class="btn-text">随便看看</span>
                </span>
              </BButton>
              <BButton
                variant="soft-danger"
                class="text-nonecase btn-rounded start-conversation"
                @click="startConversation"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="credit-card"></feather-icon>
                    </span>
                  </span>
                  <span class="btn-text">我有关于定价的问题</span>
                </span>
              </BButton>
              <BButton
                variant="soft-warning"
                class="text-nonecase btn-rounded start-conversation"
                @click="startConversation"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="cpu"></feather-icon>
                    </span>
                  </span>
                  <span class="btn-text">需要技术方面的帮助</span>
                </span>
              </BButton>
              <BButton
                variant="soft-success"
                class="text-nonecase btn-rounded start-conversation"
                @click="startConversation"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="zap"></feather-icon>
                    </span>
                  </span>
                  <span class="btn-text">我有购买前的问题</span>
                </span>
              </BButton>
            </div>
          </div>
          <ul v-else class="list-unstyled">
            <li
              v-for="(message, index) in messages"
              :key="index"
              :class="['media', message.types]"
            >
              <template v-if="message.types === 'received'">
                <div
                  class="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded"
                >
                  <span class="initial-wrap">
                    <i class="ri-customer-service-2-line" />
                  </span>
                </div>
              </template>
              <div class="media-body">
                <div class="msg-box">
                  <div>
                    <p>{{ message.text }}</p>
                  </div>
                </div>
              </div>
            </li>
            <li v-if="isTyping" class="media received">
              <div
                class="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded"
              >
                <span class="initial-wrap">
                  <i class="ri-customer-service-2-line" />
                </span>
              </div>
              <div class="media-body">
                <div class="msg-box typing-wrap">
                  <div>
                    <div class="typing">
                      <div class="dot" />
                      <div class="dot" />
                      <div class="dot" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div ref="bottomRef"></div>
        </div>
      </simplebar>
    </div>
    <footer>
      <div v-if="!conversation" class="chatbot-intro-text fs-7">
        <div class="separator-full separator-light"></div>
        <p class="mb-2">
          这是 caoba 的测试版本，请立即注册以抢先体验我们的完整版
        </p>
        <a class="d-block mb-2" href="#"><u>提供反馈</u></a>
      </div>
      <BInputGroup v-else>
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
          v-model="sendNewMsg"
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
      <div class="footer-copy-text">
        Powered by <a class="brand-link" href="#"><img :src="logo" alt="logo-brand" /></a>
      </div>
    </footer>
  </div>
  <BButton
    variant="primary"
    size="lg"
    href="#"
    class="btn-icon btn-floating btn-rounded btn-popup-open"
    @click="toggleChatBot"
  >
    <span class="icon">
      <feather-icon name="message-circle"></feather-icon>
    </span>
  </BButton>
  <div v-if="showChatPopup" class="chat-popover shadow-xl d-flex">
    <p>免费试用 caoba Chat，立即与您的客户建立联系！</p>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { useChatPopupStore } from "@/stores/chatPopup";
//Image
import logo from "@/assets/img/logo-light.png";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const chatPopupStore = useChatPopupStore();
const showChatBot = ref(props.show);
const showChatPopup = ref(true);
const conversation = ref(false);
const isTyping = ref(true);
const messages = ref([]);
const sendNewMsg = ref("");
const chatState = chatPopupStore.$state;
const bottomRef = ref(null);

//togle chat interface
const toggleChatBot = () => {
  showChatBot.value = !showChatBot.value;
  showChatPopup.value = false;
};

//togle conversation
const startConversation = () => {
  conversation.value = !conversation.value;
};

// get new messages from the store
onMounted(() => {
  messages.value = chatState.popupMsgs;

  if (bottomRef.value) {
    bottomRef.value.scrollIntoView({ behavior: "smooth" });
  }
});

// Watch for changes in the messages array
watch(
  () => chatPopupStore.popupMsgs,
  () => {
    // Use nextTick to wait for the DOM to update
    nextTick(() => {
      if (bottomRef.value) {
        bottomRef.value.scrollIntoView({ behavior: "smooth" });
      }
    });
  },
  { deep: true }
);

// Send message
const sendMessage = () => {
  if (sendNewMsg.value.length > 0) {
    chatPopupStore.sendPopupMsg({
      text: sendNewMsg.value,
      types: "sent",
    });
    isTyping.value = false;
    // Default response
    setTimeout(() => {
      chatPopupStore.sendPopupMsg({
        text: "你在说什么？",
        types: "received",
      });
    }, 1000);
    sendNewMsg.value = "";
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
