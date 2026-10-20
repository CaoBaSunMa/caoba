<template>
  <nav class="todoapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BButton
          variant="primary"
          class="btn-rounded btn-block mb-4"
          v-b-modal.add_new_task
        >
          添加任务
        </BButton>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" active>
              <span class="nav-icon-wrap">
                <feather-icon name="git-pull-request"></feather-icon>
              </span>
              <span class="nav-link-text">甘特图</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="list"></feather-icon>
              </span>
              <span class="nav-link-text">我的任务</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="calendar"></feather-icon>
              </span>
              <span class="nav-link-text">文件</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="file"></feather-icon>
              </span>
              <span class="nav-link-text">动态</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="title-sm text-primary">优先级</div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <HkBadge variant="danger" indicator indicatorSize="lg" class="me-2" />
              <span class="nav-link-text">紧急</span>
            </BNavItem>
            <BNavItem href="#">
              <HkBadge variant="orange" indicator indicatorSize="lg" class="me-2" />
              <span class="nav-link-text">高</span>
            </BNavItem>
            <BNavItem href="#">
              <HkBadge variant="yellow" indicator indicatorSize="lg" class="me-2" />
              <span class="nav-link-text">中</span>
            </BNavItem>
            <BNavItem href="#">
              <HkBadge variant="gold" indicator indicatorSize="lg" class="me-2" />
              <span class="nav-link-text">低</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">项目</div>
          <BButton
            variant="light"
            size="xs"
            href="#"
            class="btn-icon btn-rounded btn-light"
            v-b-modal.add_proj_board
          >
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="添加项目"
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
          </BNav>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="todoapp-fixednav">
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

<script setup></script>
