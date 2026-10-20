<template>
  <header class="chat-header">
    <a
      id="back_user_list"
      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover back-user-list"
      href="#"
      @click="backToUserList"
    >
      <span class="icon">
        <span class="feather-icon">
          <feather-icon name="chevron-left"></feather-icon>
        </span>
      </span>
    </a>

    <!-- header for chats -->
    <div class="media" v-if="chatsRoute">
      <div class="media-head">
        <div
          class="avatar avatar-sm avatar-rounded position-relative"
          v-if="chatState.avatar.type === 'img'"
        >
          <img :src="chatState.avatar.src" alt="user" class="avatar-img" />
        </div>
        <div
          :class="[
            'avatar',
            'avatar-sm',
            `avatar-${chatState.avatar.variant}`,
            'avatar-rounded',
          ]"
          v-else
        >
          <span class="initial-wrap">{{ chatState.avatar.title }}</span>
        </div>
        <span
          class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
          v-if="chatState.status === 'Online' || chatState.status === 'Typing'"
        />
      </div>
      <div class="media-body">
        <div class="user-name">{{ chatState.userName }}</div>
        <div class="user-status">
          {{ chatState.status }}
          <span v-if="chatState.status === 'Typing'">
            <span class="one">.</span><span class="two">.</span
            ><span class="three">.</span>
          </span>
        </div>
      </div>
    </div>

    <!-- header for groups -->
    <div class="media" v-if="groupRoutes">
      <div class="media-head">
        <div :class="avatarClasses" v-if="chatState.grpAvatar.type === 'img'">
          <img :src="chatState.grpAvatar.src" alt="user" class="avatar-img" />
          <div
            class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
          >
            <div class="badge-icon-wrap">
              <i class="ri-group-fill text-light" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141">
              <g transform="translate(-79 -975)">
                <path
                  d="M70.5,0A70.5,70.5,0,1,1,0,70.5,70.5,70.5,0,0,1,70.5,0Z"
                  transform="translate(79 975)"
                  fill="#fff"
                />
                <path
                  d="M55.5,0A55.5,55.5,0,1,1,0,55.5,55.5,55.5,0,0,1,55.5,0Z"
                  transform="translate(94 990)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <div :class="avatarClasses" v-else>
          <span class="initial-wrap">{{ chatState.grpAvatar.title }}</span>
          <div
            class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
          >
            <div class="badge-icon-wrap">
              <i class="ri-group-fill text-light" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141">
              <g transform="translate(-79 -975)">
                <path
                  d="M70.5,0A70.5,70.5,0,1,1,0,70.5,70.5,70.5,0,0,1,70.5,0Z"
                  transform="translate(79 975)"
                  fill="#fff"
                />
                <path
                  d="M55.5,0A55.5,55.5,0,1,1,0,55.5,55.5,55.5,0,0,1,55.5,0Z"
                  transform="translate(94 990)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="media-body">
        <div class="user-name">{{ chatState.groupName }}</div>
        <div class="user-status">{{ chatState.grpStatus }}</div>
      </div>
    </div>

    <!-- header for contacts -->
    <div class="media" v-if="contactsRoute">
      <div class="media-head">
        <div class="avatar avatar-sm avatar-rounded position-relative">
          <img :src="avatar2" alt="user" class="avatar-img" />
          <span
            class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
          />
        </div>
      </div>
      <div class="media-body">
        <div class="user-name">艾伦·里克曼</div>
        <div class="user-status">在线</div>
      </div>
    </div>

    <div class="chat-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-none d-xl-block"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#invite_people"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="邀请成员"
        >
          <span class="feather-icon">
            <feather-icon name="user-plus"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#audio_call"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="语音通话"
        >
          <span class="feather-icon">
            <feather-icon name="phone"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#video_call"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="视频通话"
        >
          <span class="feather-icon">
            <feather-icon name="video"></feather-icon>
          </span>
        </span>
      </a>
      <a
        :class="[
          'btn btn-icon btn-flush-dark btn-rounded flush-soft-hover chatapp-info-toggle',
          { active: infoState },
        ]"
        href="#"
        @click="toggleInfo"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="信息"
        >
          <span class="feather-icon">
            <feather-icon name="info"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="更多"
        >
          <span class="feather-icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a
          class="d-xl-none dropdown-item"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#invite_people"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="user-plus"></feather-icon>
          </span>
          <span>邀请成员</span>
        </a>
        <a
          class="d-xl-none dropdown-item"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#audio_call"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="phone"></feather-icon>
          </span>
          <span>语音通话</span>
        </a>
        <a
          class="d-xl-none dropdown-item"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#video_call"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="video"></feather-icon>
          </span>
          <span>视频通话</span>
        </a>
        <div class="d-xl-none dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>星标消息</span>
        </a>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>归档消息</span>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="slash"></feather-icon>
          </span>
          <span>屏蔽内容</span></a
        >
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="external-link"></feather-icon>
          </span>
          <span>反馈</span>
        </a>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-none d-xl-block"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
          <feather-icon name="chevron-down" v-if="layoutStore.$state.topNavCollapse" />
          <feather-icon name="chevron-up" v-else />
        </span>
      </a>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { useChatStore } from "@/stores/chat";
import { useRoute } from "vue-router";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";

export default {
  name: "YourComponentName",
  props: {
    infoState: Boolean,
    infoToggle: Function,
  },
  methods: {
    toggleInfo() {
      console.log("Button clicked! infoToggle:", this.infoToggle);
      if (this.infoToggle) {
        this.infoToggle();
      }
    },
  },
  setup() {
    const chatStore = useChatStore();
    const route = useRoute();
    const chatState = chatStore.$state;
    const layoutStore = useLayoutStore();

    const chatsRoute = computed(() => route.path.match("apps/chat/chats"));
    const groupRoutes = computed(() => route.path.match("/apps/chat/group"));
    const contactsRoute = computed(() => route.path.match("/apps/chat/contact"));

    const avatarClasses = computed(() => {
      return chatState.grpAvatar.type === "img"
        ? ["avatar", "avatar-sm", "position-relative", "avatar-rounded", "avatar-primary"]
        : [
            "avatar",
            "avatar-sm",
            "position-relative",
            "avatar-rounded",
            `avatar-${chatState.grpAvatar.variant}`,
          ];
    });

    const backToUserList = () => {
      chatStore.toggleStartChat();
      layoutStore.toggleTopNav();
    };

    // Expose to template
    return {
      backToUserList,
      layoutStore,
      chatsRoute,
      groupRoutes,
      contactsRoute,
      chatState,
      avatarClasses,
      avatar2,
      // ... any other properties or methods
    };
  },
};
</script>
