<script>
  // @ts-nocheck
  import { onDestroy, onMount } from "svelte";
  import { page } from "$app/stores";
  import { SidebarMenu } from "./sidebarMenu.js";
  import Header from "./Header.svelte";
  // import SidebarHeader from './SidebarHeader.svelte';
  import { layoutStore, layoutActions } from "../../lib/stores/layout";
  import HkScrollbar from "../../hk-components/@hk-scrollbar/HkScrollbar.svelte";

  let activeMenu = "";
  let activeSubMenu = "";

  const handleClick = (menuName) => {
    activeMenu = menuName;
  };

  const toggleMenu = (menuName) => {
    activeMenu = activeMenu === menuName ? "" : menuName;
  };

  const toggleSubMenu = (subMenuName) => {
    activeSubMenu = activeSubMenu === subMenuName ? "" : subMenuName;
  };

  let unsubscribeLayout;


  function toggleSidebar() {
    layoutActions.toggleSidebar();
  }
</script>

<div class="hk-menu">
  <!-- <SidebarHeader /> -->
  <Header />
  <HkScrollbar class="nicescroll-bar">
    <div class="menu-content-wrap">
      {#each SidebarMenu as routes, index}
        <div class="menu-group">
          {#if routes.group}
            <div class="nav-header"><span>{routes.group}</span></div>
          {/if}
          <nav class="navbar-nav flex-column">
            {#each routes.contents as menus, idx}
              <div
                class="nav-item"
                class:active={$page.url.pathname.startsWith(menus.path)}
                key={idx}
              >
                {#if menus.childrens}
                  <a
                    href="#"
                    class="nav-link"
                    aria-expanded={activeMenu === menus.name}
                    aria-label={menus.name}
                    on:click={() => toggleMenu(menus.name)}
                  >
                    <span class="nav-icon-wrap">
                      {#if menus.icon}
                        <menus.icon stroke-width="2" />
                      {/if}
                    </span>
                    <span class="nav-link-text">{menus.name}</span>
                  </a>
                  <ul
                    class="nav flex-column nav-children"
                    class:collapse={activeMenu !== menus.name}
                  >
                    {#each menus.childrens as subMenu, indx}
                      <li class="nav-item">
                        {#if subMenu.childrens}
                          <a
                            href="#"
                            class="nav-link"
                            on:click={() => toggleSubMenu(subMenu.name)}
                          >
                            <span class="nav-link-text">{subMenu.name}</span>
                          </a>
                          <ul
                            class="nav flex-column nav-children"
                            class:collapse={activeSubMenu !== subMenu.name}
                          >
                            {#each subMenu.childrens as childrenPath, i}
                              <li class="nav-item">
                                <a
                                  href={childrenPath.path}
                                  class="nav-link"
                                  class:active={$page.url.pathname.startsWith(
                                    childrenPath.path
                                  )}
                                >
                                  <span class="nav-link-text"
                                    >{childrenPath.name}</span
                                  >
                                </a>
                              </li>
                            {/each}
                          </ul>
                        {:else}
                          <a
                            href={subMenu.path}
                            class="nav-link"
                            class:active={$page.url.pathname.startsWith(
                              subMenu.path
                            )}
                            on:click={() => toggleMenu(menus.name)}
                          >
                            <span class="nav-link-text">{subMenu.name}</span>
                          </a>
                        {/if}
                      </li>
                    {/each}
                  </ul>
                {:else}
                  <a
                    href={menus.path}
                    class="nav-link"
                    class:active={$page.url.pathname.startsWith(menus.path)}
                    on:click={() => handleClick(menus.name)}
                  >
                    <span class="nav-icon-wrap">
                      {#if menus.icon}
                        <menus.icon stroke-width="2" />
                      {/if}
                    </span>
                    <span class="nav-link-text">{menus.name}</span>
                  </a>
                {/if}
              </div>
            {/each}
          </nav>
        </div>
        <div class="menu-gap"></div>
      {/each}
      <div
        class="callout card card-flush bg-orange-light-5 text-center w-220p mx-auto"
      >
        <div class="card-body">
          <h5 class="h5">快速构建应用</h5>
          <p class="p-sm card-text">
            专为基于 Bootstrap 的 Web 应用打造
          </p>
          <a
            href="https://caoba.caoba.com/documentation/introduction"
            target="_blank"
            class="btn btn-primary btn-block">前往 caoba 文档</a
          >
        </div>
      </div>
    </div>
  </HkScrollbar>
</div>
<div class="hk-menu-backdrop" on:click={toggleSidebar}></div>
