<template>
  <div ref="dropzoneRef" class="dropzone">
    <span class="dz-default dz-message">
      <div class="row text-muted mb-2">
        <div class="col dz-icon">
          <!-- You can use a custom icon here -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
      </div>
      <div class="row">
        <!-- Slot for custom content -->
        <div class="col">
          <slot />
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Dropzone from "dropzone";
// import 'dropzone/dist/dropzone.css';

export default {
  name: "HkDropzone",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  setup() {
    const dropzoneRef = ref(null);
    const previewTemplate = `
      <div class="dz-preview dz-file-preview">
        <img data-dz-thumbnail alt="img" class="img-fluid rounded-circle" />
      </div>
    `;

    onMounted(() => {
      new Dropzone(dropzoneRef.value, {
        // Dropzone options here
        url: "no-url",
        acceptedFiles: "image/*",
        autoProcessQueue: false,
        uploadprogress: 100,
        addRemoveLinks: true,
        previewTemplate: previewTemplate,
        // Other configurations...
      });
    });

    return {
      dropzoneRef,
    };
  },
};
</script>

<style scoped>

</style>
