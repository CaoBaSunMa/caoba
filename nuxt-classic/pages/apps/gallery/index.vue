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

<script setup>
import GallerySidebar from "@/components/gallery/GallerySidebar.vue";
import GalleryHeader from "@/components/gallery/GalleryHeader.vue";
import GalleryBody from "@/components/gallery/GalleryBody.vue";
import AddCategory from "@/components/gallery/AddCategory.vue";

// Reactive state
const showSidebar = ref(false);

// Methods
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>
