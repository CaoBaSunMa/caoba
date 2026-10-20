<template>
  <div class="hk-menu">
    <!-- Brand -->
    <SidebarHeader />
    <!-- Main Menu -->
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <div v-for="(routes, index) in SidebarMenu" :key="index">
          <div class="menu-group">
            <div v-if="routes.group" class="nav-header">
              <span>{{ routes.group }}</span>
            </div>
            <nav class="navbar-nav flex-column">
              <div
                v-for="(menus, idx) in routes.contents"
                :key="idx"
                :class="{ active: isActive(menus.path) }"
                class="nav-item"
              >
                <template v-if="menus.childrens">
                  <a
                    class="nav-link"
                    @click="toggleMenu(menus.name)"
                    :aria-expanded="activeMenu === menus.name"
                    href="#"
                  >
                    <span
                      :class="['nav-icon-wrap', { 'position-relative': menus.iconBadge }]"
                    >
                      <component
                        v-if="menus.iconBadge"
                        :is="menus.iconBadge.component"
                        v-bind="menus.iconBadge.props"
                        >{{ menus.iconBadge.text }}</component
                      >
                      <span class="svg-icon">
                        <component :is="menus.icon" stroke-width="2" />
                      </span>
                    </span>
                    <span
                      :class="[
                        'nav-link-text',
                        { 'position-relative': menus.badgeIndicator },
                      ]"
                    >
                      {{ menus.name }}
                      <component
                        v-if="menus.badgeIndicator"
                        :is="menus.badgeIndicator.component"
                        v-bind="menus.badgeIndicator.props"
                      />
                    </span>
                    <component
                      v-if="menus.badge"
                      :is="menus.badge.component"
                      v-bind="menus.badge.props"
                      >{{ menus.badge.text }}</component
                    >
                  </a>
                  <ul
                    :id="menus.id"
                    :class="[
                      'nav flex-column nav-children',
                      { collapse: activeMenu !== menus.name },
                    ]"
                  >
                    <li class="nav-item">
                      <ul class="nav flex-column">
                        <li
                          v-for="(subMenu, indx) in menus.childrens"
                          :key="indx"
                          class="nav-item"
                        >
                          <template v-if="subMenu.childrens">
                            <a
                              class="nav-link"
                              @click="toggleSubMenu(subMenu.name)"
                              href="#"
                            >
                              <span class="nav-link-text">{{ subMenu.name }}</span>
                            </a>
                            <ul
                              :id="subMenu.id"
                              :class="[
                                'nav flex-column nav-children',
                                { collapse: activeSubMenu !== subMenu.name },
                              ]"
                            >
                              <li
                                v-for="(childrenPath, i) in subMenu.childrens"
                                :key="i"
                                class="nav-item"
                              >
                                <router-link
                                  :to="childrenPath.path"
                                  class="nav-link"
                                  :class="{ active: isActive(childrenPath.path) }"
                                >
                                  <span class="nav-link-text">{{
                                    childrenPath.name
                                  }}</span>
                                </router-link>
                              </li>
                            </ul>
                          </template>
                          <router-link
                            v-else
                            :to="subMenu.path"
                            class="nav-link"
                            :class="{ active: isActive(subMenu.path) }"
                            @click="toggleMenu(menus.name)"
                          >
                            <span class="nav-link-text">{{ subMenu.name }}</span>
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <a
                    v-if="routes.group === '文档'"
                    :href="menus.path"
                    class="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="nav-icon-wrap">
                      <span class="svg-icon">
                        <component :is="menus.icon" stroke-width="2" />
                      </span>
                    </span>
                    <span class="nav-link-text">{{ menus.name }}</span>
                  </a>
                  <router-link
                    v-else
                    :to="menus.path"
                    class="nav-link"
                    :class="{ active: isActive(menus.path) }"
                    @click="handleClick(menus.name)"
                  >
                    <span class="nav-icon-wrap">
                      <span class="svg-icon">
                        <component :is="menus.icon" stroke-width="2" />
                      </span>
                    </span>
                    <span class="nav-link-text">{{ menus.name }}</span>
                    <component
                      v-if="menus.badge"
                      :is="menus.badge.component"
                      v-bind="menus.badge.props"
                      >{{ menus.badge.text }}</component
                    >
                  </router-link>
                </template>
              </div>
            </nav>
          </div>
          <div class="menu-gap" />
        </div>
        <div class="callout card card-flush bg-orange-light-5 text-center w-220p mx-auto">
          <div class="card-body">
            <h5 class="h5">快速构建应用</h5>
            <p class="p-sm card-text">专为基于 Bootstrap 的 Web 应用打造</p>
            <a
              href="https://nubra-ui.caoba.com/"
              target="_blank"
              class="btn btn-primary btn-block"
              >访问 Nubra-UI</a
            >
          </div>
        </div>
      </div>
    </simplebar>
    <!-- /Main Menu -->
  </div>
  <div @click="toggleSidebar" class="hk-menu-backdrop" />
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import SidebarHeader from "./header.vue";
import { SidebarMenu } from "./sidebarMenu";
import { useLayoutStore } from "@/stores/layout";

export default {
  components: {
    SidebarHeader,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const router = useRouter();
    const activeMenu = ref("");
    const activeSubMenu = ref("");
    const pathname = ref(router.currentRoute.value.path);

    const handleClick = (menuName) => {
      activeMenu.value = menuName;
    };

    const toggleMenu = (menuName) => {
      activeMenu.value = activeMenu.value === menuName ? "" : menuName;
    };

    const toggleSubMenu = (subMenuName) => {
      activeSubMenu.value = activeSubMenu.value === subMenuName ? "" : subMenuName;
    };

    const toggleSidebar = () => {
      layoutStore.toggleSidebar();
    };

    const isActive = (path) => pathname.value.startsWith(path);

    router.afterEach((to) => {
      pathname.value = to.path;
    });

    return {
      SidebarMenu,
      activeMenu,
      activeSubMenu,
      handleClick,
      toggleMenu,
      toggleSubMenu,
      toggleSidebar,
      isActive,
    };
  },
};
</script>
