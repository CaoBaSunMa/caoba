<script>
import { useLayoutStore } from "@/stores/layout";
//images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar4 from "@/assets/img/avatar4.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";

export default {
  name: "TopNav",
  data() {
    return {
      isMobile: false,
      avatar2,
      avatar3,
      avatar4,
      avatar10,
      avatar12,
    };
  },
  setup() {
    const layoutStore = useLayoutStore();
    const toggleSidebar = () => {
      layoutStore.toggleSidebar();
    };
    return {
      toggleSidebar,
    };
  },
  methods: {
    closeDropdown() {
      // Assuming you have a reference to the dropdown element
      this.$refs.yourDropdownRef.classList.remove("show");
    },
  },
};
</script>

<template>
  <nav class="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
    <div class="container-fluid">
      <!-- Start Nav -->
      <div class="nav-start-wrap">
        <button
          class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle d-xl-none"
          @click="toggleSidebar"
        >
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="align-left" />
            </span>
          </span>
        </button>

        <!-- Search -->
        <form class="dropdown navbar-search">
          <div
            class="dropdown-toggle no-caret"
            data-bs-toggle="dropdown"
            data-dropdown-animation
            data-bs-auto-close="outside"
          >
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover d-xl-none"
            >
              <span class="icon">
                <span class="feather-icon"> <feather-icon name="search" /></span>
              </span>
            </a>
            <div class="input-group d-xl-flex d-none">
              <span class="input-affix-wrapper input-search affix-border">
                <input
                  type="text"
                  class="form-control bg-transparent"
                  data-navbar-search-close="false"
                  placeholder="搜索..."
                  aria-label="搜索"
                />
                <span class="input-suffix"
                  ><span>/</span>
                  <span class="btn-input-clear" @click.prevent="closeDropdown">
                    <i class="bi bi-x-circle-fill"></i>
                  </span>
                  <span
                    class="spinner-border spinner-border-sm input-loader text-primary"
                    role="status"
                  >
                    <span class="sr-only">加载中...</span>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div class="dropdown-menu p-0" ref="yourDropdownRef">
            <!-- Mobile Search -->
            <div class="dropdown-item d-xl-none bg-transparent">
              <div class="input-group mobile-search">
                <span class="input-affix-wrapper input-search">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="搜索..."
                    aria-label="搜索"
                  />
                  <span class="input-suffix">
                    <span class="btn-input-clear" @click.prevent="closeDropdown">
                      <i class="bi bi-x-circle-fill"></i>
                    </span>
                    <span
                      class="spinner-border spinner-border-sm input-loader text-primary"
                      role="status"
                    >
                      <span class="sr-only">加载中...</span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <!--/ Mobile Search -->
            <simplebar class="dropdown-body p-2">
              <h6 class="dropdown-header">最近搜索</h6>
              <div class="dropdown-item bg-transparent">
                <a href="#" class="badge badge-pill badge-soft-secondary">Grunt</a>
                <a href="#" class="badge badge-pill badge-soft-secondary">Node JS</a>
                <a href="#" class="badge badge-pill badge-soft-secondary">SCSS</a>
              </div>
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">帮助</h6>
              <a href="javascript:void(0);" class="dropdown-item">
                <div class="media align-items-center">
                  <div class="media-head me-2">
                    <div
                      class="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded"
                    >
                      <span class="initial-wrap">
                        <span class="svg-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-corner-down-right"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="media-body">如何设置主题？</div>
                </div>
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <div class="media align-items-center">
                  <div class="media-head me-2">
                    <div
                      class="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded"
                    >
                      <span class="initial-wrap">
                        <span class="svg-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-corner-down-right"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="media-body">查看详细文档</div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">用户</h6>
              <a href="javascript:void(0);" class="dropdown-item">
                <div class="media align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-rounded">
                      <img :src="avatar3" alt="用户" class="avatar-img" />
                    </div>
                  </div>
                  <div class="media-body">莎拉·琼</div>
                </div>
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <div class="media align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-soft-primary avatar-rounded">
                      <span class="initial-wrap">J</span>
                    </div>
                  </div>
                  <div class="media-body">乔·杰克逊</div>
                </div>
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <div class="media align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-rounded">
                      <img :src="avatar4" alt="用户" class="avatar-img" />
                    </div>
                  </div>
                  <div class="media-body">玛丽亚·理查德</div>
                </div>
              </a>
            </simplebar>
            <div class="dropdown-footer d-xl-flex d-none">
              <a href="#"><u>搜索全部</u></a>
            </div>
          </div>
        </form>
        <!-- /Search -->
      </div>
      <!-- /Start Nav -->

      <!-- End Nav -->
      <div class="nav-end-wrap">
        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <router-link
              to="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            >
              <span class="icon">
                <span class="position-relative">
                  <span class="feather-icon">
                    <feather-icon name="inbox"></feather-icon>
                  </span>
                  <span
                    class="badge badge-sm badge-soft-primary badge-sm badge-pill position-top-end-overflow-1"
                    >4</span
                  >
                </span>
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <div class="dropdown dropdown-notifications">
              <a
                href="#"
                class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret"
                data-bs-toggle="dropdown"
                data-dropdown-animation
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="icon">
                  <span class="position-relative">
                    <span class="feather-icon">
                      <feather-icon name="bell" />
                    </span>
                    <span
                      class="badge badge-success badge-indicator position-top-end-overflow-1"
                    >
                    </span>
                  </span> </span
              ></a>
              <div class="dropdown-menu dropdown-menu-end p-0">
                <h6 class="dropdown-header px-4 fs-6">
                  通知
                  <a
                    href="#"
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="settings"></feather-icon>
                      </span>
                    </span>
                  </a>
                </h6>
                <simplebar class="dropdown-body p-2">
                  <a href="javascript:void(0);" class="dropdown-item">
                    <div class="media">
                      <div class="media-head">
                        <div class="avatar avatar-rounded avatar-sm">
                          <img :src="avatar2" alt="用户" class="avatar-img" />
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <div class="notifications-text">
                            摩根·弗里曼接受了你的团队邀请
                          </div>
                          <div class="notifications-info">
                            <span class="badge badge-soft-success">协作</span>
                            <div class="notifications-time">今天 22:14</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-success avatar-rounded"
                        >
                          <span class="initial-wrap">
                            <span class="feather-icon">
                              <feather-icon name="inbox" />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <div class="notifications-text">
                            收到来自艾伦·里克曼的新消息
                          </div>
                          <div class="notifications-info">
                            <div class="notifications-time">今天 07:51</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-pink avatar-rounded"
                        >
                          <span class="initial-wrap">
                            <span class="feather-icon">
                              <feather-icon name="clock" />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <div class="notifications-text">
                            你将在 12月19日周五上午 9:30 与 caoba 负责人跟进沟通
                          </div>
                          <div class="notifications-info">
                            <div class="notifications-time">昨天 21:25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    <div class="media">
                      <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                          <img :src="avatar3" alt="用户" class="avatar-img" />
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <div class="notifications-text">
                            莎拉·威廉姆斯的申请正在等待你审批
                          </div>
                          <div class="notifications-info">
                            <div class="notifications-time">今天 22:14</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    <div class="media">
                      <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                          <img :src="avatar10" alt="用户" class="avatar-img" />
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <div class="notifications-text">
                            温斯顿·丘吉尔与你共享了一个文档
                          </div>
                          <div class="notifications-info">
                            <span class="badge badge-soft-violet">文件管理</span>
                            <div class="notifications-time">2021年10月2日</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-danger avatar-rounded"
                        >
                          <span class="initial-wrap">
                            <span class="feather-icon">
                              <feather-icon name="calendar"></feather-icon>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <div class="notifications-text">
                            项目完成仅剩 2 天
                          </div>
                          <div class="notifications-info">
                            <span class="badge badge-soft-orange">更新</span>
                            <div class="notifications-time">2021年9月14日</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </simplebar>
                <div class="dropdown-footer">
                  <a href="#"><u>查看所有通知</u></a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown ps-2">
              <a
                class="dropdown-toggle no-caret"
                href="#"
                role="button"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                data-dropdown-animation
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <div class="avatar avatar-rounded avatar-xs">
                  <img :src="avatar12" alt="用户" class="avatar-img" />
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <div class="p-2">
                  <div class="media">
                    <div class="media-head me-2">
                      <div class="avatar avatar-primary avatar-sm avatar-rounded">
                        <span class="initial-wrap">Cb</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="dropdown">
                        <a
                          href="#"
                          class="d-block dropdown-toggle link-dark fw-medium"
                          data-bs-toggle="dropdown"
                          data-dropdown-animation
                          data-bs-auto-close="inside"
                          >caoba</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <div class="p-2">
                            <div class="media align-items-center active-user mb-3">
                              <div class="media-head me-2">
                                <div
                                  class="avatar avatar-primary avatar-xs avatar-rounded"
                                >
                                  <span class="initial-wrap">Cb</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <a href="#" class="d-flex align-items-center link-dark"
                                  >caoba
                                  <i
                                    class="ri-checkbox-circle-fill fs-7 text-primary ms-1"
                                  ></i
                                ></a>
                                <a href="#" class="d-block fs-8 link-secondary"
                                  ><u>管理你的账户</u></a
                                >
                              </div>
                            </div>
                            <div class="media align-items-center mb-3">
                              <div class="media-head me-2">
                                <div class="avatar avatar-xs avatar-rounded">
                                  <img :src="avatar12" alt="用户" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <a href="#" class="d-block link-dark">caoba 团队</a>
                                <a href="#" class="d-block fs-8 link-secondary"
                                  >contact@caoba.com</a
                                >
                              </div>
                            </div>
                            <button class="btn btn-block btn-outline-light btn-sm">
                              <span>
                                <span class="icon">
                                  <span class="feather-icon">
                                    <feather-icon name="plus"></feather-icon>
                                  </span>
                                </span>
                                <span>添加账户</span></span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="fs-7">contact@caoba.com</div>
                      <a href="#" class="d-block fs-8 link-secondary"><u>退出登录</u></a>
                    </div>
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="#">个人资料</router-link>
                <a class="dropdown-item" href="#"
                  ><span class="me-2">优惠</span
                  ><span class="badge badge-sm badge-soft-pink">2</span></a
                >
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header">账户管理</h6>
                <a class="dropdown-item" href="#">
                  <span class="dropdown-icon feather-icon">
                    <feather-icon name="credit-card"></feather-icon>
                  </span>
                  <span>支付方式</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span class="dropdown-icon feather-icon">
                    <feather-icon name="check-square"></feather-icon>
                  </span>
                  <span>订阅</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span class="dropdown-icon feather-icon">
                    <feather-icon name="settings"></feather-icon>
                  </span>
                  <span>设置</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="dropdown-icon feather-icon">
                    <feather-icon name="tag"></feather-icon>
                  </span>
                  <span>提交工单</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">条款与条件</a>
                <a class="dropdown-item" href="#">帮助与支持</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- /End Nav -->
    </div>
  </nav>
</template>
