<template>
  <nav class="integrationsapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <router-link
                activeClass="active"
                class="nav-link"
                to="/apps/integrations/integration"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="box"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">集成</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="refresh-cw"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">更新</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>浏览</span>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item active">
              <router-link
                activeClass="active"
                class="nav-link"
                to="/apps/integrations/all-apps"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="grid"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">所有应用</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="heart"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">热门</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link
                activeClass="active"
                class="nav-link"
                to="/apps/integrations/app-detail"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="zap"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">新应用</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="check-square"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">为你推荐</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="git-branch"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">开发者工具</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>分类</span>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" :class="{ active: activeCategory === '设计' }">
              <a class="nav-link" href="javascript:void(0);" @click="$emit('setCategory', '设计')">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="pen-tool"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">设计</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: activeCategory === '营销' }">
              <a class="nav-link" href="javascript:void(0);" @click="$emit('setCategory', '营销')">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="github"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">营销</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: activeCategory === '技术' }">
              <a class="nav-link" href="javascript:void(0);" @click="$emit('setCategory', '技术')">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="code"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">技术</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: activeCategory === 'API' }">
              <a class="nav-link" href="javascript:void(0);" @click="$emit('setCategory', 'API')">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="zap"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">API</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: activeCategory === 'SEO 工具' }">
              <a class="nav-link" href="javascript:void(0);" @click="$emit('setCategory', 'SEO 工具')">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="tool"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">SEO 工具</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: activeCategory === '管理' }">
              <a class="nav-link" href="javascript:void(0);" @click="$emit('setCategory', '管理')">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="briefcase"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">管理</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="integrationsapp-fixednav">
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
              <span class="icon">
                <span class="feather-icon">
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
              data-bs-original-title="存档"
            >
              <span class="icon">
                <span class="feather-icon">
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
  name: "AppSidebar",
  props: {
    activeCategory: {
      type: String,
      default: null,
    },
  },
  emits: ["setCategory"],
};
</script>
