<template>
  <div class="fm-body">
    <simplebar class="nicescroll-bar">
      <div class="file-card-view">
        <div
          class="alert alert-warning alert-wth-icon alert-dismissible fade show"
          role="alert"
        >
          <span class="alert-icon-wrap">
            <i class="ri-alert-line"></i>
          </span>
          <div class="d-flex align-items-center flex-wrap flex-sm-nowrap">
            请填写账户名称。
            <a
              href="#"
              class="btn btn-sm btn-warning ms-sm-auto mt-sm-0 mt-2 flex-shrink-0"
              >升级存储</a
            >
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="关闭"
          ></button>
        </div>

        <div v-if="fileStore.$state.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
        </div>

        <template v-else>
          <!-- 快速访问 -->
          <div class="collapse-simple mt-4">
            <div class="card">
              <div class="card-header">
                <a role="button" data-bs-toggle="collapse" href="#fm_collapse_1" aria-expanded="true">
                  <h5 class="mb-0">快速访问</h5>
                </a>
              </div>
              <div id="fm_collapse_1" class="collapse show">
                <div
                  v-if="starredFiles.length"
                  class="row gx-3 row-cols-xxl-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3"
                >
                  <div v-for="file in starredFiles" :key="file.id" class="col">
                    <div class="card file-card card-border">
                      <div class="card-body fmapp-info-trigger" @click="openInfo(file)">
                        <i :class="[iconClass(file), iconTextClass(file)]"></i>
                      </div>
                      <div class="card-footer">
                        <div class="d-flex justify-content-between align-items-start">
                          <div>
                            <div class="file-name">{{ displayName(file) }}</div>
                            <div class="text-truncate fs-8 mb-2">{{ formatSize(file.size) }}</div>
                          </div>
                          <div class="d-flex">
                            <span
                              :class="['file-star', { marked: file.isStarred }]"
                              role="button"
                              @click="toggleStar(file)"
                            >
                              <feather-icon name="star"></feather-icon>
                            </span>
                            <a
                              class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover flex-shrink-0"
                              href="#"
                              data-bs-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span class="icon">
                                <feather-icon name="more-horizontal"></feather-icon>
                              </span>
                            </a>
                            <FileActionsMenu :file="file" @toggle-info="$emit('toggle-info')" />
                          </div>
                        </div>
                        <p class="text-truncate p-xs">最后修改：{{ formatTime(file.updatedAt || file.createdAt) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center py-4 text-secondary">暂无星标文件</div>
              </div>
            </div>
          </div>

          <!-- 文件夹 -->
          <div v-if="fileStore.$state.viewMode === 'folders'" class="collapse-simple mt-4">
            <div class="card">
              <div class="card-header">
                <a role="button" data-bs-toggle="collapse" href="#fm_collapse_2" aria-expanded="true">
                  <h5 class="mb-0">文件夹</h5>
                </a>
              </div>
              <div id="fm_collapse_2" class="collapse show">
                <div
                  v-if="folders.length"
                  class="row gx-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-4"
                >
                  <div v-for="folder in folders" :key="folder" class="col">
                    <div class="card file-compact-card card-border">
                      <div
                        class="card-body d-flex justify-content-between align-items-center"
                        @click="openFolder(folder)"
                        style="cursor: pointer"
                      >
                        <div class="media fmapp-info-trigger">
                          <div class="media-head me-3">
                            <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                              <span class="initial-wrap"><i class="ri-folder-2-fill"></i></span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div class="file-name">{{ folderLabel(folder) }}</div>
                            <div class="text-truncate fs-8 mb-2">{{ folderCount(folder) }} 个文件</div>
                          </div>
                        </div>
                        <feather-icon name="chevron-right" class="text-secondary"></feather-icon>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center py-4 text-secondary">暂无文件夹</div>
              </div>
            </div>
          </div>

          <!-- 打开文件夹内容 -->
          <div
            v-if="fileStore.$state.viewMode === 'folder'"
            class="collapse-simple mt-4"
          >
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <a role="button" data-bs-toggle="collapse" href="#fm_collapse_folder" aria-expanded="true">
                  <h5 class="mb-0">
                    文件夹：{{ fileStore.$state.currentFolder }}
                    <span class="text-secondary fs-8 fw-normal">（返回「文件夹」可切换）</span>
                  </h5>
                </a>
              </div>
              <div id="fm_collapse_folder" class="collapse show">
                <div
                  v-if="files.length"
                  class="row gx-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-4"
                >
                  <div v-for="file in files" :key="file.id" class="col">
                    <FileCompactCard :file="file" />
                  </div>
                </div>
                <div v-else class="text-center py-4 text-secondary">该文件夹为空</div>
              </div>
            </div>
          </div>

          <!-- 文件 -->
          <div class="collapse-simple mt-4">
            <div class="card">
              <div class="card-header">
                <a role="button" data-bs-toggle="collapse" href="#fm_collapse_3" aria-expanded="true">
                  <h5 class="mb-0">文件</h5>
                </a>
              </div>
              <div id="fm_collapse_3" class="collapse show">
                <div v-if="paginatedFiles.length" class="row gx-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-4">
                  <div v-for="file in paginatedFiles" :key="file.id" class="col">
                    <FileCompactCard :file="file" />
                  </div>
                </div>
                <div v-else class="text-center py-4 text-secondary">暂无文件</div>
                <!-- 分页 -->
                <div v-if="totalPages > 1" class="d-flex justify-content-between align-items-center mt-3 px-3">
                  <span class="text-muted fs-8">第 {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, files.length) }} 条 / 共 {{ files.length }} 条</span>
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
            </div>
          </div>
        </template>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { useFileStore } from "@/stores/fileStore";
