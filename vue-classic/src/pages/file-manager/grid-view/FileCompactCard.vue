<template>
  <div class="card file-compact-card card-border">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="media fmapp-info-trigger" @click="openInfo(file)">
        <div class="media-head me-3">
          <div class="avatar avatar-icon avatar-sm" :class="iconBgClass(file)">
            <span class="initial-wrap"><i :class="iconClass(file)"></i></span>
          </div>
        </div>
        <div class="media-body">
          <div class="file-name">{{ displayName(file) }}</div>
          <div class="text-truncate fs-8 mb-2">{{ formatSize(file.size) }}</div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span
          :class="['file-star me-1', { marked: file.isStarred }]"
          role="button"
          @click="toggleStar(file)"
        >
          <feather-icon name="star"></feather-icon>
        </span>
        <FileActionsMenu :file="file" @toggle-info="$emit('toggle-info')" />
      </div>
    </div>
  </div>
</template>

<script>
import { useFileStore } from "@/stores/fileStore";
import FileActionsMenu from "./FileActionsMenu.vue";

export default {
  name: "FileCompactCard",
  components: {
    FileActionsMenu,
  },
  props: {
    file: { type: Object, required: true },
  },
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  methods: {
    displayName(file) {
      return this.fileStore.displayName(file);
    },
    formatSize(size) {
      return this.fileStore.formatSize(size);
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
    iconBgClass(file) {
      const f = this.displayName(file) || file.name || "";
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
      if (/\.(txt|md)$/.test(lower) || folder.includes("文档")) return "avatar-soft-blue";
      return "avatar-soft-warning";
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
  },
};
</script>