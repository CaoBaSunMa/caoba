<template>
  <div class="hk-pg-body py-0">
    <div :class="['galleryapp-wrap', { 'galleryapp-sidebar-toggle': !showSidebar }]">
      <GallerySidebar />
      <div class="galleryapp-content">
        <div class="galleryapp-detail-wrap">
          <GalleryHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <GalleryBody />
        </div>
        <!-- Add Category -->
        <AddCategory />
        <!-- /Add Category -->
      </div>
    </div>
  </div>
</template>

<script>
import GallerySidebar from "./GallerySidebar.vue";
import GalleryHeader from "./GalleryHeader.vue";
import GalleryBody from "./GalleryBody.vue";
import AddCategory from "./AddCategory.vue";

export default {
  name: "Gallery",
  components: {
    GallerySidebar,
    GalleryHeader,
    GalleryBody,
    AddCategory,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
