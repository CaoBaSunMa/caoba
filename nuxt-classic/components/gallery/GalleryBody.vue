<template>
  <div class="gallery-body">
    <simplebar class="nicescroll-bar">
      <div v-for="(data, index) in galleryData" :key="index" class="collapse-simple">
        <BCard no-body class="card-border">
          <BCardHeader>
            <a role="button" v-b-toggle="data.collapseId">
              <h5 class="mb-0">{{ data.date }}</h5>
            </a>
          </BCardHeader>
          <BCollapse :id="data.collapseId" visible>
            <BCardBody>
              <lightgallery
                :settings="galleyOptions"
                class="row gx-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 hk-gallery"
              >
                <BCol
                  v-for="(img, index) in data.images"
                  :key="index"
                  :data-src="img.src"
                >
                  <a href="#">
                    <BCard
                      v-if="img.type === 'image'"
                      class="card-border gallery-img"
                      data-sub-html="#caption"
                      :data-src="img.src"
                      :style="{ backgroundImage: `url(${img.src})` }"
                    ></BCard>

                    <BCard
                      v-else
                      class="card-border gallery-img gallery-video"
                      data-sub-html="#caption"
                      :data-src="img.src"
                      :data-poster="img.src"
                      :style="{ backgroundImage: `url(${img.poster})` }"
                    ></BCard>

                    <span :class="['gallery-star', { marked: img.stared }]">
                      <feather-icon name="star"></feather-icon>
                    </span>
                  </a>
                </BCol>
              </lightgallery>
            </BCardBody>
          </BCollapse>
        </BCard>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
import Lightgallery from "lightgallery/vue";
// import plugins for lightgallary
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgComment from "lightgallery/plugins/comment";
import lgVideo from "lightgallery/plugins/video";

import { useFileStore } from "@/stores/fileStore";

const fileStore = useFileStore();

// Fetch files from API
onMounted(async () => {
  await fileStore.fetchFiles();
});

// Build gallery data from files
const galleryData = ref([]);
watch(() => fileStore.files, (files) => {
  const imageFiles = files.filter(f => f.type === '图片' || f.originalName?.match(/\.(png|jpg|jpeg|gif|webp)$/i));
  galleryData.value = [{
    date: '所有文件',
    collapseId: 'all-files',
    images: imageFiles.map(f => ({
      id: f.id,
      type: 'image',
      src: `http://localhost:8080/api/files/${f.id}/download`,
      stared: f.isStarred,
    })),
  }];
}, { immediate: true });

const galleyOptions = {
  plugins: [lgFullscreen, lgAutoplay, lgZoom, lgShare, lgComment, lgVideo],
  speed: 500,
  mode: "lg-fade",
  thumbnail: false,
};
</script>
