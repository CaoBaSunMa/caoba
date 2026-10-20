<template>
  <nav class="blogapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <NuxtLink
          to="/apps/blog/add-new-post"
          class="btn btn-primary btn-rounded btn-block mb-4"
        >
          新建文章
        </NuxtLink>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem to="/apps/blog/posts" active-class="active">
              <span class="nav-icon-wrap">
                <feather-icon name="users"></feather-icon>
              </span>
              <span class="nav-link-text">文章</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">已发布</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="archive"></feather-icon>
              </span>
              <span class="nav-link-text">已归档</span>
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
              <span class="nav-link-text">已删除</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>管理</span>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="flag"></feather-icon>
              </span>
              <span class="nav-link-text">管理文章</span>
            </BNavItem>

            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="grid"></feather-icon>
              </span>
              <span class="nav-link-text">管理分类</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="tag"></feather-icon>
              </span>
              <span class="nav-link-text">管理标签</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">分类</div>
          <BButton
            variant="light"
            size="xs"
            href="#"
            class="btn-icon btn-rounded"
            v-b-modal.add_new_cat
          >
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建分类"
            >
              <feather-icon name="plus"></feather-icon>
            </span>
          </BButton>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" class="link-badge-right">
              <span class="nav-link-text">设计</span>
              <HkBadge variant="soft-primary" class="ms-auto" sm pill>136</HkBadge>
            </BNavItem>
            <BNavItem href="#" class="link-badge-right">
              <span class="nav-link-text">开发</span>
              <HkBadge variant="soft-primary" class="ms-auto" sm pill>2</HkBadge>
            </BNavItem>
            <BNavItem href="#" class="link-badge-right">
              <span class="nav-link-text">用户界面</span>
              <HkBadge variant="soft-primary" class="ms-auto" sm pill>86</HkBadge>
            </BNavItem>
            <BNavItem href="#" class="link-badge-right">
              <span class="nav-link-text">商业</span>
              <HkBadge variant="soft-primary" class="ms-auto" sm pill>34</HkBadge>
            </BNavItem>
          </BNav>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="title-sm text-primary mb-0">标签</div>
          <BButton
            variant="light"
            size="xs"
            href="#"
            class="btn-icon btn-rounded"
            v-b-modal.add_new_tag
          >
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="添加标签"
            >
              <feather-icon name="plus"></feather-icon>
            </span>
          </BButton>
        </div>
        <div class="menu-group">
          <div class="tag-cloud">
            <HkBadge href="#" variant="light" outline>协作</HkBadge>
            <HkBadge href="#" variant="light" outline>React 开发</HkBadge>
            <HkBadge href="#" variant="light" outline>Angular 开发</HkBadge>
            <HkBadge href="#" variant="light" outline>促销</HkBadge>
            <HkBadge href="#" variant="light" outline>广告</HkBadge>
          </div>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="blogapp-fixednav">
      <div class="hk-toolbar">
        <BNav class="nav-light">
          <BNavItem href="#">
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
          <BNavItem href="#">
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
          <BNavItem href="#">
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