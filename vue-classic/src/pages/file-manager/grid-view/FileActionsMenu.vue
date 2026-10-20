<template>
  <span>
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
    <div class="dropdown-menu dropdown-menu-end">
      <template v-if="isTrashView">
        <a class="dropdown-item" href="javascript:void(0);" @click="restoreFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="rotate-ccw"></feather-icon>
          </span>
          <span>还原</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="deleteFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
          <span>彻底删除</span>
        </a>
      </template>
      <template v-else>
        <a class="dropdown-item" href="javascript:void(0);" @click="preview(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="eye"></feather-icon>
          </span>
          <span>预览</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="renameFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="edit-2"></feather-icon>
          </span>
          <span>重命名</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="duplicateFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="copy"></feather-icon>
          </span>
          <span>创建副本</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="moveFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="skip-forward"></feather-icon>
          </span>
          <span>移动</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="shareLink(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="link-2"></feather-icon>
          </span>
          <span>共享链接</span>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="javascript:void(0);" @click="downloadFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="download"></feather-icon>
          </span>
          <span>下载</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="trashFile(file)">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
          <span>删除</span>
        </a>
      </template>
    </div>
  </span>
</template>

<script>
import { useFileStore } from "@/stores/fileStore";

export default {
  name: "FileActionsMenu",
  props: {
    file: { type: Object, required: true },
  },
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  computed: {
    isTrashView() {
      return this.fileStore.$state.viewMode === "trash";
    },
  },
  methods: {
    preview(file) {
      this.fileStore.selectFile(file);
      this.$emit("toggle-info");
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
      const link = `${window.location.origin}/apps/file-manager/grid-view?file=${file.id}`;
      try {
        await navigator.clipboard.writeText(link);
        window.alert("共享链接已复制到剪贴板");
      } catch (err) {
        window.alert("共享链接：" + link);
      }
    },
  },
};
</script>