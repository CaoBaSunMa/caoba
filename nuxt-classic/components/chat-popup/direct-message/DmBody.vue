<template>
  <div class="chat-popup-body">
    <simplebar class="nicescroll-bar">
      <div>
        <div v-if="props.showContactList" class="contact-list-wrap">
          <BListGroup
            v-for="(elem, index) in contactList"
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
                      contacts.initAvatar
                        ? `avatar-${contacts.initAvatar.variant}`
                        : null,
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
                      <BDropdownItem href="#" link-class="link-danger"
                        >屏蔽</BDropdownItem
                      >
                    </BDropdown>
                  </div>
                </div>
              </div>
            </BListGroupItem>
          </BListGroup>
        </div>
        <ul v-else class="list-unstyled">
          <li class="media received">
            <div class="avatar avatar-xs avatar-rounded">
              <img :src="avatar8" alt="user" class="avatar-img" />
            </div>
            <div class="media-body">
              <div class="msg-box">
                <div>
                  <p>好吧，我们明天再谈吧</p>
                  <span class="chat-time">22:52</span>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
              <div class="msg-box">
                <div>
                  <p>新营销页面的图片已经发过去了</p>
                  <span class="chat-time">22:53</span>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="day-sep">
            <span>今天</span>
          </li>
          <li class="media media-attachment received">
            <div class="avatar avatar-xs avatar-rounded">
              <img :src="avatar8" alt="user" class="avatar-img" />
            </div>
            <div class="media-body msg-docs">
              <div class="msg-box">
                <div>
                  <div class="media">
                    <div class="avatar avatar-icon avatar-sm avatar-blue">
                      <span class="initial-wrap fs-3">
                        <i class="ri-file-excel-2-fill"></i>
                      </span>
                    </div>
                    <div class="media-body">
                      <p class="file-name">Website_content.xls</p>
                      <p class="file-size">2,635 KB</p>
                    </div>
                  </div>
                  <div class="file-overlay">
                    <BButton variant="primary" size="sm" class="btn-icon btn-rounded">
                      <span class="icon">
                        <feather-icon name="arrow-down"></feather-icon>
                      </span>
                    </BButton>
                  </div>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
              <div class="msg-box">
                <div>
                  <div class="media">
                    <div class="avatar avatar-icon avatar-sm avatar-warning">
                      <span class="initial-wrap fs-3">
                        <i class="ri-file-zip-fill"></i>
                      </span>
                    </div>
                    <div class="media-body">
                      <p class="file-name">caoba.zip</p>
                      <p class="file-size">2.45 GB</p>
                    </div>
                  </div>
                  <div class="file-overlay">
                    <BButton variant="primary" size="sm" class="btn-icon btn-rounded">
                      <span class="icon">
                        <feather-icon name="arrow-down"></feather-icon>
                      </span>
                    </BButton>
                  </div>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="media sent">
            <div class="media-body">
              <div class="msg-box">
                <div>
                  <p>对了，我正在做一个你一定会感兴趣的东西。</p>
                  <span class="chat-time">23:52</span>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="media media-attachment received">
            <div class="avatar avatar-xs avatar-rounded">
              <img :src="avatar8" alt="user" class="avatar-img" />
            </div>
            <div class="media-body msg-imgs">
              <div class="msg-box">
                <div>
                  <img class="d-block img-fluid" :src="gify" alt="gif" />
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="media sent">
            <div class="media-body">
              <div class="msg-box">
                <div>
                  <p>哈哈，这是个玩笑 😍</p>
                  <span class="chat-time">22:52</span>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li
            v-for="(message, index) in messages"
            :key="index"
            :class="['media', message.types]"
          >
            <div
              v-if="message.types === 'received'"
              class="avatar avatar-xs avatar-rounded"
            >
              <img :src="avatar8" alt="user" class="avatar-img" />
            </div>
            <div class="media-body">
              <div class="msg-box">
                <div>
                  <p>{{ message.text }}</p>
                  <span class="chat-time">{{ message.time }}</span>
                  <div class="msg-action">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      size="sm"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">回复</BDropdownItem>
                      <BDropdownItem href="#">转发</BDropdownItem>
                      <BDropdownItem href="#">复制</BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li v-if="isTyping" class="media received typing-wrap">
            <div class="avatar avatar-xs avatar-rounded">
              <img :src="avatar8" alt="user" class="avatar-img" />
            </div>
            <div class="media-body">
              <div class="msg-box">
                <div>
                  <div class="typing">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <div ref="bottomRef"></div>
        </ul>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { useChatStore } from "@/stores/chatStore";

//Images
import avatar8 from "@/assets/img/avatar8.jpg";
import gify from "@/assets/img/giphy.gif";

const chatStore = useChatStore();
const messages = ref([]);
const isTyping = ref(true);
const bottomRef = ref(null);

const props = defineProps({
  showContactList: Boolean,
});

// Fetch conversations on mount
onMounted(() => {
  chatStore.fetchConversations();
});

// get new messages from the store
onMounted(() => {
  messages.value = chatState.directMsgs;
  isTyping.value = messages.value.length > 0 ? false : true;

  if (bottomRef.value) {
    bottomRef.value.scrollIntoView({ behavior: "smooth" });
  }
});

// Watch for changes in the messages array
watch(
  () => chatStore.directMsgs,
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
