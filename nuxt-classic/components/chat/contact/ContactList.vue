<template>
  <div class="chatapp-aside">
    <header class="aside-header">
      <BDropdown toggle-class="chatapp-title text-dark p-0" variant="link">
        <template #button-content>
          <h1>联系人</h1>
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
      <BForm class="aside-search" role="search">
        <BFormInput type="text" placeholder="搜索联系人" />
      </BForm>
      <BListGroup
        v-for="(elem, index) in filteredList"
        :key="index"
        class="chat-contacts-list"
        flush
      >
        <BListGroupItem>
          <div class="title title-wth-divider text-primary my-3">
            <span>
              {{ elem.group }}
            </span>
          </div>
        </BListGroupItem>
        <BListGroupItem
          v-for="(contacts, ind) in elem.contacts"
          :key="ind"
          @click="startConversation(ind, contacts)"
        >
          <div
            :class="[
              'media read-chat',
              { 'active-user': contacts.id === chatState.contId },
            ]"
          >
            <div class="media-head">
              <div
                :class="[
                  'avatar avatar-sm avatar-rounded position-relative',
                  contacts.initAvatar ? `avatar-${contacts.initAvatar.variant}` : null,
                ]"
              >
                <img
                  v-if="contacts.avatar"
                  :src="contacts.avatar.src"
                  alt="user"
                  class="avatar-img"
                />
                <span v-if="contacts.initAvatar" class="initial-wrap">
                  {{ contacts.initAvatar.title }}
                </span>
                <HkBadge
                  v-if="contacts.status === 'Online'"
                  variant="success"
                  indicator
                  indicatorSize="lg"
                  class="position-bottom-end-overflow-1"
                />
              </div>
            </div>
            <div class="media-body">
              <div>
                <div class="user-name">{{ contacts.name }}</div>
                <div class="user-status">{{ contacts.userStatus }}</div>
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
import { useLayoutStore } from "@/stores/layout";
import { useChatStore } from "@/stores/chatStore";

// Stores
const chatStore = useChatStore();
const layoutStore = useLayoutStore();

// State and data
const searchValue = ref("");
const list = ref([]);

// Fetch contacts from API
onMounted(() => {
  chatStore.fetchConversations();
});

// Map conversations to contact list format
watch(() => chatStore.conversations, (convs) => {
  list.value = (convs || []).map(conv => ({
    id: conv.id,
    name: conv.name || '未知联系人',
    lastChat: conv.lastMessage || '',
    time: conv.updatedAt ? new Date(conv.updatedAt).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '',
    unread: conv.unread || 0,
    avatar: null,
    initAvatar: { title: (conv.name || 'U')[0], variant: 'primary' },
  }));
}, { immediate: true });

// Computed filtered list based on search input
const filteredList = computed(() => {
  if (searchValue.value.length > 1) {
    return list.value.filter((item) =>
      item.name.toString().toLowerCase().includes(searchValue.value.toLowerCase())
    );
  }
  return list.value;
});

const startConversation = (index, contact) => {
  chatStore.selectContact(
    contact.id,
    contact.avatar || contact.initAvatar,
    contact.name,
    contact.userStatus,
    contact.status
  );

  const updatedContacts = contacts.map((contactList) =>
    contactList.id === id ? { ...contactList, unread: 0 } : contactList
  );
  list.value = updatedContacts;
  // Handle mobile view toggle and chat start
  if (window.innerWidth <= 991) {
    chatStore.toggleStartChat();
    layoutStore.toggleTopNav();
  }
};
</script>
