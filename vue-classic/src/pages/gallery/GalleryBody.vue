<template>
  <div class="gallery-body">
    <simplebar class="nicescroll-bar">
      <div v-if="galleryStore.$state.loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <div
        v-else-if="!galleryStore.mediaGroups.length"
        class="text-center py-5 text-secondary"
      >
        <i class="ri-image-line fs-1"></i>
        <p class="mt-2 mb-1">暂无媒体内容</p>
        <p class="fs-8 mb-3">
          {{
            activeViewMsg
          }}
        </p>
        <button class="btn btn-primary btn-sm" @click="openUpload">上传图片</button>
      </div>

      <template v-else>
        <div
          v-for="(data, index) in paginatedGroups"
          :key="index"
          class="collapse-simple"
        >
          <div class="card card-border">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                :href="[`#${data.collapseId}`]"
                aria-expanded="true"
              >
                <h5 class="mb-0">
                  {{ data.date }}（{{ data.images.length }}）
                </h5>
              </a>
            </div>
            <div :id="data.collapseId" class="collapse show">
              <div class="card-body">
                <lightgallery
                  :settings="galleyOptions"
                  class="row gx-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 hk-gallery"
                >
                  <div
                    v-for="img in data.images"
                    :key="img.id"
                    :data-src="previewFor(img) || '#'"
                    class="col"
                  >
                    <a href="#">
                      <div
                        v-if="galleryStore.mediaType(img) === 'image'"
                        class="card card-border gallery-img"
                        data-sub-html="#caption"
                        :data-src="previewFor(img) || '#'"
                        :style="tileStyle(img)"
                      ></div>

                      <div
                        v-else
                        class="card card-border gallery-img gallery-video"
                        :data-src="'#'"
                        :style="tileStyle(img)"
                      >
                        <i :class="typeIcon(img)" class="fs-1 text-white"></i>
                      </div>

                      <span class="gallery-caption text-truncate px-1">{{
                        galleryStore.displayName(img)
                      }}</span>
                      <span
                        class="gallery-star"
                        :class="{ marked: img.isStarred }"
                        @click.prevent="toggleStar(img)"
                      >
                        <feather-icon name="star"></feather-icon>
                      </span>
                    </a>
                  </div>
                </lightgallery>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <div v-if="totalPages > 1" class="d-flex justify-content-between align-items-center mt-3 px-3">
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
      </template>
    </simplebar>
  </div>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgComment from "lightgallery/plugins/comment";
import lgVideo from "lightgallery/plugins/video";

import { useGalleryStore } from "@/stores/galleryStore";

export default {
  name: "GalleryBody",
  components: {
    Lightgallery,
  },
  setup() {
    const galleryStore = useGalleryStore();
    return { galleryStore };
  },
  data() {
    return {
      previews: {},
      currentPage: 1,
      pageSize: 2,
      galleyOptions: {
        plugins: [lgFullscreen, lgAutoplay, lgZoom, lgShare, lgComment, lgVideo],
        speed: 500,
        mode: "lg-fade",
        thumbnail: false,
      },
    };
  },
  computed: {
    activeViewMsg() {
      const map = {
        gallery: "当前没有分类媒体，上传或切换分类试试",
        collections: "该分类暂无媒体，可上传图片后自动加入",
        shared: "暂无共享给我的媒体",
        starred: "暂无收藏的媒体，点亮星标即可收藏",
        trash: "回收站暂时为空",
      };
      return map[this.galleryStore.$state.activeView] || "暂无媒体";
    },
    paginatedGroups() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.galleryStore.mediaGroups.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.galleryStore.mediaGroups.length / this.pageSize);
    },
  },
  mounted() {
    if (!this.galleryStore.$state.media.length) {
      this.galleryStore.loadAll();
    }
    this.warmPreviews();
  },
  watch: {
    "galleryStore.$state.media": {
      deep: true,
      handler() {
        this.warmPreviews();
      },
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    typeIcon(file) {
      const t = this.galleryStore.mediaType(file);
      if (t === "video") return "ri-video-fill";
      if (t === "audio") return "ri-music-2-fill";
      return "ri-file-3-fill";
    },
    tileStyle(file) {
      if (this.galleryStore.mediaType(file) === "image") {
        const u = this.previewFor(file);
        if (u) return { backgroundImage: `url(${u})` };
        return { background: "linear-gradient(135deg,#7aa8ff 0%,#a5e5ff 100%)" };
      }
      return {
        background:
          "linear-gradient(135deg,#7d8cff 0%,#b7a7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    },
    previewFor(file) {
      return this.previews[file.id] || null;
    },
    async warmPreviews() {
      for (const file of this.galleryStore.$state.media) {
        if (this.previews[file.id] !== undefined) continue;
        if (this.galleryStore.mediaType(file) !== "image") continue;
        const url = await this.galleryStore.getBlobUrl(file);
        if (url) {
          this.previews[file.id] = url;
        } else {
          this.previews[file.id] = null;
        }
      }
    },
    async toggleStar(file) {
      try {
        await this.galleryStore.toggleStar(file);
      } catch (err) {
        console.error("[gallery] toggle star failed:", err);
      }
    },
    openUpload() {
      const btn = document.querySelector(".galleryapp-sidebar .btn-file input[type=file]");
      if (btn) btn.click();
    },
  },
};
</script>

<style scoped>
.gallery-caption {
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 4px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 4px;
}
</style>