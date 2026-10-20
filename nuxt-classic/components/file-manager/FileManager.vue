<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'fmapp-wrap',
        { 'fmapp-sidebar-toggle': showSidebar, 'fmapp-info-active': showFileInfo },
      ]"
    >
      <FmSidebar />
      <div class="fmapp-content">
        <div class="fmapp-detail-wrap">
          <FmHeader
            :showSidebar="showSidebar"
            @toggle-sidebar="toggleSidebar"
            :showInfo="showFileInfo"
            @toggle-info="toggleInfo"
          />
          <slot name="body" :toggleInfo="toggleInfo" />
          <FileInfo @toggle-info="toggleInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FmSidebar from "./FmSidebar.vue";
import FmHeader from "./FmHeader.vue";
import FileInfo from "./FileInfo.vue";

// Reactive state
const showSidebar = ref(false);
const showFileInfo = ref(false);

// Methods
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleInfo = () => {
  showFileInfo.value = !showFileInfo.value;
};
</script>
