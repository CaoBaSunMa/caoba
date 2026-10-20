<template>
  <div class="fm-body">
    <simplebar class="nicescroll-bar">
      <div class="file-list-view">
        <ul class="nav nav-tabs nav-line nav-icon nav-light">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'cloud' }"
              href="javascript:void(0);"
              @click="switchTab('cloud')"
            >
              <span class="nav-link-text">云文档</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'shared' }"
              href="javascript:void(0);"
              @click="switchTab('shared')"
            >
              <span class="nav-link-text">共享给我的</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active">
            <div v-if="fileStore.$state.loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status"></div>
            </div>
            <div v-else-if="!files.length" class="text-center py-5">
              <i class="ri-folder-open-line fs-1 text-secondary"></i>
              <p class="mt-2 text-secondary">暂无文件{{ emptyHint }}</p>
            </div>
            <div v-else class="table-responsive">
              <HkDataTable
                :columns="columns"
                :data="tableData"
                :selectable="true"
                :showPagination="true"
                :rowsPerPage="10"
                starred
                classes="nowrap w-100 mb-5"
                @star-toggle="onStarToggle"
              >
                <!-- name formatter -->
                <template v-slot:name="{ cellValue }">
                  <div
                    v-for="(item, index) in cellValue"
                    :key="index"
                    class="media fmapp-info-trigger"
                    @click="openInfo(item.file)"
                  >
                    <div class="media-head me-3">
                      <div
                        v-if="item.icons"
                        :class="['avatar avatar-icon avatar-sm', item.iconBg]"
                      >
                        <span class="initial-wrap">
                          <i :class="item.icons" />
                        </span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="file-name">{{ item.fileName }}</div>
                      <div>{{ item.fileType }}</div>
                    </div>
                  </div>
                </template>

                <!-- sharing formatter -->
                <template v-slot:sharing="{ cellValue }">
                  <div
                    v-for="(item, index) in cellValue"
                    :key="index"
                    class="avatar-group avatar-group-overlapped"
                  >
                    <span v-if="item.blank">-</span>
                  </div>
                </template>

                <!-- actions formatter -->
                <template v-slot:actions="{ row }">
                  <span class="text-right">
                    <a
                      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
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
                    <div class="dropdown-menu">
                      <template v-if="fileStore.$state.viewMode === 'trash'">
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="restoreFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="rotate-ccw"></feather-icon>
                          </span>
                          <span>还原</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="deleteFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="trash-2"></feather-icon>
                          </span>
                          <span>彻底删除</span>
                        </a>
                      </template>
                      <template v-else>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="openInfo(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="eye"></feather-icon>
                          </span>
                          <span>预览</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="renameFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="edit-2"></feather-icon>
                          </span>
                          <span>重命名</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="duplicateFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="copy"></feather-icon>
                          </span>
                          <span>创建副本</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="moveFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="skip-forward"></feather-icon>
                          </span>
                          <span>移动</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="shareLink(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="link-2"></feather-icon>
                          </span>
                          <span>共享链接</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="downloadFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="download"></feather-icon>
                          </span>
                          <span>下载</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="trashFile(row.file)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="trash-2"></feather-icon>
                          </span>
                          <span>删除</span>
                        </a>
                      </template>
                    </div>
                  </span>
                </template>
              </HkDataTable>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import HkDataTable from "@/hk-components/@hkDataTable/HkDataTable.vue";
import { useFileStore } from "@/stores/fileStore";

