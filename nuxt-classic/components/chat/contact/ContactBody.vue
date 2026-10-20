<template>
  <simplebar id="chat_body" class="chat-body">
    <template v-if="messages.length > 1">
      <ul class="list-unstyled chat-single-list">
        <li v-for="(elem, index) in messages" :key="index" :class="['media', elem.types]">
          <div v-if="elem.types === 'received'" class="avatar avatar-xs avatar-rounded">
            <img
              v-if="chatState.contAvatar.type === 'img'"
              :src="chatState.contAvatar.src"
              alt="user"
              class="avatar-img"
            />
            <div
              v-else-if="chatState.contAvatar.type === 'init'"
              :class="`avatar avatar-xs avatar-${chatState.contAvatar.variant} avatar-rounded`"
            >
              <span class="initial-wrap">{{ chatState.contAvatar.title }}</span>
            </div>
          </div>
          <div class="media-body">
            <div class="msg-box" id="msg-1">
              <div>
                <p>{{ elem.text }}</p>
                <span class="chat-time">{{ elem.time }}</span>
              </div>
              <div class="msg-action">
                <BButton
                  variant="flush-dark"
                  class="btn-icon btn-rounded flush-soft-hover"
                  tag="a"
                >
                  <span class="icon">
                    <feather-icon name="corner-up-right"></feather-icon>
                  </span>
                </BButton>
                <BDropdown
                  variant="flush-dark"
                  class="action-drp"
                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                  end
                >
                  <template #button-content>
                    <span class="icon">
                      <feather-icon name="more-horizontal" />
                    </span>
                  </template>
                  <BDropdownItem href="#">转发</BDropdownItem>
                  <BDropdownItem href="#">复制</BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </template>
    <div v-else class="start-conversation">
      <img class="d-block img-fluid" :src="emptyChat" alt="empty-chat" />
      <BButton variant="soft-primary" class="mt-3" size="lg" @click="handleConversation">
        开始对话
      </BButton>
    </div>
    <div ref="bottomRef" />
  </simplebar>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useChatStore } from "@/stores/chatStore"; // Assuming you have a Pinia store named chatStore

//Images
import emptyChat from "@/assets/img/start-conversation.png";
import avatar2 from "@/assets/img/avatar2.jpg";

const chatStore = useChatStore();
const messages = ref([]);
const chatState = chatStore.$state;
const bottomRef = ref(null);
const startConversation = ref(false);

const handleConversation = () => {
  startConversation.value = true;
  if (startConversation.value) {
    document.getElementById("input_contact_chat").focus();
  }
};

// get new messages from the store
onMounted(() => {
  messages.value = chatState.contactMsg;
});

// Watch for changes in the messages array
watch(
  () => chatStore.contactMsg,
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
</script>
