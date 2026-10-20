<template>
  <nav class="galleryapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BButton variant="primary" class="btn-rounded btn-block btn-file mb-4">
          上传图片
          <BFormFile class="upload" />
        </BButton>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" active>
              <span class="nav-icon-wrap">
                <feather-icon name="hard-drive"></feather-icon>
              </span>
              <span class="nav-link-text">图库</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="folder"></feather-icon>
              </span>
              <span class="nav-link-text">合集</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="upload"></feather-icon>
              </span>
              <span class="nav-link-text">共享给我的</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">收藏</span>
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
            <BNavItem href="#">
              <span class="nav-link-text">图片</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-link-text">视频</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-link-text">音频</span>
            </BNavItem>
          </BNav>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="galleryapp-fixednav">
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

<script>
export default {
  name: "GallerySidebar",
  // Your component's logic goes here
};
</script>