export default {
  name: "ListView",
  components: {
    HkDataTable,
  },
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  data() {
    return {
      activeTab: "cloud",
      columns: [
        { accessor: "id", title: "ID", hidden: true },
        { accessor: "starred", title: "", hidden: true },
        { accessor: "name", title: "名称", sort: true, cellFormatter: "name" },
        { accessor: "sharing", title: "共享", sort: true, cellFormatter: "sharing" },
        { accessor: "modified", title: "修改时间", sort: true },
        { accessor: "size", title: "大小", sort: true },
        { accessor: "actions", title: "操作", cellFormatter: "actions" },
      ],
    };
  },
  computed: {
    files() {
      return this.fileStore.$state.files || [];
    },
    tableData() {
      return this.files.map((file) => ({
        id: file.id,
        starred: !!file.isStarred,
        name: [
          {
            icons: this.iconClass(file),
            iconBg: this.iconBg(file),
            fileName: this.fileStore.displayName(file) || file.name,
            fileType: this.fileTypeText(file),
            file,
          },
        ],
        sharing: [{ blank: true }],
        modified: this.fileStore.formatTime(file.updatedAt || file.createdAt),
        size: this.fileStore.formatSize(file.size),
        actions: [{}],
        file,
      }));
    },
    emptyHint() {
      if (this.fileStore.$state.viewMode === "trash") return "，回收站为空";
      if (this.fileStore.$state.viewMode === "shared") return "，暂无共享文件";
      if (this.fileStore.$state.searchKeyword) return "，未找到匹配文件";
      return "";
    },
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
      if (tab === "shared") {
        this.fileStore.loadView("shared");
      } else {
        this.fileStore.loadView(this.fileStore.$state.viewMode);
      }
    },
    openInfo(file) {
      this.fileStore.selectFile(file);
      this.$emit("toggle-info");
    },
    async onStarToggle(row) {
      try {
        await this.fileStore.starFile(row.id);
      } catch (err) {
        console.error("[fm] star failed:", err);
      }
    },
    async trashFile(file) {
      try {
        await this.fileStore.trashFile(file.id);
      } catch (err) {
        console.error("[fm] trash failed:", err);
      }
    },
    async restoreFile(file) {
      try {
        await this.fileStore.restoreFile(file.id);
      } catch (err) {
        console.error("[fm] restore failed:", err);
      }
    },
    async deleteFile(file) {
      if (!window.confirm(`确定要彻底删除「${this.fileStore.displayName(file)}」吗？`)) return;
      try {
        await this.fileStore.deleteFile(file.id);
      } catch (err) {
        console.error("[fm] delete failed:", err);
      }
    },
    async renameFile(file) {
      const name = window.prompt("请输入新的文件名：", this.fileStore.displayName(file));
      if (!name) return;
      try {
        await this.fileStore.renameFile(file.id, name);
      } catch (err) {
        console.error("[fm] rename failed:", err);
        window.alert("重命名失败：" + (err.response?.data?.message || err.message));
      }
    },
    async moveFile(file) {
      const folder = window.prompt("请输入目标文件夹（例如 /设计）：", file.folder || "/");
      if (!folder) return;
      try {
        await this.fileStore.moveFile(file.id, folder);
        await this.fileStore.loadView(this.fileStore.$state.viewMode);
      } catch (err) {
        console.error("[fm] move failed:", err);
        window.alert("移动失败：" + (err.response?.data?.message || err.message));
      }
    },
    async duplicateFile(file) {
      try {
        await this.fileStore.duplicateFile(file);
        window.alert("已创建副本");
      } catch (err) {
        console.error("[fm] duplicate failed:", err);
        window.alert("创建副本失败：" + (err.response?.data?.message || err.message));
      }
    },
    async downloadFile(file) {
      try {
        await this.fileStore.downloadFile(file);
      } catch (err) {
        console.error("[fm] download failed:", err);
        window.alert("下载失败：" + (err.response?.data?.message || err.message));
      }
    },
    async shareLink(file) {
      const link = `${window.location.origin}/apps/file-manager/list-view?file=${file.id}`;
      try {
        await navigator.clipboard.writeText(link);
        window.alert("共享链接已复制到剪贴板");
      } catch (err) {
        window.alert("共享链接：" + link);
      }
    },
    iconClass(file) {
      const f = this.fileStore.displayName(file) || file.name || "";
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
    iconBg(file) {
      const f = this.fileStore.displayName(file) || file.name || "";
      const folder = file.folder || "";
      const lower = (f + folder).toLowerCase();
      if (/\.(png|jpe?g|gif|webp|svg)$/.test(lower)) return "avatar-soft-success";
      if (folder.includes("视频") || /\.(mp4|mov|avi|mkv|webm)$/.test(lower)) return "avatar-soft-danger";
      if (folder.includes("音频") || /\.(mp3|wav|flac|ogg|m4a)$/.test(lower)) return "avatar-soft-pink";
      if (/\.(xlsx?|csv)$/.test(lower)) return "avatar-soft-blue";
      if (/\.(docx?|odt)$/.test(lower)) return "avatar-soft-primary";
      if (/\.(pdf)$/.test(lower)) return "avatar-soft-danger";
      if (/\.(zip|rar|7z)$/.test(lower)) return "avatar-soft-blue";
      if (folder.includes("设计")) return "avatar-soft-info";
      return "avatar-soft-warning";
    },
    fileTypeText(file) {
      const name = this.fileStore.displayName(file) || file.name || "";
      const dot = name.lastIndexOf(".");
      if (dot > 0) return name.slice(dot + 1).toUpperCase();
      return file.type || "文件";
    },
  },
};
</script>