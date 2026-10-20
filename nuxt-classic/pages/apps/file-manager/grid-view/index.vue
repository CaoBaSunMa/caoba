<template>
  <FileManager>
    <template #body="{ toggleInfo }">
      <FmGrid @toggle-info="toggleInfo" />
    </template>
  </FileManager>
</template>

<script setup>
import FileManager from "@/components/file-manager/FileManager.vue";
import FmGrid from "@/components/file-manager/grid/FmGrid.vue";
</script>
