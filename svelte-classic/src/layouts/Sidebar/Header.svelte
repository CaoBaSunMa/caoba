<script>
  import { layoutStore, layoutActions } from "../../lib/stores/layout";
  //img
  import brandImg from "../../assets/img/brand-sm.svg";
  import caobaImg from "../../assets/img/caoba.svg";

  function toggleSidebar() {
    layoutActions.toggleSidebar();
  }
</script>

<div class="menu-header">
  <span>
    <a href="/" class="navbar-brand">
      <img class="brand-img img-fluid" src={brandImg} alt="品牌标识" />
      <img class="brand-img img-fluid" src={caobaImg} alt="品牌标识" />
    </a>
    <button
      class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle"
      aria-label="切换侧边栏"
      onclick={toggleSidebar}
    >
      <span class="icon">
        <span class="svg-icon fs-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-bar-to-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="10" y1="12" x2="20" y2="12"></line>
            <line x1="10" y1="12" x2="14" y2="16"></line>
            <line x1="10" y1="12" x2="14" y2="8"></line>
            <line x1="4" y1="4" x2="4" y2="20"></line>
          </svg>
        </span>
      </span>
    </button>
  </span>
</div>
