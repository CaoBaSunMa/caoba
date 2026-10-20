<template>
  <nav class="integrationsapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem to="/apps/integrations/integration" active-class="active">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="box"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">集成</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="refresh-cw"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">更新</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>浏览</span>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem to="/apps/integrations/all-apps" active-class="active">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="grid"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">所有应用</span>
            </BNavItem>
            <BNavItem href="#" active-class="active">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="heart"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">热门</span>
            </BNavItem>
            <BNavItem to="/apps/integrations/app-detail" active-class="active">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="zap"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">新应用</span>
            </BNavItem>
            <BNavItem href="#" active-class="active">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="check-square"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">为你推荐</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="git-branch"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">开发者工具</span>
            </BNavItem>
          </BNav>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>分类</span>
        </div>
        <div class="menu-group">
          <BNav class="nav-light navbar-nav flex-column">
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="pen-tool"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">设计</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="github"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">营销</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="code"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">技术</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="zap"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">API</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="tool"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">SEO 工具</span>
            </BNavItem>
            <BNavItem href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <feather-icon name="briefcase"></feather-icon>
                </span>
              </span>
              <span class="nav-link-text">管理</span>
            </BNavItem>
          </BNav>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="integrationsapp-fixednav">
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
              v-b-tooltip="'存档'"
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
