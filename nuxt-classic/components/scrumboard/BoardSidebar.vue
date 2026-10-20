<template>
  <nav class="taskboardapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BButton
          variant="primary"
          class="btn-rounded btn-block mb-4"
          v-b-modal.add_new_board
        >
          新建看板
        </BButton>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" active>
              <span class="nav-icon-wrap">
                <feather-icon name="layout"></feather-icon>
              </span>
              <span class="nav-link-text">所有看板</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">星标看板</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="lock"></feather-icon>
              </span>
              <span class="nav-link-text">私有看板</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="user-check"></feather-icon>
              </span>
              <span class="nav-link-text">公开看板</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="trash-2"></feather-icon>
              </span>
              <span class="nav-link-text">已删除</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">收藏看板</div>
          <BButton
            variant="light"
            size="xs"
            href="#"
            class="btn-icon btn-rounded"
            v-b-modal.add_fav_board
          >
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建看板"
            >
              <feather-icon name="plus"></feather-icon>
            </span>
          </BButton>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem>
              <template #default>
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
                  <BButton
                    variant="flush-light"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                  >
                    <span class="icon">
                      <feather-icon name="lock"></feather-icon>
                    </span>
                  </BButton>
                  <BButton
                    variant="flush-light"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                  >
                    <span class="icon">
                      <feather-icon name="more-vertical"></feather-icon>
                    </span>
                  </BButton>
                </div>
              </template>
            </BNavItem>
            <BNavItem>
              <template #default>
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
                  <BButton
                    variant="flush-light"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                  >
                    <span class="icon">
                      <feather-icon name="globe"></feather-icon>
                    </span>
                  </BButton>
                  <BButton
                    variant="flush-light"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                  >
                    <span class="icon">
                      <feather-icon name="more-vertical"></feather-icon>
                    </span>
                  </BButton>
                </div>
              </template>
            </BNavItem>
          </BNav>
        </div>
        <BAlert :model-value="true" variant="warning" class="mt-5">
          <h6 class="heading-wth-icon alert-heading">
            <span class="head-icon">
              <span class="feather-icon">
                <feather-icon name="zap-off"></feather-icon>
              </span>
            </span>
            试用期于 1 月 14 日结束
          </h6>
          <p class="fs-7">
            您的试用期仅剩最后 3 天，请立即续订以保持连接。
          </p>
        </BAlert>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="taskboardapp-fixednav">
      <div class="hk-toolbar">
        <BNav class="nav-light">
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="设置"
              href="#"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="settings"></feather-icon>
                </span>
              </span>
            </BButton>
          </BNavItem>
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="归档"
              href="#"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="archive"></feather-icon>
                </span>
              </span>
            </BButton>
          </BNavItem>
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="帮助"
              href="#"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="book"></feather-icon>
                </span>
              </span>
            </BButton>
          </BNavItem>
        </BNav>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script>
import { BButton } from "bootstrap-vue-next";

export default {
  name: "BoardSidebar",
};
</script>
