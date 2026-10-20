<template>
  <div class="chatapp-aside">
    <header class="aside-header">
      <a
        class="chatapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>聊天</h1>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/apps/chat/chats">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="message-square"></feather-icon>
          </span>
          <span>聊天记录</span>
        </router-link>
        <router-link class="dropdown-item" to="/apps/chat/contact">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="book"></feather-icon>
          </span>
          <span>联系人</span>
        </router-link>
        <router-link class="dropdown-item" to="/apps/chat/groups">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="users"></feather-icon>
          </span>
          <span>群组</span>
        </router-link>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>已归档</span>
        </a>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>收藏</span>
        </a>
      </div>
      <div class="d-flex">
        <div class="dropdown">
          <a
            href="#"
            class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
            data-bs-toggle="dropdown"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="settings"></feather-icon>
              </span>
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="#">
              <span class="feather-icon dropdown-icon">
                <feather-icon name="user-check"></feather-icon>
              </span>
              <span>活跃联系人</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="feather-icon dropdown-icon">
                <feather-icon name="message-square"></feather-icon>
              </span>
              <span>聊天请求</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="feather-icon dropdown-icon">
                <feather-icon name="archive"></feather-icon> </span
              ><span>已归档的聊天</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="feather-icon dropdown-icon">
                <feather-icon name="toggle-right"></feather-icon>
              </span>
              <span>未读聊天</span>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">设置</a>
            <a class="dropdown-item" href="#">帮助</a>
            <a class="dropdown-item" href="#">反馈问题 </a>
          </div>
        </div>
        <a
          href="#"
          class="btn btn-icon btn-rounded btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#invite_people"
        >
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="plus"></feather-icon>
            </span>
          </span>
        </a>
      </div>
    </header>
    <simplebar class="aside-body">
      <form class="aside-search" role="search" @submit.prevent="searchOnChange">
        <input
          type="text"
          class="form-control"
          placeholder="搜索聊天记录"
          v-model="searchValue"
        />
      </form>
      <div class="frequent-contact">
        <div class="title-sm text-primary"><span>常用联系人</span></div>
        <ul class="hk-list">
          <li>
            <div class="avatar avatar-sm avatar-primary position-relative avatar-rounded">
              <span class="initial-wrap">H</span>
              <div
                class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
              >
                <div class="badge-icon-wrap">
                  <i class="ri-group-fill text-light"></i>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                  <g data-name="Ellipse 302" transform="translate(8 8)" stroke-width="3">
                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor"></circle>
                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor"></circle>
                  </g>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div class="avatar avatar-sm avatar-primary position-relative avatar-rounded">
              <img :src="avatar1" alt="user" class="avatar-img" />
              <div
                class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
              >
                <div class="badge-icon-wrap">
                  <i class="ri-group-fill text-light"></i>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                  <g data-name="Ellipse 302" transform="translate(8 8)" stroke-width="3">
                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor"></circle>
                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor"></circle>
                  </g>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div
              class="avatar avatar-sm avatar-soft-danger avatar-rounded position-relative"
            >
              <span class="initial-wrap">W</span>
              <span
                class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
              ></span>
            </div>
          </li>
          <li>
            <div class="avatar avatar-sm avatar-rounded position-relative">
              <img :src="avatar8" alt="user" class="avatar-img" />
              <span
                class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
              ></span>
            </div>
          </li>
          <li>
            <div class="avatar avatar-sm avatar-rounded">
              <img :src="avatar15" alt="user" class="avatar-img" />
            </div>
          </li>
        </ul>
      </div>
      <ul class="chat-contacts-list list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(elem, index) in filteredList"
          :key="index"
          @click="startConversation(index, elem.id)"
        >
          <div
            :class="[
              'media',
              { 'active-user': elem.id === chatState.userId },
              { 'read-chat': !elem.unread },
            ]"
          >
            <div class="media-head">
              <div
                v-if="elem.avatar"
                class="avatar avatar-sm avatar-rounded position-relative"
              >
                <img :src="elem.avatar.src" alt="user" class="avatar-img" />
                <span
                  v-if="elem.status === 'online'"
                  class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                ></span>
              </div>
              <div
                v-else
                :class="[
                  'avatar',
                  'avatar-sm',
                  `avatar-${elem.initAvatar.variant}`,
                  'avatar-rounded',
                ]"
              >
                <span class="initial-wrap">{{ elem.initAvatar.title }}</span>
              </div>
            </div>
            <div class="media-body">
              <div>
                <div class="user-name">{{ elem.name }}</div>
                <div class="user-last-chat">
                  {{ elem.lastChat }}
                  <span v-if="elem.lastChat === 'Typing'">
                    <span className="one">.</span><span className="two">.</span
                    ><span className="three">.</span>
                  </span>
                </div>
              </div>
              <div>
                <div class="last-chat-time">{{ elem.time }}</div>
                <div
                  v-if="elem.unread > 0"
                  class="badge badge-primary badge-sm badge-pill"
                >
                  {{ elem.unread }}
                </div>
                <div class="dropdown action-drp">
                  <a
                    href="#"
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    data-bs-toggle="dropdown"
                  >
                    <span class="icon">
                      <feather-icon name="more-horizontal" />
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">静音聊天</a>
                    <a class="dropdown-item" href="#">归档聊天</a>
                    <a class="dropdown-item" href="#">删除聊天</a>
                    <a class="dropdown-item link-danger" href="#">屏蔽</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </simplebar>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useChatStore } from "@/stores/chat";
import { useLayoutStore } from "@/stores/layout";

//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";

export default {
  setup() {
    const chatStore = useChatStore();
    const chatState = chatStore.$state;
    const searchValue = ref("");
    const layoutStore = useLayoutStore();

    onMounted(() => {
      chatStore.fetchConversations();
    });

    const filteredList = computed(() => {
      if (searchValue.value.length > 1) {
        return chatStore.contactList.filter((item) =>
          item.name.toString().toLowerCase().includes(searchValue.value.toLowerCase())
        );
      }
      return chatStore.contactList;
    });

    const startConversation = (index, id) => {
      chatStore.selectConversationById(id, false);

      // Handle mobile view toggle and chat start
      if (window.innerWidth <= 991) {
        chatStore.toggleStartChat();
        layoutStore.toggleTopNav();
        // Add any additional mobile view toggles here
      }
    };

    const searchOnChange = (event) => {
      searchValue.value = event.target.value;
      // The computed property `filteredContacts` will automatically update
    };

    return {
      chatState,
      searchValue,
      filteredList,
      startConversation,
      searchOnChange,
      avatar1,
      avatar8,
      avatar15,
    };
  },
};
</script>
