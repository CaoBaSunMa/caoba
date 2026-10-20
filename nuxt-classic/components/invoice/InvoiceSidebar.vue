<template>
  <nav class="invoiceapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <BDropdown
          variant="primary"
          toggle-class="btn-rounded btn-block mb-4"
          text="创建"
        >
          <BDropdownItem to="/apps/invoice/create-invoice">创建发票</BDropdownItem>
          <BDropdownItem href="#">创建估算单</BDropdownItem>
        </BDropdown>

        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#" active>
              <span class="nav-icon-wrap">
                <feather-icon name="users"></feather-icon>
              </span>
              <span class="nav-link-text">全部发票</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">已发送</span>
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
              <span class="nav-link-text">待处理</span>
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
                <feather-icon name="upload"></feather-icon>
              </span>
              <span class="nav-link-text">管理发票</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="download"></feather-icon>
              </span>
              <span class="nav-link-text">周期性发票</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="layers"></feather-icon>
              </span>
              <span class="nav-link-text">管理估算单</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="book"></feather-icon>
              </span>
              <span class="nav-link-text">管理联系人</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="save"></feather-icon>
              </span>
              <span class="nav-link-text">已保存模板</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>信息</span>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="users"></feather-icon>
              </span>
              <span class="nav-link-text">商家信息</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <feather-icon name="star"></feather-icon>
              </span>
              <span class="nav-link-text">税务信息</span>
            </BNavItem>
          </BNav>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="invoiceapp-fixednav">
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
