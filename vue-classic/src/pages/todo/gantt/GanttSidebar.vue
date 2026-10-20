<template>
  <nav class="todoapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          class="btn btn-primary btn-rounded btn-block mb-4"
          data-bs-toggle="modal"
          data-bs-target="#add_new_task"
        >
          添加任务
        </button>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item active">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="git-pull-request"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">甘特图</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="list"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">我的任务</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="calendar"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">日历</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="file"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">文件</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="activity"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">动态</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="title-sm text-primary">优先级</div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link link-with-badge" href="#">
                <span
                  class="badge badge-danger badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">紧急</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-with-badge" href="#">
                <span
                  class="badge badge-orange badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">高</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-with-badge" href="#">
                <span
                  class="badge badge-yellow badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">中</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-with-badge" href="#">
                <span
                  class="badge badge-gold badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">低</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">项目</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_proj_board"
          >
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="添加项目"
            >
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span> </span
          ></a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <div>
                <div class="media d-flex align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-primary avatar-rounded">
                      <span class="initial-wrap">J</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="name">caoba</div>
                    </div>
                  </div>
                </div>
                <div class="ms-auto">
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="lock"></feather-icon>
                      </span>
                    </span>
                  </button>
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="more-vertical"></feather-icon>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div>
                <div class="media d-flex align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-pink avatar-rounded">
                      <span class="initial-wrap">Cb</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="name">caoba</div>
                    </div>
                  </div>
                </div>
                <div class="ms-auto">
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="globe"></feather-icon>
                      </span>
                    </span>
                  </button>
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="more-vertical"></feather-icon>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="todoapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="设置"
              href="#"
            >
              <span class="icon"
                ><span class="feather-icon">
                  <feather-icon name="settings"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="归档"
            >
              <span class="icon"
                ><span class="feather-icon">
                  <feather-icon name="archive"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="帮助"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="book"></feather-icon>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script>
export default {
  name: "GanttSidebar",
  // Your component's logic goes here
};
</script>
