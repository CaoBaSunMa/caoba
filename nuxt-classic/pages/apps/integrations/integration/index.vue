<template>
  <IntegrationsLayout>
    <template #integration-header="{ showSidebar, toggleSidebar }">
      <IntegrationHeader :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </template>
    <template #integration-body>
      <IntegratedApps />
    </template>
  </IntegrationsLayout>
</template>

<script setup>
import IntegrationHeader from "~/components/integrations/integration/IntegrationHeader.vue";
import IntegratedApps from "~/components/integrations/integration/IntegratedApps.vue";
import IntegrationsLayout from "~/components/integrations/IntegrationsLayout.vue";
</script>