import FileCompactCard from "./FileCompactCard.vue";
import FileActionsMenu from "./FileActionsMenu.vue";

export default {
  name: "GridView",
  components: {
    FileCompactCard,
    FileActionsMenu,
  },
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 12,
    };
  },
  computed: {
    files() {
      return this.fileStore.$state.files || [];
    },
    paginatedFiles() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.files.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.files.length / this.pageSize);
    },
    allFiles() {
      return this.fileStore.$state.allFiles || [];
    },
    folders() {
      return this.fileStore.$state.folders || [];
    },
    starredFiles() {
      return this.allFiles.filter((f) => f.isStarred && !f.isDeleted);
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    displayName(file) {
      return this.fileStore.displayName(file);
    },
    formatSize(size) {
      return this.fileStore.formatSize(size);
    },
    formatTime(time) {
      return this.fileStore.formatTime(time);
    },
    iconClass(file) {
      const f = this.displayName(file) || file.name || "";
      const folder = file.folder || "";
      const lower = (f + folder).toLowerCase();
      if (folder.includes("图片") || /\.(png|jpe?g|gif|webp|svg)$/.test(lower)) return "ri-image-2-fill";
      if (folder.includes("视频") || /\.(mp4|mov|avi|mkv|webm)$/.test(lower)) return "ri-video-fill";
      if (folder.includes("音频") || /\.(mp3|wav|flac|ogg|m4a)$/.test(lower)) return "ri-music-2-fill";
      if (/\.(xlsx?|csv)$/.test(lower)) return "ri-file-excel-2-fill";
      if (/\.(docx?|odt)$/.test(lower)) return "ri-file-word-2-fill";
      if (/\.(pdf)$/.test(lower)) return "ri-file-pdf-fill";
      if (/\.(zip|rar|7z|tar|gz)$/.test(lower)) return "ri-folder-zip-fill";
      if (folder.includes("文档") || /\.(txt|md)$/.test(lower)) return "ri-file-text-fill";
      return "ri-file-2-fill";
    },
    iconTextClass(file) {
      const f = this.displayName(file) || file.name || "";
      const folder = file.folder || "";
      const lower = (f + folder).toLowerCase();
      if (/\.(png|jpe?g|gif|webp|svg)$/.test(lower)) return "text-success";
      if (folder.includes("视频") || /\.(mp4|mov|avi|mkv|webm)$/.test(lower)) return "text-danger";
      if (folder.includes("音频") || /\.(mp3|wav|flac|ogg|m4a)$/.test(lower)) return "text-pink";
      if (/\.(xlsx?|csv)$/.test(lower)) return "text-blue";
      if (/\.(docx?|odt)$/.test(lower)) return "text-blue";
      if (/\.(pdf)$/.test(lower)) return "text-danger";
      if (/\.(zip|rar|7z)$/.test(lower)) return "text-blue";
      if (folder.includes("设计")) return "text-info";
      return "text-warning";
    },
    folderLabel(folder) {
      const parts = String(folder).split("/").filter(Boolean);
      return parts.length ? parts[parts.length - 1] : folder;
    },
    folderCount(folder) {
      return this.allFiles.filter((f) => !f.isDeleted && f.folder === folder).length;
    },
    openInfo(file) {
      this.fileStore.selectFile(file);
      this.$emit("toggle-info");
    },
    async toggleStar(file) {
      try {
        await this.fileStore.starFile(file.id);
      } catch (err) {
        console.error("[fm] star failed:", err);
      }
    },
    openFolder(folder) {
      this.fileStore.openFolder(folder);
    },
  },
};
</script>