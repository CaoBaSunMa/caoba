<template>
  <AppsHeader
    :showSidebar="showSidebar"
    :searchValue="searchValue"
    :sortBy="sortBy"
    @toggle-sidebar="toggleSidebar"
    @update:searchValue="searchValue = $event"
    @update:sortBy="sortBy = $event"
  />
  <div class="integrations-body">
    <simplebar class="nicescroll-bar">
      <div class="container mt-md-7 mt-3">
        <!-- 无结果提示 -->
        <div v-if="!filteredSections.length" class="text-center py-5 text-secondary">
          <i class="ri-apps-line fs-1"></i>
          <p class="mt-2 mb-0">未找到匹配的应用</p>
          <p class="fs-8">请尝试其他搜索关键词或分类</p>
        </div>

        <template v-for="(data, sectionIndex) in paginatedSections" :key="sectionIndex">
          <div
            class="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mb-5"
          >
            <div>
              <h5>{{ data.type }}</h5>
              <p>{{ data.description }}</p>
            </div>
            <a
              href="javascript:void(0);"
              class="fs-7 flex-shrink-0"
              @click="toggleSection(sectionIndex)"
            >{{ collapsedSections.includes(sectionIndex) ? '展开' : '收起' }}</a>
          </div>
          <div v-show="!collapsedSections.includes(sectionIndex)" class="row">
            <div
              v-for="(app, appIndex) in data.apps"
              :key="appIndex"
              class="col-xxl-3 col-xl-4 col-md-6"
            >
              <div class="card card-border card-int mb-4">
                <div class="card-body">
                  <div
                    v-for="(image, indx) in app.img"
                    :key="indx"
                    :class="['avatar avatar-sm mb-3 avatar-logo', image.variant]"
                  >
                    <span
                      v-if="image.type === 'symbol'"
                      :class="['initial-wrap', image.bg]"
                    >
                      <img :src="image.src" :alt="image.type" />
                    </span>
                    <img
                      v-if="image.type === 'logo'"
                      :src="image.src"
                      class="avatar-img"
                      :alt="image.type"
                    />
                    <span v-if="image.type === 'initAvt'" class="initial-wrap">{{
                      image.title
                    }}</span>
                  </div>
                  <div class="app-name">{{ app.name }}</div>
                  <div class="app-cat">{{ app.category }}</div>
                  <p class="p-sm multine-ellipsis">{{ app.details }}</p>
                </div>
                <div class="card-footer justify-content-between border-0">
                  <span class="d-flex align-items-center fs-8">
                    <i class="ri-download-cloud-2-line fs-7 me-2"></i>
                    {{ app.downloads }} 次下载
                  </span>
                  <div class="d-flex gap-1">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-sm btn-outline-primary"
                      @click="viewDetail(app)"
                    >详情</a>
                    <a
                      href="javascript:void(0);"
                      :class="[
                        matched(app)?.status === 'CONNECTED'
                          ? 'btn btn-sm btn-primary'
                          : 'btn btn-sm btn-outline-secondary',
                      ]"
                      @click="toggleApp(app)"
                    >{{
                      matched(app)?.status === 'CONNECTED' ? '已连接' : '连接'
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="d-flex justify-content-between align-items-center mt-3 mb-4">
          <span class="text-muted fs-8">第 {{ currentPage }} / 共 {{ totalPages }} 组</span>
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
      </div>
    </simplebar>
  </div>
</template>

<script>
import AppsHeader from "./AppsHeader.vue";
import { appDetails } from "@/data/integrations/all-apps/appDetails";
import { useIntegrationStore } from "@/stores/integrationStore";

export default {
  name: "AllApps",
  components: {
    AppsHeader,
  },
  props: {
    showSidebar: Boolean,
    activeCategory: {
      type: String,
      default: null,
    },
  },
  emits: ["toggle-sidebar", "setCategory"],
  setup() {
    const store = useIntegrationStore();
    return { store };
  },
  data() {
    return {
      appDetails,
      searchValue: "",
      sortBy: "hot",
      localCategory: null,
      currentPage: 1,
      pageSize: 2,
      collapsedSections: [],
    };
  },
  computed: {
    filteredSections() {
      let sections = this.appDetails;
      // 分类筛选（模糊匹配）
      const cat = this.activeCategory || this.localCategory;
      if (cat) {
        sections = sections.filter(s =>
          s.apps.some(app => (app.category || "").includes(cat))
        ).map(s => ({
          ...s,
          apps: s.apps.filter(app => (app.category || "").includes(cat))
        }));
      }
      // 搜索筛选
      if (this.searchValue.trim()) {
        const q = this.searchValue.trim().toLowerCase();
        sections = sections.map(s => ({
          ...s,
          apps: s.apps.filter(app =>
            (app.name || "").toLowerCase().includes(q) ||
            (app.category || "").toLowerCase().includes(q) ||
            (app.details || "").toLowerCase().includes(q)
          )
        })).filter(s => s.apps.length > 0);
      }
      return sections;
    },
    sortedSections() {
      const sections = [...this.filteredSections];
      if (this.sortBy === "name") {
        sections.forEach(s => {
          s.apps = [...s.apps].sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        });
      } else if (this.sortBy === "downloads") {
        sections.forEach(s => {
          s.apps = [...s.apps].sort((a, b) => this.parseDownloads(b.downloads) - this.parseDownloads(a.downloads));
        });
      }
      return sections;
    },
    totalPages() {
      return Math.ceil(this.sortedSections.length / this.pageSize);
    },
    paginatedSections() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.sortedSections.slice(start, start + this.pageSize);
    },
  },
  mounted() {
    if (!this.store.integrations.length) {
      this.store.fetchIntegrations();
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    setCategory(cat) {
      this.$emit('setCategory', cat);
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    toggleSection(index) {
      const idx = this.collapsedSections.indexOf(index);
      if (idx >= 0) {
        this.collapsedSections.splice(idx, 1);
      } else {
        this.collapsedSections.push(index);
      }
    },
    parseDownloads(str) {
      if (!str) return 0;
      const s = String(str).replace(/,/g, "");
      if (s.includes("M")) return parseFloat(s) * 1000000;
      if (s.includes("k")) return parseFloat(s) * 1000;
      return parseInt(s) || 0;
    },
    matched(app) {
      const name = String(app.name || "").trim().toLowerCase();
      return (
        this.store.integrations.find(
          (it) =>
            String(it.appName || "").trim().toLowerCase() === name ||
            String(it.appIcon || "").trim().toLowerCase() === name,
        ) || null
      );
    },
    viewDetail(app) {
      this.$router.push("/apps/integrations/app-detail");
    },
    async toggleApp(app) {
      const it = this.matched(app);
      if (!it) {
        window.alert(`「${app.name}」暂未在管理端配置，请使用集成页中的应用。`);
        return;
      }
      try {
        if (it.status === "CONNECTED") {
          if (!window.confirm(`确定断开「${it.appName}」吗？`)) return;
          await this.store.disconnect(it.id);
        } else {
          await this.store.connect(it.id);
        }
      } catch (err) {
        console.error("[integration] toggle failed:", err);
        window.alert(err.response?.data?.message || err.message);
      }
    },
  },
};
</script>
