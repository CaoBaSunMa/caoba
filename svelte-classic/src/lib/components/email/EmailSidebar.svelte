<script>
// @ts-nocheck

    import { emailStore } from '$lib/stores/emailStore';
    import { onMount } from 'svelte';
    import { ArchiveIcon, BookIcon, EditIcon, InboxIcon, PlusIcon, SendIcon, SettingsIcon, StarIcon, Trash2Icon } from 'svelte-feather-icons';
  
    function composeNewEmail() {
      $emailStore.composeNewEmail(true);
    }
  
    onMount(() => {
      // Initialize Bootstrap tooltips
      import('bootstrap').then(({ Tooltip }) => {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
          new Tooltip(el);
        });
      });
    });
  </script>
  
  <nav class="emailapp-sidebar">
    <div class="menu-content-wrap" style="overflow-y: auto; max-height: 100%;">
      <button
        type="button"
        class="btn btn-primary btn-rounded btn-block mb-4 show-compose-popup"
        id="show_compose_popup"
        on:click={composeNewEmail}
      >
        写邮件
      </button>
      <div class="menu-group">
        <ul class="nav nav-light navbar-nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <InboxIcon />
                </span>
              </span>
              <span class="nav-link-text">收件箱</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <StarIcon />
                </span>
              </span>
              <span class="nav-link-text">重要</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <SendIcon />
                </span>
              </span>
              <span class="nav-link-text">已发送</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <ArchiveIcon />
                </span>
              </span>
              <span class="nav-link-text">归档</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <EditIcon />
                </span>
              </span>
              <span class="nav-link-text">草稿</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-icon-wrap">
                <span class="feather-icon">
                  <Trash2Icon />
                </span>
              </span>
              <span class="nav-link-text">回收站</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="separator separator-light"></div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="title-sm text-primary mb-0">分类</div>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-rounded btn-light"
          data-bs-toggle="modal"
          data-bs-target="#add_new_cat"
          data-bs-tooltip="tooltip"
          data-bs-placement="top"
          title="添加分类"
        >
          <span class="icon">
            <span class="feather-icon">
              <PlusIcon />
            </span>
          </span>
        </a>
      </div>
      <div class="menu-group">
        <ul class="nav nav-light navbar-nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="badge badge-primary badge-indicator badge-indicator-lg me-2"></span>
              <span class="nav-link-text">团队</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="badge badge-success badge-indicator badge-indicator-lg me-2"></span>
              <span class="nav-link-text">支持</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="badge badge-orange badge-indicator badge-indicator-lg me-2"></span>
              <span class="nav-link-text">更新</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="badge badge-pink badge-indicator badge-indicator-lg me-2"></span>
              <span class="nav-link-text">主要</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Sidebar Fixnav -->
    <div class="emailapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="设置"
            >
              <span class="icon">
                <span class="feather-icon">
                  <SettingsIcon />
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
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
          </li>
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="帮助"
            >
              <span class="icon">
                <span class="feather-icon">
                  <BookIcon />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  