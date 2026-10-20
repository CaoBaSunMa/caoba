<template>
  <div class="chat-popup-body">
    <simplebar class="nicescroll-bar">
      <div>
        <div v-if="props.showContactList" class="contact-list-wrap">
          <ul class="chat-contacts-list list-group list-group-flush">
            <li>
              <div class="title title-wth-divider text-primary my-3">
                <span>A</span>
              </div>
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar2" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">艾伦·里克曼</div>
                    <div class="user-status">今天什么都不想做</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar8" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">阿什莉·朱德</div>
                    <div class="user-status">我的生活我做主😍</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar11" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">亚当·桑德勒</div>
                    <div class="user-status">你好，我正在使用 caoba</div>
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
            </li>
            <li>
              <div class="title title-wth-divider text-primary my-3"><span>B</span></div>
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar4" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">比利·禅</div>
                    <div class="user-status">👿带我去那些地方！！</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar1" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">布莱德利·库珀</div>
                    <div class="user-status">一直忙碌</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar15" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">布拉德·皮特</div>
                    <div class="user-status">不打电话，只用心电感应</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div
                    class="avatar avatar-sm avatar-soft-danger avatar-rounded position-relative"
                  >
                    <span class="initial-wrap">本</span>
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">本·阿弗莱克</div>
                    <div class="user-status">¬¬¬ 度假中</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar3" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">芭芭拉·哈尔希</div>
                    <div class="user-status">像蟒蛇一样乏味</div>
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
            </li>
            <li>
              <div class="title title-wth-divider text-primary my-3"><span>C</span></div>
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded position-relative">
                    <img :src="avatar7" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">科林·汉克斯</div>
                    <div class="user-status">不接电话，一直忙碌</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-rounded">
                    <img :src="avatar9" alt="user" class="avatar-img" />
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">查克·诺里斯</div>
                    <div class="user-status">你好，我正在使用 caoba</div>
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
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-sm avatar-soft-info avatar-rounded">
                    <span class="initial-wrap">克</span>
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <div class="user-name">克里斯蒂安·贝尔</div>
                    <div class="user-status">暂无状态</div>
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
            </li>
          </ul>
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
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="msg-box">
                <div>
                  <p>新营销页面的图片已经发过去了</p>
                  <span class="chat-time">22:53</span>
                  <div class="msg-action">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
                    <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="arrow-down"></feather-icon>
                        </span>
                      </span>
                    </button>
                  </div>
                  <div class="msg-action">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
                    <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="arrow-down"></feather-icon>
                        </span>
                      </span>
                    </button>
                  </div>
                  <div class="msg-action">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      data-bs-toggle="dropdown"
                    >
                      <span class="icon">
                        <span class="feather-icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">回复</a>
                      <a class="dropdown-item" href="#">转发</a>
                      <a class="dropdown-item" href="#">复制</a>
                    </div>
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
import { useChatPopupStore } from "@/stores/chatPopup";
//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar4 from "@/assets/img/avatar4.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";
import gify from "@/assets/img/giphy.gif";

const chatStore = useChatPopupStore();
const messages = ref([]);
const isTyping = ref(true);
const chatState = chatStore.$state;
const bottomRef = ref(null);

const props = defineProps({
  showContactList: Boolean,
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
