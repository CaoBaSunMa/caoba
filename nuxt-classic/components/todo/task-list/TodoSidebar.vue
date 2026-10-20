<template>
  <nav class="todoapp-sidebar">
    <div data-simplebar class="nicescroll-bar">
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
                <feather-icon name="layout"></feather-icon>
              </span>
              <span class="nav-link-text">概览</span>
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
      </div>
    </div>
    <!--Sidebar Fixnav-->
    <div class="todoapp-fixednav">
      <div class="hk-toolbar">
        <BNav class="nav-light">
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              v-b-tooltip="'设置'"
              href="#"
            >
              <span class="icon">
                <feather-icon name="settings"></feather-icon>
              </span>
            </BButton>
          </BNavItem>
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              href="#"
              v-b-tooltip="'归档'"
            >
              <span class="icon">
                <feather-icon name="archive"></feather-icon>
              </span>
            </BButton>
          </BNavItem>
          <BNavItem>
            <BButton
              variant="flush-dark"
              class="btn-icon btn-rounded flush-soft-hover"
              href="#"
              v-b-tooltip="'帮助'"
            >
              <span class="icon">
                <feather-icon name="book"></feather-icon>
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
