<template>
  <IntegrationsLayout>
    <template #integration-header="{ showSidebar, toggleSidebar }">
      <AppsHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </template>
    <template #integration-body>
      <AllApps />
    </template>
  </IntegrationsLayout>
</template>

<script setup>
import AllApps from "~/components/integrations/all-apps/AllApps.vue";
import AppsHeader from "~/components/integrations/all-apps/AppsHeader.vue";
import IntegrationsLayout from "~/components/integrations/IntegrationsLayout.vue";
</script>
