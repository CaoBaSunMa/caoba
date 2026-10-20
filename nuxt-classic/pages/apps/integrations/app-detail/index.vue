<template>
  <IntegrationsLayout>
    <template #integration-header="{ showSidebar, toggleSidebar }">
      <AppHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </template>
    <template #integration-body>
      <AppDetails />
    </template>
  </IntegrationsLayout>
</template>

<script setup>
import AppDetails from "~/components/integrations/app-detail/AppDetails.vue";
import AppHeader from "~/components/integrations/app-detail/AppHeader.vue";
import IntegrationsLayout from "~/components/integrations/IntegrationsLayout.vue";
</script>
