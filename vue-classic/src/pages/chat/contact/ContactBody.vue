<template>
  <simplebar id="chat_body" class="chat-body">
    <template v-if="messages.length > 1">
      <ul class="list-unstyled chat-single-list">
        <li v-for="(elem, index) in messages" :key="index" :class="['media', elem.types]">
          <div v-if="elem.types === 'received'" class="avatar avatar-xs avatar-rounded">
            <img :src="avatar2" alt="user" class="avatar-img" />
          </div>
          <div class="media-body">
            <div class="msg-box" id="msg-1">
              <div>
                <p>{{ elem.text }}</p>
                <span class="chat-time">{{ elem.time }}</span>
              </div>
              <div class="msg-action">
                <a
                  href="#"
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="corner-up-right"></feather-icon>
                    </span>
                  </span>
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                  data-bs-toggle="dropdown"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="more-horizontal"></feather-icon>
                    </span>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="#">转发</a>
                  <a class="dropdown-item" href="#">复制</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </template>
    <div v-else class="start-conversation">
      <img class="d-block img-fluid" :src="emptyChat" alt="empty-chat" />
      <button class="btn btn-soft-primary btn-lg mt-3" @click="handleConversation">
        开始对话
      </button>
    </div>
    <div ref="bottomRef" />
  </simplebar>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useChatStore } from "@/stores/chat"; // Assuming you have a Pinia store named chatStore

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
