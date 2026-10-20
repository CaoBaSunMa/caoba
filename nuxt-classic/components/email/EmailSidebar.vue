<template>
  <nav class="emailapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BButton
          variant="primary"
          class="btn-rounded btn-block mb-4 show-compose-popup"
          id="show_compose_popup"
          @click="composeNewEmail"
        >
          写邮件
        </BButton>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" active>
              <span class="nav-icon-wrap">
                <feather-icon name="inbox"></feather-icon>
              </span>
              <span class="nav-link-text">收件箱</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">重要</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="send"></feather-icon>
              </span>
              <span class="nav-link-text">已发送</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="archive"></feather-icon>
              </span>
              <span class="nav-link-text">归档</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="edit"></feather-icon>
              </span>
              <span class="nav-link-text">草稿</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="trash-2"></feather-icon>
              </span>
              <span class="nav-link-text">回收站</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">分类</div>
          <BTooltip show target="add_cat">添加分类</BTooltip>
          <BButton
            id="add_cat"
            variant="light"
            size="xs"
            href="#"
            class="btn-icon btn-rounded"
            v-b-modal.add_new_cat
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </span>
          </BButton>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <HkBadge
                variant="primary"
                size="lg"
                indicator
                indicatorSize="lg"
                class="me-2"
              />
              <span class="nav-link-text">团队</span>
            </BNavItem>
            <BNavItem href="#">
              <HkBadge
                variant="success"
                size="lg"
                indicator
                indicatorSize="lg"
                class="me-2"
              />
              <span class="nav-link-text">支持</span>
            </BNavItem>
            <BNavItem href="#">
              <HkBadge
                variant="orange"
                size="lg"
                indicator
                indicatorSize="lg"
                class="me-2"
              />
              <span class="nav-link-text">更新</span>
            </BNavItem>
            <BNavItem href="#">
              <HkBadge
                variant="pink"
                size="lg"
                indicator
                indicatorSize="lg"
                class="me-2"
              />
              <span class="nav-link-text">主要</span>
            </BNavItem>
          </BNav>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="calendarapp-fixednav">
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

<script setup>
import { useEmailStore } from "@/stores/emailStore";

const emailStore = useEmailStore();
const composeNewEmail = () => {
  emailStore.composeNewEmail(true);
};
</script>
