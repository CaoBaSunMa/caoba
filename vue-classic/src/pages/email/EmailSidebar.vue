<template>
  <nav class="emailapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          type="button"
          class="btn btn-primary btn-rounded btn-block mb-4 show-compose-popup"
          id="show_compose_popup"
          @click="composeNewEmail"
        >
          写邮件
        </button>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" v-for="f in folders" :key="f.key">
              <a
                class="nav-link"
                :class="{ active: emailStore.currentFolder === f.key }"
                href="javascript:void(0);"
                @click="setFolder(f.key)"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon :name="folderIcon(f.key)"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">{{ f.label }}</span>
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
          >
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="添加分类"
            >
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span
                  class="badge badge-primary badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">团队</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span
                  class="badge badge-success badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">支持</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span
                  class="badge badge-orange badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">更新</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span
                  class="badge badge-pink badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">主要</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="emailapp-fixednav">
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
              data-bs-original-title="归档"
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
import { useEmailStore } from "@/stores/emailStore";

const FOLDER_MAP = [
  { key: 'INBOX', label: '收件箱' },
  { key: 'STARRED', label: '重要' },
  { key: 'SENT', label: '已发送' },
  { key: 'ARCHIVE', label: '归档' },
  { key: 'DRAFTS', label: '草稿' },
  { key: 'TRASH', label: '回收站' },
];

export default {
  name: "EmailSidebar",
  data() {
    return { folders: FOLDER_MAP };
  },
  setup() {
    const emailStore = useEmailStore();
    const composeNewEmail = () => {
      emailStore.composeNewEmail(true);
    };
    return { emailStore, composeNewEmail };
  },
  methods: {
    folderIcon(key) {
      return { INBOX: 'inbox', STARRED: 'star', SENT: 'send', ARCHIVE: 'archive', DRAFTS: 'edit', TRASH: 'trash-2' }[key] || 'inbox';
    },
    setFolder(folder, ev) {
      if (ev && ev.preventDefault) ev.preventDefault();
      let key = folder;
      if (folder === 'STARRED') {
        // 重要 = 星标邮件（从收件箱过滤）
        key = 'INBOX';
      }
      this.emailStore.fetchEmails(key);
    },
  },
};
</script>
