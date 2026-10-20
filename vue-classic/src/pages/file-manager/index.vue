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

          <RouterView v-slot="{ Component }">
            <component :is="Component" @toggle-info="toggleInfo" />
          </RouterView>

          <FileInfo @toggle-info="toggleInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FmSidebar from "./FmSidebar.vue";
import FmHeader from "./FmHeader.vue";
import FileInfo from "./FileInfo.vue";
import { useFileStore } from "@/stores/fileStore";

export default {
  name: "FileManager",
  components: {
    FmSidebar,
    FmHeader,
    FileInfo,
  },
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  data() {
    return {
      showSidebar: false,
      showFileInfo: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },

    toggleInfo() {
      this.showFileInfo = !this.showFileInfo;
    },
  },
  mounted() {
    if (!this.fileStore.$state.files.length) {
      this.fileStore.loadView("my-space");
    }
  },
};
</script>
