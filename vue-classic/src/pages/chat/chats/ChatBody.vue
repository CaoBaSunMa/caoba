<template>
  <simplebar id="chat_body" class="chat-body">
    <ul id="dummy_avatar" class="list-unstyled chat-single-list" v-if="messages.length">
      <li
        v-for="(elem, index) in messages"
        :key="index"
        :class="['media', elem.types]"
      >
        <div v-if="elem.types === 'received'" class="avatar avatar-xs avatar-rounded">
          <img
            v-if="chatState.avatar.type === 'img'"
            :src="chatState.avatar.src"
            alt="user"
            class="avatar-img"
          />
          <div
            v-else-if="chatState.avatar.type === 'init'"
            :class="`avatar avatar-xs avatar-${chatState.avatar.variant} avatar-rounded`"
          >
            <span class="initial-wrap">{{ chatState.avatar.title }}</span>
          </div>
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
    <div v-else class="start-conversation">
      <img class="d-block img-fluid" :src="emptyChat" alt="empty-chat" />
      <p class="mb-0 mt-2 text-muted">暂无消息，发送第一条消息开始聊天</p>
    </div>
    <div ref="bottomRef" />
  </simplebar>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { useChatStore } from "@/stores/chat";
import emptyChat from "@/assets/img/start-conversation.png";

const chatStore = useChatStore();
const messages = ref([]);
const chatState = chatStore.$state;
const bottomRef = ref(null);

// get new messages from the store
onMounted(() => {
  messages.value = chatState.msg;
  nextTick(() => {
    if (bottomRef.value) {
      bottomRef.value.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Watch for changes in the messages array
watch(
  () => chatStore.msg,
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