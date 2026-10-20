<template>
  <FileManager>
    <template #body="{ toggleInfo }">
      <FmList @toggle-info="toggleInfo" />
    </template>
  </FileManager>
</template>

<script setup>
import FileManager from "@/components/file-manager/FileManager.vue";
import FmList from "@/components/file-manager/list/FmList.vue";
</script>
