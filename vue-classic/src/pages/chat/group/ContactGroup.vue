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
        <h1>群组</h1>
      </a>
      <div class="dropdown-menu">
        <router-link to="/apps/chat/chats" class="dropdown-item">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="message-square"></feather-icon>
          </span>
          <span>聊天记录</span>
        </router-link>
        <router-link to="/apps/chat/contact" class="dropdown-item">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="book"></feather-icon>
          </span>
          <span>联系人</span>
        </router-link>
        <router-link to="/apps/chat/group" class="dropdown-item" href="chats-group.html">
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
                <feather-icon name="archive"></feather-icon>
              </span>
              <span>已归档的聊天</span>
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
          placeholder="搜索联系人"
          v-model="searchValue"
        />
      </form>

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
                <div
                  class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
                >
                  <div class="badge-icon-wrap">
                    <i class="ri-group-fill text-light" />
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                    <g
                      data-name="Ellipse 302"
                      transform="translate(8 8)"
                      strokeWidth="{3}"
                    >
                      <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                      <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                    </g>
                  </svg>
                </div>
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
                <div
                  class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
                >
                  <div class="badge-icon-wrap">
                    <i class="ri-group-fill text-light" />
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                    <g
                      data-name="Ellipse 302"
                      transform="translate(8 8)"
                      strokeWidth="{3}"
                    >
                      <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                      <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="media-body">
              <div>
                <div class="user-name">{{ elem.group }}</div>
                <div class="user-last-chat">{{ elem.lastChat }}</div>
              </div>
              <div>
                <div class="dropdown action-drp">
                  <a
                    href="#"
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    data-bs-toggle="dropdown"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="more-horizontal"></feather-icon>
                      </span>
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">退出群组</a>
                    <a class="dropdown-item" href="#">删除群组</a>
                    <a class="dropdown-item" href="#">静音群组</a>
                    <a class="dropdown-item link-danger" href="#">屏蔽</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="title-xs text-uppercase text-primary mt-4"><span>频道</span></div>
      <ul class="channels-list nav nav-light flex-column">
        <li class="nav-item">
          <a href="#" class="nav-link link-dark">#开发者</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-dark">#设计师</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-dark">#人事管理</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-dark">#团队目标</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-dark">#caoba支持</a>
        </li>
      </ul>
    </simplebar>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { useChatStore } from "@/stores/chat";
//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";

export default {
  setup() {
    const chatStore = useChatStore();
    const layoutStore = useLayoutStore();
    const chatState = chatStore.$state;
    const searchValue = ref("");

    onMounted(() => {
      chatStore.fetchConversations();
    });

    const filteredList = computed(() => {
      if (searchValue.value.length > 1) {
        return chatStore.groupList.filter((item) =>
          item.group.toString().toLowerCase().includes(searchValue.value.toLowerCase())
        );
      }
      return chatStore.groupList;
    });

    const startConversation = (index, id) => {
      chatStore.selectConversationById(id, true);

      // Handle mobile view toggle and chat start
      if (window.innerWidth <= 991) {
        chatStore.toggleStartChat();
        layoutStore.toggleTopNav();
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
