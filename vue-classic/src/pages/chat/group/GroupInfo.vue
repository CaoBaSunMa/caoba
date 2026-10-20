<template>
  <div class="chat-info">
    <simplebar class="nicescroll-bar">
      <button type="button" class="info-close btn-close" @click="toggleInfo">
        <span aria-hidden="true">×</span>
      </button>
      <div class="text-center">
        <div
          v-if="chatState.grpAvatar.type === 'img'"
          class="avatar avatar-xxl avatar-rounded"
        >
          <img :src="chatState.grpAvatar.src" alt="user" class="avatar-img" />
        </div>
        <div
          v-else-if="chatState.grpAvatar.type === 'init'"
          :class="`avatar avatar-${chatState.grpAvatar.variant} avatar-rounded avatar-xxl`"
        >
          <span class="initial-wrap">{{ chatState.grpAvatar.title }}</span>
        </div>
        <div class="cp-name text-truncate mt-2">{{ chatState.groupName }}</div>
        <p class="text-truncate">代码构建与评审专区</p>
      </div>
      <ul
        class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mt-4"
      >
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#tab_info">
            <span class="nav-link-text">信息</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab_files">
            <span class="nav-link-text">文件</span>
          </a>
        </li>
      </ul>
      <div class="tab-content mt-4">
        <div class="tab-pane fade show active" id="tab_info">
          <form role="search">
            <input
              type="text"
              class="form-control"
              placeholder="搜索会话内容"
            />
          </form>
          <div class="collapse-simple mt-3">
            <div class="card">
              <div class="card-header">
                <a
                  role="button"
                  data-bs-toggle="collapse"
                  href="#members"
                  aria-expanded="true"
                  >成员</a
                >
              </div>
              <div id="members" class="collapse show">
                <div class="card-body">
                  <ul class="hk-list">
                    <li>
                      <div
                        class="avatar avatar-sm avatar-primary avatar-rounded"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="caoba"
                      >
                        <span class="initial-wrap">Cb</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-rounded"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="摩根"
                      >
                        <img :src="avatar2" alt="user" class="avatar-img" />
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-rounded"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="查理"
                      >
                        <img :src="avatar13" alt="user" class="avatar-img" />
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-rounded position-relative"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="汤姆"
                      >
                        <img :src="avatar7" alt="user" class="avatar-img" />
                        <span
                          class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                        ></span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-rounded"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="凯瑟琳"
                      >
                        <img :src="avatar9" alt="user" class="avatar-img" />
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-rounded position-relative"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="丹尼尔"
                      >
                        <img :src="avatar10" alt="user" class="avatar-img" />
                        <span
                          class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                        ></span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-rounded position-relative"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="宝贝老板"
                      >
                        <img :src="avatar15" alt="user" class="avatar-img" />
                        <span
                          class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                        ></span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="温斯顿"
                      >
                        <span class="initial-wrap">温</span>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#invite_people"
                      >
                        <span
                          class="initial-wrap"
                          v-tooltip
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="添加新成员"
                        >
                          <span class="feather-icon">
                            <feather-icon name="plus"></feather-icon>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  role="button"
                  data-bs-toggle="collapse"
                  href="#general_info"
                  aria-expanded="true"
                  >基本信息</a
                >
              </div>
              <div id="general_info" class="collapse show">
                <div class="card-body">
                  <ul class="cp-info">
                    <li>
                      <a href="#">
                        <span class="cp-icon-wrap">
                          <span class="feather-icon">
                            <feather-icon name="briefcase"></feather-icon>
                          </span>
                        </span>
                        管理者：摩根·弗里曼
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="cp-icon-wrap">#开发者</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  role="button"
                  data-bs-toggle="collapse"
                  href="#settings"
                  aria-expanded="true"
                  >设置
                </a>
              </div>
              <div id="settings" class="collapse show">
                <div class="card-body">
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
                  <a href="#" class="d-block text-dark fs-7 mb-10"
                    >反馈并举报会话</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="tab_files">
          <form role="search">
            <input
              type="text"
              class="form-control search-files"
              placeholder="搜索文件"
            />
          </form>
          <div class="collapse-simple mt-3">
            <div class="card">
              <div class="card-header">
                <a
                  role="button"
                  data-bs-toggle="collapse"
                  href="#files_collapse"
                  aria-expanded="true"
                  >昨天</a
                >
              </div>
              <div id="files_collapse" class="collapse show">
                <div class="card-body">
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item link-danger" href="#">删除</a>
                            </div>
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item link-danger" href="#">删除</a>
                            </div>
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item link-danger" href="#">删除</a>
                            </div>
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item link-danger" href="#">删除</a>
                            </div>
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item link-danger" href="#">删除</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  role="button"
                  data-bs-toggle="collapse"
                  href="#files_collapse_1"
                  aria-expanded="true"
                  >4月23日</a
                >
              </div>
              <div id="files_collapse_1" class="collapse show">
                <div class="card-body">
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item link-danger" href="#">删除</a>
                            </div>
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item" href="#">删除</a>
                            </div>
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
                              <a class="dropdown-item" href="#">下载</a>
                              <a class="dropdown-item" href="#">删除</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { useChatStore } from "@/stores/chat";

//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";
import thumbImg from "@/assets/img/img-thumb1.jpg";

export default {
  name: "GroupInfo",
  components: {},
  props: {
    infoToggle: Function,
  },
  methods: {
    toggleInfo() {
      if (this.infoToggle) {
        this.infoToggle();
      }
    },
  },
  setup() {
    const chatStore = useChatStore();
    const chatState = chatStore.$state;

    return {
      chatState,
    };
  },
  data() {
    return {
      //imgs
      avatar1,
      avatar2,
      avatar7,
      avatar9,
      avatar10,
      avatar13,
      avatar15,
      thumbImg,
    };
  },
};
</script>
