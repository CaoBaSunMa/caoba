<template>
  <div class="emailapp-aside">
    <header class="aside-header">
      <a
        class="emailapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>收件箱</h1>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="inbox"></feather-icon>
          </span>
          <span>收件箱</span>
        </a>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="send"></feather-icon>
          </span>
          <span>已发送</span>
        </a>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>归档</span>
        </a>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="edit"></feather-icon>
          </span>
          <span>草稿</span>
        </a>
        <a class="dropdown-item" href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
          <span>回收站</span>
        </a>
      </div>
      <div class="d-flex">
        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover me-0" href="#">
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="refresh-cw"></feather-icon>
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
              <feather-icon name="settings"></feather-icon>
            </span>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="mail"></feather-icon>
            </span>
            <span>显示未读邮件</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="star"></feather-icon>
            </span>
            <span>显示星标邮件</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="calendar"></feather-icon>
            </span>
            <span>按日期排序</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="layout"></feather-icon>
            </span>
            <span>按分类排序</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="check"></feather-icon>
            </span>
            <span>全部标为已读</span>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">设置</a>
          <a class="dropdown-item" href="#">帮助</a>
          <a class="dropdown-item" href="#">反馈问题 </a>
        </div>
        <a href="#" class="btn btn-icon btn-rounded show-compose-popup btn-primary"
          ><span class="icon" @click="composeNewEmail">
            <span class="feather-icon">
              <feather-icon name="edit"></feather-icon>
            </span>
          </span>
        </a>
      </div>
      <div
        :class="['hk-sidebar-togglable', { active: !showSidebar }]"
        @click="toggleSidebar"
      ></div>
    </header>
    <simplebar class="aside-body">
      <form class="aside-search" role="search">
        <input type="text" class="form-control" placeholder="搜索收件箱" v-model="searchValue" />
      </form>
      <ul v-if="emailStore.emails.length" class="email-list list-group list-group-flush">
        <li
          v-for="(mail, index) in paginatedEmails"
          :key="mail.id"
          class="list-group-item"
          @click="conversation(mail)"
        >
          <div :class="['media', { 'read-email': mail.read }]">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-soft-primary avatar-rounded">
                <span class="initial-wrap">{{ (mail.fromAddress || '邮')[0].toUpperCase() }}</span>
              </div>
              <span
                v-if="!mail.read"
                class="badge badge-primary badge-indicator badge-indicator-nobdr"
              ></span>
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">{{ mail.fromAddress }}</div>
                  <div>
                    <span :class="['email-star', { marked: mail.starred }]">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">{{ formatTime(mail.createdAt) }}</div>
                  </div>
                </div>
                <div class="email-subject">{{ mail.subject }}</div>
                <div class="email-text">
                  <p>{{ mail.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 分页 -->
      <div v-if="totalPages > 1" class="d-flex justify-content-between align-items-center px-3 py-2 border-top">
        <span class="text-muted fs-8">第 {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, filteredEmails.length) }} 条 / 共 {{ filteredEmails.length }} 条</span>
        <nav>
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
              <a class="page-link" href="javascript:void(0);" @click="goToPage(currentPage - 1)">上一页</a>
            </li>
            <li v-for="p in totalPages" :key="p" class="page-item" :class="{ active: p === currentPage }">
              <a class="page-link" href="javascript:void(0);" @click="goToPage(p)">{{ p }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
              <a class="page-link" href="javascript:void(0);" @click="goToPage(currentPage + 1)">下一页</a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-else class="p-4 text-center text-muted">
        <i class="ri-inbox-line fs-2"></i>
        <p class="mb-0 mt-2">{{ emailStore.loading ? '加载中...' : '暂无邮件' }}</p>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useEmailStore } from "@/stores/emailStore";
import { useLayoutStore } from "@/stores/layout";

export default {
  props: {
    showSidebar: Boolean,
  },

  setup() {
    const emailStore = useEmailStore();
    const layoutStore = useLayoutStore();
    const searchValue = ref("");
    const currentPage = ref(1);
    const pageSize = ref(15);

    onMounted(() => {
      emailStore.fetchEmails(emailStore.currentFolder);
    });

    const filteredEmails = computed(() => {
      const list = emailStore.emails;
      if (searchValue.value.length > 1) {
        return list.filter(
          (m) =>
            (m.subject || "").toLowerCase().includes(searchValue.value.toLowerCase()) ||
            (m.fromAddress || "").toLowerCase().includes(searchValue.value.toLowerCase())
        );
      }
      return list;
    });

    const paginatedEmails = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      return filteredEmails.value.slice(start, start + pageSize.value);
    });

    const totalPages = computed(() => Math.ceil(filteredEmails.value.length / pageSize.value));

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const composeNewEmail = () => {
      emailStore.composeNewEmail(true);
    };

    const formatTime = (t) => {
      if (!t) return "";
      const d = new Date(t);
      if (isNaN(d.getTime())) return String(t);
      const now = new Date();
      if (d.toDateString() === now.toDateString()) {
        return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
      }
      const days = Math.floor((now - d) / 86400000);
      if (days === 1) return "昨天";
      if (days < 7) return days + "天前";
      return (d.getMonth() + 1) + "月" + d.getDate() + "日";
    };

    const conversation = async (mail) => {
      if (mail) {
        await emailStore.selectEmail(mail.id);
      }
      if (window.innerWidth <= 991) {
        emailStore.toggleOpenEmail();
        layoutStore.toggleTopNav();
      }
    };

    return {
      emailStore,
      composeNewEmail,
      filteredEmails,
      paginatedEmails,
      totalPages,
      currentPage,
      pageSize,
      goToPage,
      formatTime,
      conversation,
      searchValue,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>
