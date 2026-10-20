<template>
  <div class="file-info">
    <simplebar class="nicescroll-bar">
      <button type="button" class="info-close btn-close" @click="toggleInfo">
        <span aria-hidden="true">×</span>
      </button>
      <template v-if="file">
        <div class="file-name">{{ displayName(file) }}</div>
        <span>{{ fileTypeText(file) }}</span>
        <img
          v-if="isImage(file)"
          :src="previewUrl"
          alt="预览"
          class="d-block img-fluid my-4 w-250p"
        />
        <div v-else class="my-4 text-center">
          <i :class="[iconClass(file), 'fs-1 text-primary']"></i>
        </div>

        <ul class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mt-5">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tab_info">
              <span class="nav-link-text">详情</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab_activity">
              <span class="nav-link-text">动态</span>
            </a>
          </li>
        </ul>
        <div class="tab-content mt-5">
          <div class="tab-pane fade show active" id="tab_info">
            <div class="collapse-simple">
              <div class="card">
                <div class="card-header">
                  <a role="button" data-bs-toggle="collapse" href="#fl_info" aria-expanded="true"
                    >规格信息</a
                  >
                </div>
                <div id="fl_info" class="collapse show">
                  <div class="card-body">
                    <ul class="fm-info">
                      <li>
                        <span>修改时间</span>
                        <span>{{ formatTime(file.updatedAt || file.createdAt) }}</span>
                      </li>
                      <li>
                        <span>大小</span>
                        <span>{{ formatSize(file.size) }}</span>
                      </li>
                      <li>
                        <span>文件夹</span>
                        <span>{{ fileFolder(file) }}</span>
                      </li>
                      <li>
                        <span>创建时间</span>
                        <span>{{ formatTime(file.createdAt) }}</span>
                      </li>
                      <li>
                        <span>类型</span>
                        <span>{{ fileTypeText(file) }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card" v-if="false">
                <div class="card-header">
                  <a role="button" data-bs-toggle="collapse" href="#shared_with" aria-expanded="true"
                    >共享成员
                  </a>
                </div>
                <div id="shared_with" class="collapse show">
                  <div class="card-body">
                    <a
                      href="#"
                      class="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded"
                    >
                      <span class="initial-wrap">
                        <feather-icon name="plus"></feather-icon>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <a role="button" data-bs-toggle="collapse" href="#settings" aria-expanded="true"
                    >设置
                  </a>
                </div>
                <div id="settings" class="collapse show">
                  <div class="card-body">
                    <ul class="fm-action">
                      <li>
                        <a href="javascript:void(0);" @click="starCurrent">
                          <span :class="file.isStarred ? 'text-warning' : ''">
                            {{ file.isStarred ? "取消星标" : "加入星标" }}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" @click="downloadCurrent">
                          <span>下载文件</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" @click="renameCurrent">
                          <span>重命名</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" @click="deleteCurrent">
                          <span class="text-danger">
                            {{ isTrashView ? "彻底删除" : "删除文件" }}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab_activity">
            <div class="collapse-simple">
              <div class="card">
                <div class="card-header">
                  <a role="button" data-bs-toggle="collapse" href="#act_info1" aria-expanded="true"
                    >最近动态</a
                  >
                </div>
                <div id="act_info1" class="collapse show">
                  <div class="card-body">
                    <ul class="activity-list list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-primary avatar-rounded">
                              <span class="initial-wrap">Cb</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">caoba</span> 上传了文件
                              <span class="link-default"><u>{{ displayName(file) }}</u></span>
                            </p>
                            <div class="last-activity-time">{{ formatTime(file.createdAt) }}</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div v-else class="text-center py-5 text-secondary">
        <i class="ri-file-info-line fs-1"></i>
        <p class="mt-2">点击文件查看详情</p>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { useFileStore } from "@/stores/fileStore";

export default {
  name: "FileInfo",
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  data() {
    return {
      previewUrl: "",
    };
  },
  computed: {
    file() {
      return this.fileStore.$state.selectedFile;
    },
    isTrashView() {
      return this.fileStore.$state.viewMode === "trash";
    },
  },
  watch: {
    file: {
      immediate: true,
      async handler(file) {
        this.previewUrl = "";
        if (file && this.isImage(file)) {
          try {
            const blob = await this.fileStore.fetchBlob(file.id);
            if (blob) {
              this.previewUrl = URL.createObjectURL(blob);
            }
          } catch (err) {
            this.previewUrl = "";
          }
        }
      },
    },
  },
  methods: {
    toggleInfo() {
      this.$emit("toggle-info");
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
    fileFolder(file) {
      return file.folder || "/";
    },
    fileTypeText(file) {
      const name = this.displayName(file) || file.name || "";
      const dot = name.lastIndexOf(".");
      if (dot > 0) return name.slice(dot + 1).toUpperCase() + " 文件";
      return file.type || "文件";
    },
    isImage(file) {
      const name = this.displayName(file) || file.name || "";
      return /\.(png|jpe?g|gif|webp|svg|bmp)$/i.test(name) || (file.type || "").startsWith("image/");
    },
    iconClass(file) {
      return "ri-file-text-fill";
    },
    async starCurrent() {
      if (!this.file) return;
      try {
        await this.fileStore.starFile(this.file.id);
      } catch (err) {
        console.error("[fm] star failed:", err);
      }
    },
    async downloadCurrent() {
      if (!this.file) return;
      try {
        const blob = await this.fileStore.downloadFile(this.file);
        if (blob && blob.type && blob.type.startsWith("image/")) {
          this.previewUrl = URL.createObjectURL(blob);
        }
      } catch (err) {
        console.error("[fm] download failed:", err);
      }
    },
    async renameCurrent() {
      if (!this.file) return;
      const name = window.prompt("请输入新的文件名：", this.displayName(this.file));
      if (!name) return;
      try {
        await this.fileStore.renameFile(this.file.id, name);
      } catch (err) {
        console.error("[fm] rename failed:", err);
        window.alert("重命名失败：" + (err.response?.data?.message || err.message));
      }
    },
    async deleteCurrent() {
      if (!this.file) return;
      const id = this.file.id;
      if (this.isTrashView) {
        if (!window.confirm("确定要彻底删除该文件吗？")) return;
        try {
          await this.fileStore.deleteFile(id);
        } catch (err) {
          console.error("[fm] delete failed:", err);
        }
      } else {
        try {
          await this.fileStore.trashFile(id);
        } catch (err) {
          console.error("[fm] trash failed:", err);
        }
      }
    },
  },
};
</script>
