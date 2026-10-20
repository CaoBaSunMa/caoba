<template>
  <div class="chat-info">
    <simplebar class="nicescroll-bar">
      <BCloseButton class="info-close" @click="toggleInfo">
        <span aria-hidden="true">×</span>
      </BCloseButton>
      <div class="text-center">
        <div
          v-if="chatState.avatar.type === 'img'"
          class="avatar avatar-xxl avatar-rounded"
        >
          <img :src="chatState.avatar.src" alt="user" class="avatar-img" />
        </div>
        <div
          v-else-if="chatState.avatar.type === 'init'"
          :class="`avatar avatar-${chatState.avatar.variant} avatar-rounded avatar-xxl`"
        >
          <span class="initial-wrap">{{ chatState.avatar.title }}</span>
        </div>
        <div class="cp-name text-truncate mt-2">{{ chatState.userName }}</div>
        <p class="text-truncate">不接电话，一直忙碌</p>
      </div>

      <BTabs
        justified
        nav-class="nav nav-light nav-tabs nav-segmented-tabs active-theme mt-4"
      >
        <BTab title="信息">
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
                          联合创始人
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="cp-icon-wrap">
                            <span class="feather-icon">
                              <feather-icon name="mail"></feather-icon>
                            </span>
                          </span>
                          <span class="text-primary">contact@caoba.com</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="cp-icon-wrap">
                            <span class="feather-icon">
                              <feather-icon name="phone"></feather-icon>
                            </span>
                          </span>
                          +91-25-4125-2365
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
                      大家好，乌玛·瑟曼是一位出色的联合创始人兼文案撰稿人，
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
        </BTab>
        <BTab title="文件">
          <div class="mt-4">
            <BForm role="search">
              <BFormInput type="text" class="search-files" placeholder="搜索文件" />
            </BForm>
            <div class="collapse-simple mt-3">
              <BCard no-body>
                <template #header>
                  <a role="button" href="#" v-b-toggle.files_collapse> 昨天 </a>
                </template>
                <BCollapse id="files_collapse" visible>
                  <BCardBody>
                    <ul class="cp-files">
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-icon avatar-sm avatar-soft-blue">
                              <span class="initial-wrap fs-3">
                                <i class="ri-file-excel-2-fill"></i>
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">website_content.exl</p>
                              <p class="file-size">2,635 KB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item link-danger" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-icon avatar-sm avatar-soft-light">
                              <span class="initial-wrap fs-3">
                                <i class="ri-file-text-fill"></i>
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">caoba.pdf</p>
                              <p class="file-size">1.3 GB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item link-danger" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                              <span class="initial-wrap fs-3">
                                <i class="ri-file-zip-fill"></i>
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">caoba.zip</p>
                              <p class="file-size">2.45 GB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item link-danger" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-logo avatar-sm">
                              <span class="initial-wrap">
                                <img :src="avatar1" alt="user" />
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">bruce-mars-fiEG-Pk6ZASFPk6ZASF</p>
                              <p class="file-size">4,178 KB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item link-danger" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-logo avatar-sm">
                              <span class="initial-wrap">
                                <img :src="avatar2" alt="user" />
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">jonas-kakaroto-KIPqvvTKIPqvvT</p>
                              <p class="file-size">951 KB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item link-danger" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </BCardBody>
                </BCollapse>
              </BCard>
              <BCard no-body>
                <template #header>
                  <a role="button" href="#" v-b-toggle.files_collapse_1> 4月23日 </a>
                </template>
                <BCollapse id="files_collapse_1" visible>
                  <BCardBody>
                    <ul class="cp-files">
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-icon avatar-sm avatar-soft-light">
                              <span class="initial-wrap fs-3">
                                <i class="ri-keynote-fill"></i>
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">presentation.keynote</p>
                              <p class="file-size">20 KB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item link-danger" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                              <span class="initial-wrap fs-3">
                                <i class="ri-file-zip-fill"></i>
                              </span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">PACK-TRIAL.zip</p>
                              <p class="file-size">2.45 GB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm">
                              <img :src="thumbImg" alt="user" class="avatar-img" />
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <p class="file-name">joel-mott-LaK153ghdigaghdi</p>
                              <p class="file-size">3,028 KB</p>
                            </div>
                            <div>
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                size="sm"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-vertical" />
                                  </span>
                                </template>
                                <a class="dropdown-item" href="#">下载</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </BDropdown>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </BCardBody>
                </BCollapse>
              </BCard>
            </div>
          </div>
        </BTab>
      </BTabs>
    </simplebar>
  </div>
</template>

<script setup>
import { useChatStore } from "@/stores/chatStore";

// Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar2 from "@/assets/img/avatar2.jpg";
import thumbImg from "@/assets/img/img-thumb1.jpg";

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
