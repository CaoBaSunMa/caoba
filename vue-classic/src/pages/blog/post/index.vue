<template>
  <div class="blog-body" style="overflow: visible;">
    <simplebar class="nicescroll-bar">
      <div class="post-list">
        <ul class="nav nav-tabs nav-line nav-icon nav-light">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'all' }"
              href="javascript:void(0);"
              @click="setTab('all')"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-text">全部文章</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1">{{
                  countBy('all')
                }}</span>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'published' }"
              href="javascript:void(0);"
              @click="setTab('published')"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-text">已发布</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1">{{
                  countBy('published')
                }}</span>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'draft' }"
              href="javascript:void(0);"
              @click="setTab('draft')"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-text">草稿</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1">{{
                  countBy('draft')
                }}</span>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'archived' }"
              href="javascript:void(0);"
              @click="setTab('archived')"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-text">已归档</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1">{{
                  countBy('archived')
                }}</span>
              </div>
            </a>
          </li>
        </ul>

        <div v-if="blogStore.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
        </div>

        <div v-else-if="!tableData.length" class="text-center py-5 text-secondary">
          <i class="ri-article-line fs-1"></i>
          <p class="mt-2 mb-0">暂无文章</p>
          <router-link to="/apps/blog/add-new-post" class="btn btn-primary btn-sm mt-3"
            >新建文章</router-link
          >
        </div>

        <div v-else class="tab-content">
          <div class="tab-pane fade show active">
            <div class="row mb-3">
              <div class="col-7 mb-3">
                <div class="blog-toolbar-left">
                  <div class="d-xxl-flex d-none align-items-center mb-0">
                    <select class="form-select form-select-sm w-120p" v-model="bulkAction">
                      <option value="">批量操作</option>
                      <option value="trash">移至回收站</option>
                      <option value="publish">发布</option>
                    </select>
                    <button class="btn btn-sm btn-light ms-2" @click="applyBulk">应用</button>
                  </div>
                </div>
              </div>
              <div class="col-5 mb-3">
                <div class="blog-toolbar-right">
                  <div class="dataTables_filter">
                    <label>
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="搜索"
                        v-model="searchTerm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <HkDataTable
                :columns="columns"
                :data="tableData"
                :selectable="true"
                :searchQuery="searchTerm"
                classes="nowrap w-100 mb-0"
              >
                <!-- author formatter -->
                <template v-slot:author="{ cellValue, row }">
                  <div class="media align-items-center">
                    <div v-if="cellValue[0]?.img" class="media-head me-2">
                      <div class="avatar avatar-xs">
                        <img :src="cellValue[0].img" alt="用户" class="avatar-img rounded-circle" />
                      </div>
                    </div>
                    <div
                      v-if="cellValue[0]?.initAvt"
                      :class="['avatar avatar-xs avatar-rounded', cellValue[0].avtBg]"
                    >
                      <span class="initial-wrap">{{ cellValue[0].initAvt }}</span>
                    </div>
                    <div class="media-body">
                      <span class="d-block">{{ cellValue[0]?.authorName }}</span>
                    </div>
                  </div>
                </template>

                <!-- tag formatter -->
                <template v-slot:tags="{ cellValue }">
                  <span
                    v-for="(tag, index) in cellValue"
                    :key="index"
                    :class="['badge my-1  me-2', tag.bg]"
                    >{{ tag.title }}</span
                  >
                </template>

                <!-- seo formatter -->
                <template v-slot:seo="{ cellValue }">
                  <span
                    :class="[
                      'badge badge-indicator badge-indicator-xl',
                      'badge-' + cellValue,
                    ]"
                  ></span>
                </template>

                <!-- actions formatter -->
                <template v-slot:actions="{ row }">
                  <div class="d-flex align-items-center">
                    <div class="dropdown">
                      <button
                        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                      >
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </button>
                      <div role="menu" class="dropdown-menu dropdown-menu-end">
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="openPost(row)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="eye"></feather-icon>
                          </span>
                          <span>查看</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="editPost(row)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="edit-2"></feather-icon>
                          </span>
                          <span>编辑</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a
                          v-if="row.status !== 'PUBLISHED'"
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="publishPost(row)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="send"></feather-icon>
                          </span>
                          <span>发布</span>
                        </a>
                        <a
                          v-else
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="archivePost(row)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="archive"></feather-icon>
                          </span>
                          <span>归档</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a
                          class="dropdown-item text-danger"
                          href="javascript:void(0);"
                          @click="deletePost(row)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="trash-2"></feather-icon>
                          </span>
                          <span>删除</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </template>
              </HkDataTable>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
    <!-- 分页栏（固定在底部，始终可见）-->
    <div v-if="tableData.length > 0" style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000;" class="d-flex justify-content-between align-items-center px-3 py-2 border-top bg-white shadow-sm">
      <span class="text-muted fs-8">第 {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, tableData.length) }} 条 / 共 {{ tableData.length }} 条</span>
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
</template>

<script>
import HkDataTable from "@/hk-components/@hkDataTable/HkDataTable.vue";
import { useBlogStore } from "@/stores/blogStore";

