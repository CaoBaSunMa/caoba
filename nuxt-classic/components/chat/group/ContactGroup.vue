<template>
  <div class="chatapp-aside">
    <header class="aside-header">
      <BDropdown toggle-class="chatapp-title text-dark p-0" variant="link" skip-wrapper>
        <template #button-content>
          <h1>群组</h1>
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
        <BFormInput type="text" placeholder="搜索联系人" v-model="searchValue" />
      </BForm>

      <BListGroup class="chat-contacts-list" flush>
        <BListGroupItem
          v-for="(elem, index) in filteredList"
          :key="index"
          @click="startConversation(index, elem.id)"
        >
          <div
            :class="['media', { 'active-user read-chat': elem.id === chatState.grpId }]"
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
                  <BDropdownItem href="#">退出群组</BDropdownItem>
                  <BDropdownItem href="#">删除群组</BDropdownItem>
                  <BDropdownItem href="#">静音群组</BDropdownItem>
                  <BDropdownItem href="#" link-class="link-danger">屏蔽</BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>
        </BListGroupItem>
      </BListGroup>

      <div class="title-xs text-uppercase text-primary mt-4"><span>频道</span></div>
      <BNav class="channels-list nav-light flex-column">
        <BNavItem link-class="link-dark"> #开发者 </BNavItem>
        <BNavItem link-class="link-dark"> #设计师 </BNavItem>
        <BNavItem link-class="link-dark"> #人事管理 </BNavItem>
        <BNavItem link-class="link-dark"> #团队目标 </BNavItem>
        <BNavItem link-class="link-dark"> #caoba支持 </BNavItem>
      </BNav>
    </simplebar>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { useChatStore } from "@/stores/chatStore";

const chatStore = useChatStore();
const layoutStore = useLayoutStore();
const list = ref([]);
const searchValue = ref("");

// Fetch conversations and filter groups
onMounted(() => {
  chatStore.fetchConversations();
});

watch(() => chatStore.conversations, (convs) => {
  list.value = (convs || [])
    .filter(c => c.type === 'GROUP')
    .map(conv => ({
      id: conv.id,
      group: conv.name || '未命名群组',
      lastChat: conv.lastMessage || '',
      avatar: null,
      initAvatar: { title: (conv.name || 'G')[0], variant: 'success' },
    }));
}, { immediate: true });

const filteredList = computed(() => {
  if (searchValue.value.length > 1) {
    return list.value.filter((item) =>
      item.group.toString().toLowerCase().includes(searchValue.value.toLowerCase())
    );
  }
  return list.value;
});

const startConversation = (index, id) => {
  const contact = list.value[index];
  chatStore.selectGroup(
    contact.id,
    contact.avatar || contact.initAvatar,
    contact.group,
    contact.status
  );

  const updatedContacts = groupList.map((contactList) =>
    contactList.id === id ? { ...contactList, unread: 0 } : contactList
  );
  list.value = updatedContacts;

  // Handle mobile view toggle and chat start
  if (window.innerWidth <= 991) {
    chatStore.toggleStartChat();
    layoutStore.toggleTopNav();
  }
};

const searchOnChange = (event) => {
  searchValue.value = event.target.value;
  // The computed property `filteredList` will automatically update
};
</script>
