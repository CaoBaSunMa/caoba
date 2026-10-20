<template>
  <nav class="fmapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BButton variant="primary" class="btn-rounded btn-block btn-file mb-4">
          上传
          <BFormFile class="upload" />
        </BButton>

        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" active>
              <span class="nav-icon-wrap">
                <feather-icon name="hard-drive"></feather-icon>
              </span>
              <span class="nav-link-text">我的空间</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="file"></feather-icon>
              </span>
              <span class="nav-link-text">所有文件</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="folder"></feather-icon>
              </span>
              <span class="nav-link-text">文件夹</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="upload"></feather-icon>
              </span>
              <span class="nav-link-text">共享</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">星标</span>
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
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="image"></feather-icon>
              </span>
              <span class="nav-link-text">图片</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="video"></feather-icon>
              </span>
              <span class="nav-link-text">视频</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="play"></feather-icon>
              </span>
              <span class="nav-link-text">音频</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="file-text"></feather-icon>
              </span>
              <span class="nav-link-text">文档</span>
            </BNavItem>
          </BNav>
        </div>
      </div>
    </simplebar>
    <div class="fmapp-storage">
      <p class="p-sm">
        存储空间已使用 85%。1 TB 中已使用 78.5 GB，您可以购买更多空间。
      </p>

      <label class="progress-label text-uppercase fs-8 fw-medium mt-2">
        已使用 78.5 GB / 共 1 TB
      </label>
      <BProgress
        variant="danger"
        :value="85"
        :max="100"
        class="progress-bar-rounded progress-bar-xs mb-2"
      />
      <a href="#" class="fs-7"><u>购买存储空间</u></a>
    </div>
    <!--Sidebar Fixnav-->
    <div class="fmapp-fixednav">
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
