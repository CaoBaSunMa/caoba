<template>
  <BModal
    id="video_call"
    ref="videoCallModal"
    size="xl"
    dialog-class=" chatapp-call-window"
    content-class="bg-primary-dark-5"
    header-class="header-wth-bg bg-primary-dark-3"
    :fullscreen="fullScreen"
    centered
  >
    <template #header>
      <h6 class="modal-title text-muted">caoba 视频通话</h6>
      <div class="modal-action">
        <a
          href="#"
          class="btn btn-xs btn-icon btn-rounded btn-link link-secondary modal-fullscreen-togglable"
          @click="toggleFullScreen"
        >
          <span class="icon">
            <span class="feather-icon">
              <feather-icon :name="fullScreen ? 'minimize' : 'maximize'"></feather-icon>
            </span>
          </span>
        </a>
        <a href="#" class="btn btn-xs btn-icon btn-rounded btn-link link-secondary">
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="help-circle"></feather-icon>
            </span>
          </span>
        </a>
      </div>
    </template>

    <template #default v-if="chatsRoute">
      <div
        class="avatar avatar-xxxl avatar-rounded d-20"
        v-if="chatState.avatar.type === 'img'"
      >
        <img :src="chatState.avatar.src" alt="user" class="avatar-img" />
      </div>
      <div
        v-else-if="chatState.avatar.type === 'init'"
        :class="`avatar avatar-${chatState.avatar.variant} avatar-rounded avatar-xxl d-20`"
      >
        <span class="initial-wrap">{{ chatState.avatar.title }}</span>
      </div>
      <h3 class="text-white mt-3">{{ chatState.userName }}</h3>
      <p class="text-white">
        正在视频呼叫<span class="one">.</span><span class="two">.</span
        ><span class="three">.</span>
      </p>
    </template>

    <template #default v-if="groupRoutes">
      <div
        class="avatar avatar-xxxl avatar-rounded d-20"
        v-if="chatState.grpAvatar.type === 'img'"
      >
        <img :src="chatState.grpAvatar.src" alt="user" class="avatar-img" />
      </div>
      <div
        v-else-if="chatState.grpAvatar.type === 'init'"
        :class="`avatar avatar-${chatState.grpAvatar.variant} avatar-rounded avatar-xxl d-20`"
      >
        <span class="initial-wrap">{{ chatState.grpAvatar.title }}</span>
      </div>
      <h3 class="text-white mt-3">{{ chatState.groupName }}</h3>
      <p class="text-white">
        正在视频呼叫<span class="one">.</span><span class="two">.</span
        ><span class="three">.</span>
      </p>
    </template>

    <template #default v-if="contactRoutes">
      <div
        class="avatar avatar-xxxl avatar-rounded d-20"
        v-if="chatState.contAvatar.type === 'img'"
      >
        <img :src="chatState.contAvatar.src" alt="user" class="avatar-img" />
      </div>
      <div
        v-else-if="chatState.contAvatar.type === 'init'"
        :class="`avatar avatar-${chatState.contAvatar.variant} avatar-rounded avatar-xxl d-20`"
      >
        <span class="initial-wrap">{{ chatState.contAvatar.title }}</span>
      </div>
      <h3 class="text-white mt-3">{{ chatState.contUserName }}</h3>
      <p class="text-white">
        正在视频呼叫<span class="one">.</span><span class="two">.</span
        ><span class="three">.</span>
      </p>
    </template>

    <template #footer>
      <ul class="chatapp-call-action hk-list">
        <li>
          <BButton
            variant="dark"
            size="lg"
            class="btn-icon btn-rounded"
            @click="toggleMic"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon :name="mic ? 'mic' : 'mic-off'"></feather-icon>
              </span>
            </span>
          </BButton>
        </li>
        <li>
          <BButton
            variant="dark"
            size="lg"
            class="btn-icon btn-rounded"
            @click="toggleCamera"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon :name="camera ? 'video' : 'video-off'"></feather-icon>
              </span>
            </span>
          </BButton>
        </li>
        <li>
          <BButton
            variant="danger"
            size="lg"
            class="btn-icon btn-rounded"
            @click="endCall"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="phone"></feather-icon>
              </span>
            </span>
          </BButton>
        </li>
        <li>
          <BButton variant="dark" size="lg" class="btn-icon btn-rounded">
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="user-plus"></feather-icon>
              </span>
            </span>
          </BButton>
        </li>
        <li>
          <BButton variant="dark" size="lg" class="btn-icon btn-rounded">
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="more-vertical"></feather-icon>
              </span>
            </span>
          </BButton>
        </li>
      </ul>
      <div class="avatar avatar-lg avatar-rounded chatapp-caller-img">
        <img :src="avatar13" alt="user" class="avatar-img" />
      </div>
    </template>
  </BModal>
</template>

<script setup>
import { computed, ref } from "vue";
import { useChatStore } from "@/stores/chatStore";
import { useRoute } from "vue-router";
//Image
import avatar13 from "@/assets/img/avatar13.jpg";

const chatStore = useChatStore();
const chatState = chatStore.$state;
const route = useRoute();

// Modal reference
const videoCallModal = ref(null); // Create a ref for the modal

// Get current route
const chatsRoute = computed(() => route.path.match("apps/chat/chats"));
const groupRoutes = computed(() => route.path.match("/apps/chat/group"));
const contactRoutes = computed(() => route.path.match("/apps/chat/contact"));

// Function for toggle screen size
const fullScreen = ref(false);
const toggleFullScreen = () => {
  fullScreen.value = !fullScreen.value;
};

//Function for toggle mic
const mic = ref(true);
const toggleMic = () => {
  mic.value = !mic.value;
};

//Function for toggle camera
const camera = ref(true);
const toggleCamera = () => {
  camera.value = !camera.value;
};

// Function to close the modal
const endCall = () => {
  videoCallModal.value.hide(); // Close the modal programmatically
};
</script>
