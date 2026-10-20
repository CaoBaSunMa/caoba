<template>
  <simplebar id="chat_body" class="chat-body">
    <ul class="list-unstyled chat-single-list">
      <li class="media received">
        <div class="avatar avatar-xs avatar-rounded">
          <img :src="avatar8" alt="user" class="avatar-img" />
        </div>
        <div class="media-body">
          <div class="msg-box">
            <div>
              <p>好吧，我们明天再谈吧</p>
              <span class="chat-time">22:52</span>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
          <div class="msg-box">
            <div>
              <p>新营销页面的图片已经发过去了</p>
              <span class="chat-time">22:53</span>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>
      </li>
      <li class="media media-attachment received">
        <div class="avatar avatar-xs avatar-rounded">
          <img :src="avatar9" alt="user" class="avatar-img" />
        </div>
        <div class="media-body msg-docs">
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
                <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="arrow-down"></feather-icon>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>
      </li>
      <li class="day-sep">
        <span>今天</span>
      </li>
      <li class="media sent">
        <div class="media-body">
          <div class="msg-box">
            <div>
              <p>我需要你的帮助。</p>
              <span class="chat-time">23:52</span>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>
      </li>
      <li class="media sent">
        <div class="media-body">
          <div class="msg-box">
            <div>
              <p>
                哈哈，这个笑话太好笑了 😍
              </p>
              <span class="chat-time">22:52</span>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>
      </li>
      <li class="media received">
        <div class="avatar avatar-xs avatar-rounded">
          <img :src="avatar10" alt="user" class="avatar-img" />
        </div>
        <div class="media-body">
          <div class="msg-box">
            <div>
              <p>
                嗨本，提醒一下你今天要来会议室开会。我们正提议对客户简报做一些调整。
              </p>
              <span class="chat-time">09:20</span>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>
      </li>

      <li v-for="(elem, index) in messages" :key="index" :class="['media', elem.types]">
        <div v-if="elem.types === 'received'" class="avatar avatar-xs avatar-rounded">
          <img
            v-if="elem.avatar.type === 'img'"
            :src="elem.avatar.src"
            alt="user"
            class="avatar-img"
          />
          <div
            v-else-if="elem.avatar.type === 'init'"
            :class="`avatar avatar-xs avatar-${elem.avatar.variant} avatar-rounded`"
          >
            <span class="initial-wrap">{{ elem.avatar.title }}</span>
          </div>
        </div>
        <div class="media-body">
          <div class="msg-box" id="msg-1">
            <div>
              <p>{{ elem.text }}</p>
              <span class="chat-time">{{ elem.time }}</span>
            </div>
            <div class="msg-action">
              <BButton
                variant="flush-dark"
                class="btn btn-icon btn-rounded flush-soft-hover"
                tag="a"
              >
                <span class="icon">
                  <feather-icon name="corner-up-right"></feather-icon>
                </span>
              </BButton>
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
                <BDropdownItem href="#">转发</BDropdownItem>
                <BDropdownItem href="#">复制</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div ref="gotoBottom" />
  </simplebar>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { useChatStore } from "@/stores/chatStore";
//Images
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";

const chatStore = useChatStore();
const messages = ref([]);
const chatState = chatStore.$state;
const gotoBottom = ref(null);

// get new messages from the store
onMounted(() => {
  messages.value = chatState.grpMsg;
});

// Watch for changes in the messages array
watch(
  () => chatStore.grpMsg,
  () => {
    // Use nextTick to wait for the DOM to update
    nextTick(() => {
      if (gotoBottom.value) {
        gotoBottom.value.scrollIntoView({ behavior: "smooth" });
      }
    });
  },
  { deep: true }
);
</script>
