<script>
// @ts-nocheck

    import { emailStore } from '$lib/stores/emailStore';
    import { layoutStore, layoutActions } from '$lib/stores/layout';
    import { onMount } from 'svelte';
    import { ArchiveIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ClockIcon, FlagIcon, FolderIcon, MoreVerticalIcon, PrinterIcon, Trash2Icon } from 'svelte-feather-icons';
  
    function backToContactList() {
      layoutActions.toggleTopNav();
      $emailStore.toggleOpenEmail();
    }

    function toggleHeader() {
      layoutActions.toggleTopNav();
    }
  
    onMount(() => {
      import('bootstrap').then(({ Tooltip, Dropdown }) => {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
          new Tooltip(el);
        });
        document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
          new Dropdown(el);
        });
      });
    });
  </script>
  
  <header class="email-header">
    <a
      id="back_email_list"
      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover back-user-list"
      href="#"
      onclick={backToContactList}
    >
      <span class="icon">
        <span class="feather-icon">
          <ChevronLeftIcon />
        </span>
      </span>
    </a>
    <div class="email-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="添加标记"
      >
        <span class="icon">
          <span class="feather-icon">
            <FlagIcon />
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="归档"
      >
        <span class="icon">
          <span class="feather-icon">
            <ArchiveIcon />
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="文件夹"
      >
        <span class="icon">
          <span class="feather-icon">
            <FolderIcon />
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="稍后提醒"
      >
        <span class="icon">
          <span class="feather-icon">
            <ClockIcon />
          </span>
        </span>
      </a>
      <div class="v-separator"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover ms-0"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="打印"
      >
        <span class="icon">
          <span class="feather-icon">
            <PrinterIcon />
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="删除"
      >
        <span class="icon">
          <span class="feather-icon">
            <Trash2Icon />
          </span>
        </span>
      </a>
    </div>
    <div class="email-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="上一封"
      >
        <span class="icon">
          <span class="feather-icon">
            <ChevronLeftIcon />
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover emailapp-info-toggle d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="下一封"
      >
        <span class="icon">
          <span class="feather-icon">
            <ChevronRightIcon />
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="icon">
          <span class="feather-icon">
            <MoreVerticalIcon />
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#">标为已读</a>
        <a class="dropdown-item" href="#">标为重要</a>
        <a class="dropdown-item" href="#">免打扰</a>
        <a class="dropdown-item" href="#">删除</a>
        <a class="dropdown-item" href="#">屏蔽联系人</a>
      </div>
      <a
        class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover hk-navbar-togglable"
        href="#"
        onclick={toggleHeader}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="收起"
      >
        <span class="icon">
          <span class="feather-icon">
            {#if $layoutStore.topNavCollapse}
              <ChevronDownIcon />
            {:else}
              <ChevronUpIcon />
            {/if}
          </span>
        </span>
      </a>
    </div>
  </header>
  
  