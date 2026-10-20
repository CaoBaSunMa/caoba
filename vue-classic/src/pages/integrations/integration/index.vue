<template>
  <IntegrationHeader :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
  <div class="integrations-body">
    <simplebar class="nicescroll-bar">
      <div class="container mt-md-7 mt-3">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h5 class="mb-0">已连接的应用</h5>
            <p class="m-0 text-muted">{{ connectedCount }} / {{ apps.length }} 已连接</p>
          </div>
        </div>

        <div v-if="store.loading && !apps.length" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
        </div>
        <div v-else-if="!apps.length" class="text-center py-5 text-secondary">
          <i class="ri-apps-2-line fs-1"></i>
          <p class="mt-2 mb-0">暂无应用</p>
        </div>

        <div v-else class="row">
          <div
            v-for="app in apps"
            :key="app.id"
            class="col-xxl-3 col-xl-4 col-md-6"
          >
            <div class="card card-border card-int mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <div
                    :class="['avatar avatar-sm mb-3 avatar-logo', app.img[0]?.variant]"
                  >
                    <span
                      v-if="app.img[0]?.type === 'symbol'"
                      :class="['initial-wrap', app.img[0]?.bg]"
                    >
                      <img :src="app.img[0]?.src" :alt="app.img[0]?.type" />
                    </span>
                    <img
                      v-if="app.img[0]?.type === 'logo'"
                      :src="app.img[0]?.src"
                      class="avatar-img"
                      :alt="app.img[0]?.type"
                    />
                    <span
                      v-if="app.img[0]?.type === 'initAvt'"
                      :class="['initial-wrap', app.img[0]?.bg]"
                      >{{ app.img[0]?.title }}</span
                    >
                  </div>
                  <a
                    v-if="app.integrated"
                    href="javascript:void(0);"
                    class="btn btn-block btn-primary flex-grow-0 flex-shrink-0 flex-basis-0"
                    @click="disconnect(app)"
                    >已连接</a
                  >
                  <a
                    v-else
                    href="javascript:void(0);"
                    class="btn btn-block btn-outline-secondary flex-grow-0 flex-shrink-0 flex-basis-0"
                    @click="connect(app)"
                    >连接</a
                  >
                </div>
                <div class="app-name">{{ app.name }}</div>
                <p class="p-sm multine-ellipsis">{{ app.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import IntegrationHeader from "./IntegrationHeader.vue";
import { useIntegrationStore } from "@/stores/integrationStore";

const AVATAR_BG = [
  "bg-soft-primary",
  "bg-soft-success",
  "bg-soft-warning",
  "bg-soft-info",
  "bg-soft-danger",
  "bg-soft-violet",
];

export default {
  name: "Integration",
  components: {
    IntegrationHeader,
  },
  props: {
    showSidebar: Boolean,
  },
  emits: ["toggle-sidebar"],
  setup() {
    const store = useIntegrationStore();
    return { store };
  },
  computed: {
    apps() {
      return this.store.integrations.map((it, i) => ({
        id: it.id,
        name: it.appName,
        category: it.category || "未分类",
        details:
          it.status === "CONNECTED"
            ? `已连接 · 同步正常（上次连接 ${this.fmtTime(it.connectedAt)}）`
            : `未连接 · 点击连接以启用 ${it.appName} 集成`,
        integrated: it.status === "CONNECTED",
        img: [
          {
            type: "initAvt",
            title: (it.appName || "?").charAt(0).toUpperCase(),
            bg: AVATAR_BG[i % AVATAR_BG.length],
          },
        ],
      }));
    },
    connectedCount() {
      return this.apps.filter((a) => a.integrated).length;
    },
  },
  mounted() {
    this.refresh();
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    refresh() {
      if (!this.store.integrations.length) {
        this.store.fetchIntegrations();
      }
    },
    fmtTime(t) {
      try {
        return new Date(t).toLocaleDateString("zh-CN", {
          month: "numeric",
          day: "numeric",
        });
      } catch (e) {
        return "近期";
      }
    },
    async connect(app) {
      try {
        await this.store.connect(app.id);
      } catch (err) {
        console.error("[integration] connect failed:", err);
        window.alert("连接失败：" + (err.response?.data?.message || err.message));
      }
    },
    async disconnect(app) {
      if (!window.confirm(`确定断开「${app.name}」吗？`)) return;
      try {
        await this.store.disconnect(app.id);
      } catch (err) {
        console.error("[integration] disconnect failed:", err);
        window.alert("断开失败：" + (err.response?.data?.message || err.message));
      }
    },
  },
};
</script>