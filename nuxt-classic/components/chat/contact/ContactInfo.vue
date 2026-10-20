<template>
  <div class="chat-info">
    <simplebar class="nicescroll-bar">
      <BCloseButton class="info-close" @click="toggleInfo">
        <span aria-hidden="true">×</span>
      </BCloseButton>
      <div class="text-center">
        <div
          v-if="chatState.contAvatar.type === 'img'"
          class="avatar avatar-xxl avatar-rounded"
        >
          <img :src="chatState.contAvatar.src" alt="user" class="avatar-img" />
        </div>
        <div
          v-else-if="chatState.contAvatar.type === 'init'"
          :class="`avatar avatar-${chatState.contAvatar.variant} avatar-rounded avatar-xxl`"
        >
          <span class="initial-wrap">{{ chatState.contAvatar.title }}</span>
        </div>
        <div class="cp-name text-truncate mt-2">{{ chatState.contUserName }}</div>
        <p class="text-truncate">{{ chatState.contUserStatus }}</p>
      </div>

      <div class="mt-4">
        <BForm role="search">
          <BFormInput type="text" placeholder="搜索会话内容" />
        </BForm>
        <div class="collapse-simple mt-3">
          <BCard no-body>
            <template #header>
              <a role="button" href="#" v-b-toggle.gn_info> 基本信息 </a>
            </template>
            <BCollapse id="gn_info" visible>
              <BCardBody>
                <ul class="cp-info">
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="briefcase"></feather-icon>
                        </span>
                      </span>
                      开发者
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="mail"></feather-icon>
                        </span>
                      </span>
                      <span class="text-primary">alan@caoba.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="phone"></feather-icon>
                        </span>
                      </span>
                      美国纽约
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="map-pin"></feather-icon>
                        </span>
                      </span>
                      奥斯陆，加拿大
                    </a>
                  </li>
                </ul>
              </BCardBody>
            </BCollapse>
          </BCard>
          <BCard no-body>
            <template #header>
              <a role="button" href="#" v-b-toggle.social_profile>社交资料 </a>
            </template>
            <BCollapse id="social_profile" visible>
              <BCardBody>
                <ul class="hk-list hk-list-sm">
                  <li>
                    <BButton variant="primary" class="btn-icon btn-rounded">
                      <span class="icon">
                        <font-awesome-icon icon="fab fa-behance" />
                      </span>
                    </BButton>
                  </li>
                  <li>
                    <BButton variant="warning" class="btn btn-icon btn-rounded">
                      <span class="icon">
                        <font-awesome-icon icon="fab fa-google-drive" />
                      </span>
                    </BButton>
                  </li>
                  <li>
                    <BButton variant="info" class="btn btn-icon btn-rounded">
                      <span class="icon">
                        <font-awesome-icon icon="fab fa-dropbox" />
                      </span>
                    </BButton>
                  </li>
                  <li>
                    <BButton variant="dark" class="btn btn-icon btn-rounded">
                      <span class="icon">
                        <font-awesome-icon icon="fab fa-github" />
                      </span>
                    </BButton>
                  </li>
                  <li>
                    <BButton variant="danger" class="btn btn-icon btn-rounded">
                      <span class="icon">
                        <font-awesome-icon icon="fab fa-google" />
                      </span>
                    </BButton>
                  </li>
                </ul>
              </BCardBody>
            </BCollapse>
          </BCard>
          <BCard no-body>
            <template #header>
              <a role="button" href="#" v-b-toggle.biography>个人简介 </a>
            </template>
            <BCollapse id="biography" visible>
              <BCardBody>
                <p>
                  大家好，艾伦·里克曼是一位出色的联合创始人兼文案撰稿人，
                  为世界 500 强企业服务了近十年。我精通多门外语，
                  并且喜欢产出高品质的内容。
                </p>
              </BCardBody>
            </BCollapse>
          </BCard>
          <BCard no-body>
            <template #header>
              <a role="button" href="#" v-b-toggle.settings>设置 </a>
            </template>
            <BCollapse id="settings" visible>
              <BCardBody>
                <ul class="cp-action">
                  <li>
                    <a href="#"> 清空聊天记录 </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text-danger">屏蔽联系人</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"> 反馈问题 </a>
                  </li>
                </ul>
                <a href="#" class="d-block text-dark fs-7 mb-10">
                  反馈并举报会话
                </a>
              </BCardBody>
            </BCollapse>
          </BCard>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
import { useChatStore } from "@/stores/chatStore";

// Props
const props = defineProps({
  infoToggle: Function,
});

// Methods
const toggleInfo = () => {
  if (props.infoToggle) {
    props.infoToggle();
  }
};

// Setup
const chatStore = useChatStore();
const chatState = chatStore.$state;
</script>
