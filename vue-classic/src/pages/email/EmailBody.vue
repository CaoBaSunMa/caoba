<template>
  <div class="email-body">
    <simplebar class="nicescroll-bar">
      <template v-if="email">
        <div class="single-email-subject">
          <div>
            <h4 class="fw-light">{{ email.subject }}</h4>
            <span
              v-if="email.folder === 'ARCHIVE'"
              class="badge badge-orange badge-sm badge-pill flex-shrink-0 ms-3"
              >归档</span
            >
          </div>
          <div class="email-options-wrap">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              href="#"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="打印"
              data-bs-original-title="打印"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="printer"></feather-icon>
                </span>
              </span>
            </a>
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              href="#"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="回复"
              data-bs-original-title="回复"
              @click="openCompose"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="corner-up-left"></feather-icon>
                </span>
              </span>
            </a>
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              href="#"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="转发"
              data-bs-original-title="转发"
              @click="openCompose"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="arrow-right"></feather-icon>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div
          id="accordionSimpleExample"
          class="accordion accordion-simple single-email-thread"
        >
          <div class="accordion-item">
            <div class="accordion-header">
              <div>
                <div class="email-head">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-soft-primary avatar-rounded d-8">
                        <span class="initial-wrap">{{
                          (email.fromAddress || "邮")[0].toUpperCase()
                        }}</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div>{{ email.fromAddress }}</div>
                      <div class="fs-7">
                        <span>发给</span>
                        <div class="mail-desc-dropdown">
                          <a
                            href="#"
                            class="dropdown-toggle link-dark ms-1"
                            data-bs-toggle="dropdown"
                            >我</a
                          >
                          <div class="dropdown-menu">
                            <div>
                              <span>发件人：</span
                              ><span>{{ email.fromAddress }}</span>
                            </div>
                            <div>
                              <span>日期：</span><span>{{ email.createdAt }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="email-head-action">
                    <div class="email-time">{{ formatTime(email.createdAt) }}</div>
                    <span
                      :class="['email-star', { marked: email.starred }]"
                      @click.stop.prevent="toggleStar"
                    >
                      <feather-icon name="star"></feather-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-collapse collapse show">
              <div class="accordion-body">
                <p>{{ email.body }}</p>
                <p class="mt-3 mb-4">此致，<br />caoba 团队</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div v-else class="start-conversation text-center mt-5">
        <i class="ri-mail-open-line fs-1 text-muted"></i>
        <p class="mb-0 mt-2 text-muted">选择一封邮件查看详情</p>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { useEmailStore } from "@/stores/emailStore";

export default {
  name: "EmailBody",
  setup() {
    const emailStore = useEmailStore();
    return { emailStore };
  },
  computed: {
    email() {
      return this.emailStore.selectedEmail;
    },
  },
  methods: {
    formatTime(t) {
      if (!t) return "";
      const d = new Date(t);
      if (isNaN(d.getTime())) return String(t);
      const now = new Date();
      if (d.toDateString() === now.toDateString()) {
        return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
      }
      return (d.getMonth() + 1) + "月" + d.getDate() + "日";
    },
    openCompose() {
      this.emailStore.composeNewEmail(true);
    },
    toggleStar() {
      if (this.email) this.emailStore.markStar(this.email.id);
    },
  },
};
</script>
