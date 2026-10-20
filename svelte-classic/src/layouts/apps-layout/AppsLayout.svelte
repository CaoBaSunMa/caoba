<script>
  import { onMount, onDestroy } from "svelte";
  import { layoutStore, layoutActions } from "../../lib/stores/layout";
  import { emailStore } from '$lib/stores/emailStore';
  import { page } from "$app/stores";
  import Header from "../Header/Header.svelte";
  import Sidebar from "../Sidebar/Sidebar.svelte";
  import PageFooter from "../Footer/PageFooter.svelte"

  import "../../styles/scss/style.scss";
  

  // Reactive route path
  $: pathName = $page.url.pathname;
  // Check if route matches "/apps/*"
  $: appRoutes = pathName.includes('/apps/');
  // Check if route matches "/error-404"
  $: errorRoute = pathName.includes('/error-404');
  

  // Update sidebar state based on route and window width
  function updateSidebarState() {
    const isAppGroupPage = appRoutes;
    if (isAppGroupPage && window.innerWidth >= 1200) {
      layoutActions.collapseSidebar();
    } else {
      layoutActions.expandSidebar();
    }
  }

  // Watch layoutStore.isSidebarCollapsed and update dataHover
  $: if ($layoutStore.isSidebarCollapsed) {
    setTimeout(() => {
      layoutActions.setDataHover($layoutStore.isSidebarCollapsed);
    }, 250);
  }

  // Handle window resize
  function handleResize() {
    updateSidebarState();
  }

  // Set up resize listener and initial state
  onMount(() => {
    window.addEventListener('resize', handleResize);
    updateSidebarState();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div
  class="hk-wrapper"
  class:hk__email__backdrop={$emailStore.maximize}
  class:hk-pg-auth={errorRoute}
  data-layout="vertical"
  data-navbar-style={$layoutStore.topNavCollapse ? 'collapsed' : ''}
  data-layout-style={$layoutStore.isSidebarCollapsed ? 'collapsed' : 'default'}
  data-hover={$layoutStore.dataHover ? 'active' : ''}
  data-menu="light"
  data-footer="simple"
>
  <Header />
  <Sidebar />
  <div class="hk-pg-wrapper" class:pb-0={appRoutes}>
    <slot />
    {#if !appRoutes}
      <PageFooter />
    {/if}
  </div>
</div>