const TAG_BG = ["badge-soft-violet", "badge-soft-danger", "badge-soft-success", "badge-soft-primary"];

export default {
  components: {
    HkDataTable,
  },
  setup() {
    const blogStore = useBlogStore();
    return { blogStore };
  },
  data() {
    return {
      searchTerm: "",
      bulkAction: "",
      selectedRows: new Set(),
      currentPage: 1,
      pageSize: 10,
      columns: [
        {
          accessor: "id",
          title: "ID",
        },
        {
          accessor: "title",
          title: "标题",
          tdClass: "mw-250p text-truncate text-high-em",
          sort: true,
        },
        {
          accessor: "author",
          title: "作者",
          cellFormatter: "author",
        },
        {
          accessor: "categories",
          title: "分类",
        },
        {
          accessor: "tags",
          title: "标签",
          cellFormatter: "tags",
        },
        {
          accessor: "status",
          title: "状态",
        },
        {
          accessor: "date",
          title: "日期",
        },
        {
          accessor: "views",
          title: "阅读量",
        },
        {
          accessor: "seo",
          title: "SEO",
          cellFormatter: "seo",
        },
        {
          accessor: "actions",
          title: "操作",
          cellFormatter: "actions",
        },
      ],
    };
  },
  computed: {
    activeTab() {
      return this.blogStore.$state.activeTab;
    },
    tableData() {
      return this.blogStore.filteredPosts.map((p, i) => ({
        id: p.id,
        title: p.title || "未命名文章",
        author: [
          {
            initAvt: String(p.title || "T").charAt(0).toUpperCase(),
            avtBg: ["avatar-soft-primary", "avatar-soft-success", "avatar-soft-warning"][i % 3],
            authorName: "管理员",
          },
        ],
        categories: p.category || "未分类",
        tags: this.parseTags(p.tags),
        status: this.mapStatus(p.status),
        date: this.formatDate(p.createdAt),
        views: p.views ?? 0,
        seo: p.status === "PUBLISHED" ? "primary" : "light",
        _post: p,
      }));
    },
    totalPages() {
      return Math.ceil(this.tableData.length / this.pageSize);
    },
  },
  mounted() {
    if (!this.blogStore.$state.posts.length) {
      this.blogStore.fetchPosts();
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    setTab(tab) {
      this.blogStore.$state.activeTab = tab;
      this.currentPage = 1;
      // 顶部 tab 切换同样清空分类/标签过滤，避免残留
      this.blogStore.$state.activeCategory = null;
      this.blogStore.$state.activeTag = null;
    },
    countBy(tab) {
      const posts = this.blogStore.$state.posts;
      if (tab === "all") return posts.length;
      return posts.filter((p) => p.status === tab.toUpperCase()).length;
    },
    parseTags(tags) {
      try {
        const arr = typeof tags === "string" ? JSON.parse(tags) : tags;
        return Array.isArray(arr)
          ? arr.map((t, i) => ({ title: t, bg: TAG_BG[i % TAG_BG.length] }))
          : [];
      } catch (e) {
        return [];
      }
    },
    mapStatus(s) {
      if (s === "PUBLISHED") return "已发布";
      if (s === "ARCHIVED") return "已归档";
      return "草稿";
    },
    formatDate(d) {
      if (!d) return "—";
      const dt = new Date(d);
      if (isNaN(dt.getTime())) return "—";
      return `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`;
    },
    openPost(row) {
      this.$router.push({ path: "/apps/blog/post-detail", query: { id: row._post.id } });
    },
    editPost(row) {
      this.$router.push({ path: "/apps/blog/add-new-post", query: { id: row._post.id } });
    },
    async publishPost(row) {
      try {
        await this.blogStore.publish(row._post.id);
      } catch (err) {
        console.error("[blog] publish failed:", err);
        window.alert("发布失败：" + (err.response?.data?.message || err.message));
      }
    },
    async archivePost(row) {
      try {
        await this.blogStore.archive(row._post.id);
      } catch (err) {
        console.error("[blog] archive failed:", err);
        window.alert("归档失败：" + (err.response?.data?.message || err.message));
      }
    },
    async deletePost(row) {
      if (!window.confirm(`确定删除「${row._post.title}」吗？`)) return;
      try {
        await this.blogStore.deletePost(row._post.id);
      } catch (err) {
        console.error("[blog] delete failed:", err);
        window.alert("删除失败：" + (err.response?.data?.message || err.message));
      }
    },
    applyBulk() {
      if (!this.bulkAction) return;
      const rows = this.selectedRows.size ? [...this.selectedRows] : this.tableData.map((r) => r.id);
      if (this.bulkAction === "trash") {
        window.alert(`将 ${rows.length} 篇文章移至回收站（演示）`);
      } else if (this.bulkAction === "publish") {
        rows.forEach(async (id) => {
          try {
            await this.blogStore.publish(id);
          } catch (e) {
            /* ignore */
          }
        });
      }
      this.bulkAction = "";
    },
  },
};
</script>