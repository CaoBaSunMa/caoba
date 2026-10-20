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
        <h1>联系人</h1>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="chats">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="message-square"></feather-icon>
          </span>
          <span>聊天记录</span>
        </router-link>
        <router-link class="dropdown-item" to="contact">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="book"></feather-icon>
          </span>
          <span>联系人</span>
        </router-link>
        <router-link class="dropdown-item" to="group">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="users"></feather-icon>
          </span>
          <span>群组</span>
        </router-link>
        <router-link class="dropdown-item" to="group">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>已归档</span>
        </router-link>
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
                <feather-icon name="more-horizontal"></feather-icon>
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
        <input type="text" class="form-control" placeholder="搜索联系人" v-model="searchValue" />
      </form>
      <ul class="chat-contacts-list list-group list-group-flush">
        <li v-for="(elem, index) in filteredList" :key="elem.id" @click="startConversation(index, elem.id)">
          <div class="title title-wth-divider text-primary my-3" v-if="false"></div>
          <div class="list-group-item">
            <div class="media">
              <div class="media-head">
                <div class="avatar avatar-sm avatar-rounded position-relative">
                  <img
                    v-if="elem.avatar && elem.avatar.type === 'img'"
                    :src="elem.avatar.src"
                    alt="user"
                    class="avatar-img"
                  />
                  <div
                    v-else-if="elem.initAvatar"
                    :class="`avatar avatar-sm avatar-${elem.initAvatar.variant} avatar-rounded position-relative`"
                    style="height: 2.5rem; width: 2.5rem"
                  >
                    <span class="initial-wrap">{{ elem.initAvatar.title }}</span>
                  </div>
                  <span
                    class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                  ></span>
                </div>
              </div>
              <div class="media-body">
                <div>
                  <div class="user-name">{{ elem.name }}</div>
                  <div class="user-status">{{ elem.lastChat }}</div>
                </div>
                <div>
                  <div class="dropdown action-drp">
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
                      <a class="dropdown-item" href="#">删除聊天</a>
                      <a class="dropdown-item link-danger" href="#">屏蔽</a>
                    </div>
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
import { useLayoutStore } from "@/stores/layout";
import { useChatStore } from "@/stores/chat";

export default {
  setup() {
    const chatStore = useChatStore();
    const layoutStore = useLayoutStore();
    const searchValue = ref("");

    onMounted(() => {
      chatStore.fetchConversations();
    });

    const filteredList = computed(() => {
      const list = chatStore.contactList;
      if (searchValue.value.length > 1) {
        return list.filter((item) =>
          item.name.toString().toLowerCase().includes(searchValue.value.toLowerCase())
        );
      }
      return list;
    });

    const startConversation = (index, id) => {
      chatStore.selectConversationById(id, false);
      // Handle mobile view toggle and chat start
      if (window.innerWidth <= 991) {
        chatStore.toggleStartChat();
        layoutStore.toggleTopNav();
      }
    };

    const searchOnChange = () => {
      // The computed property `filteredList` will automatically update
    };

    return {
      searchValue,
      filteredList,
      startConversation,
      searchOnChange,
    };
  },
};
</script>