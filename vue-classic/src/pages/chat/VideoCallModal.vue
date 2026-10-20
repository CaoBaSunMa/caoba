<template>
  <div id="video_call" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div
      class="modal-dialog modal-dialog-centered modal-xl chatapp-call-window"
      :class="{ 'modal-fullscreen': fullScreen }"
      role="document"
    >
      <div class="modal-content bg-primary-dark-5">
        <div class="modal-header header-wth-bg bg-primary-dark-3">
          <h6 class="modal-title text-muted">caoba 视频通话</h6>
          <div class="modal-action">
            <a
              href="#"
              class="btn btn-xs btn-icon btn-rounded btn-link link-secondary modal-fullscreen-togglable"
              @click="toggleFullScreen"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon
                    :name="fullScreen ? 'minimize' : 'maximize'"
                  ></feather-icon>
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
        </div>
        <div class="modal-body" v-if="chatsRoute">
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
        </div>
        <div class="modal-body" v-else-if="groupRoutes">
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
        </div>
        <div v-else class="modal-body">
          <div class="avatar avatar-xxxl avatar-rounded d-20">
            <img src="@/assets/img/avatar2.jpg" alt="user" class="avatar-img" />
          </div>
          <h3 class="text-white mt-3">艾伦·里克曼</h3>
          <p class="text-white">
            正在视频呼叫<span class="one">.</span><span class="two">.</span
            ><span class="three">.</span>
          </p>
        </div>
        <div class="modal-footer">
          <ul class="chatapp-call-action hk-list">
            <li>
              <button class="btn btn-icon btn-lg btn-rounded btn-dark">
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="mic"></feather-icon>
                  </span>
                </span>
              </button>
            </li>
            <li>
              <button class="btn btn-icon btn-lg btn-rounded btn-dark">
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="video"></feather-icon>
                  </span>
                </span>
              </button>
            </li>
            <li>
              <button
                class="btn btn-icon btn-lg btn-rounded btn-danger"
                data-bs-dismiss="modal"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="phone"></feather-icon>
                  </span>
                </span>
              </button>
            </li>
            <li>
              <button class="btn btn-icon btn-lg btn-rounded btn-dark">
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="user-plus"></feather-icon>
                  </span>
                </span>
              </button>
            </li>
            <li>
              <button class="btn btn-icon btn-lg btn-rounded btn-dark">
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="more-vertical"></feather-icon>
                  </span>
                </span>
              </button>
            </li>
          </ul>
          <div class="avatar avatar-lg avatar-rounded chatapp-caller-img">
            <img :src="avatar13" alt="user" class="avatar-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useChatStore } from "@/stores/chat";
import { useRoute } from "vue-router";

//Image
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

export default {
  name: "VideoCallModal",
  data() {
    return {
      avatar8,
      avatar13,
    };
  },
  setup() {
    const chatStore = useChatStore();
    const chatState = chatStore.$state;
    const route = useRoute();

    // get current route
    const chatsRoute = computed(() => route.path.match("apps/chat/chats"));
    const groupRoutes = computed(() => route.path.match("/apps/chat/group"));

    // function for toggle screen size
    const fullScreen = ref(false);
    const toggleFullScreen = () => {
      fullScreen.value = !fullScreen.value;
    };

    return {
      chatState,
      fullScreen,
      toggleFullScreen,
      chatsRoute,
      groupRoutes,
    };
  },
};
</script>
