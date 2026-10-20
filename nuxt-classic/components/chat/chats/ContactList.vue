<template>
  <div class="chatapp-aside">
    <header class="aside-header">
      <BDropdown toggle-class="chatapp-title text-dark p-0" variant="link">
        <template #button-content>
          <h1>聊天</h1>
        </template>
        <BDropdownItem to="/apps/chat/chats">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="message-square"></feather-icon>
          </span>
          <span>聊天记录</span>
        </BDropdownItem>
        <BDropdownItem to="/apps/chat/contact">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="book"></feather-icon>
          </span>
          <span>联系人</span>
        </BDropdownItem>
        <BDropdownItem to="/apps/chat/group">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="users"></feather-icon>
          </span>
          <span>群组</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>已归档</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>收藏</span>
        </BDropdownItem>
      </BDropdown>

      <div class="d-flex">
        <BDropdown
          variant="flush-dark"
          toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
          end
        >
          <template #button-content>
            <span class="icon">
              <feather-icon name="settings"></feather-icon>
            </span>
          </template>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="user-check"></feather-icon>
            </span>
            <span>活跃联系人</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="message-square"></feather-icon>
            </span>
            <span>聊天请求</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="archive"> </feather-icon>
            </span>
            <span>已归档的聊天</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="toggle-right"></feather-icon>
            </span>
            <span>未读聊天</span>
          </BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem>设置</BDropdownItem>
          <BDropdownItem>帮助</BDropdownItem>
          <BDropdownItem>反馈问题</BDropdownItem>
        </BDropdown>
        <BButton
          variant="primary"
          class="btn-icon btn-rounded flush-soft-hover d-none d-xl-block"
          tag="a"
          href="#"
          v-b-modal.invite_people
        >
          <span class="icon">
            <feather-icon name="plus"></feather-icon>
          </span>
        </BButton>
      </div>
    </header>
    <simplebar class="aside-body">
      <BForm class="aside-search" role="search" @submit.prevent="searchOnChange">
        <BFormInput type="text" placeholder="搜索聊天记录" v-model="searchValue" />
      </BForm>
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
              <HkBadge
                variant="success"
                indicator
                indicatorSize="lg"
                class="position-bottom-end-overflow-1"
              />
            </div>
          </li>
          <li>
            <div class="avatar avatar-sm avatar-rounded position-relative">
              <img :src="avatar8" alt="user" class="avatar-img" />
              <HkBadge
                variant="success"
                indicator
                indicatorSize="lg"
                class="position-bottom-end-overflow-1"
              />
            </div>
          </li>
          <li>
            <div class="avatar avatar-sm avatar-rounded">
              <img :src="avatar15" alt="user" class="avatar-img" />
            </div>
          </li>
        </ul>
      </div>
      <BListGroup class="chat-contacts-list" flush>
        <BListGroupItem
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
                <HkBadge v-if="elem.unread > 0" variant="primary" pill sm>
                  {{ elem.unread }}
                </HkBadge>

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
                  <BDropdownItem href="#">静音聊天</BDropdownItem>
                  <BDropdownItem href="#">归档聊天</BDropdownItem>
                  <BDropdownItem href="#">删除聊天</BDropdownItem>
                  <BDropdownItem href="#" link-class="link-danger">屏蔽</BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>
        </BListGroupItem>
      </BListGroup>
    </simplebar>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useChatStore } from "@/stores/chatStore";
import { useLayoutStore } from "@/stores/layout";

// Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";

// Stores
const chatStore = useChatStore();
const layoutStore = useLayoutStore();

// State and data
const searchValue = ref("");

// Fetch conversations from API
onMounted(() => {
  chatStore.fetchConversations();
});

// Map API conversations to display format
const list = computed(() => {
  return chatStore.sortedConversations.map((conv) => ({
    id: conv.id,
    name: conv.name || '未命名会话',
    lastChat: conv.lastMessage || '',
    time: conv.updatedAt ? new Date(conv.updatedAt).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '',
    unread: conv.unread || 0,
    status: conv.type === 'DIRECT' ? 'online' : 'offline',
    avatar: null,
    initAvatar: { title: (conv.name || 'N')[0], variant: 'primary' },
  }));
});

// Computed filtered list based on search input
const filteredList = computed(() => {
  if (searchValue.value.length > 1) {
    return list.value.filter((item) =>
      item.name.toString().toLowerCase().includes(searchValue.value.toLowerCase())
    );
  }
  return list.value;
});

// Methods
const startConversation = (index, id) => {
  const conv = chatStore.conversations.find(c => c.id === id);
  if (conv) {
    chatStore.selectConversation(conv);
  }
  // Handle mobile view toggle and chat start
  if (window.innerWidth <= 991) {
    chatStore.toggleStartChat();
    layoutStore.toggleTopNav();
  }
};

const searchOnChange = (event) => {
  searchValue.value = event.target.value;
};
</script>
