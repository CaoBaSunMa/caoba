<template>
  <InvoiceLayout>
    <template #invoice-header="{ showSidebar, toggleSidebar }">
      <TempHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </template>
    <template #invoice-body>
      <InvoiceTemplates />
    </template>
  </InvoiceLayout>
</template>

<script setup>
import InvoiceLayout from "@/components/invoice/InvoiceLaout.vue";
import InvoiceTemplates from "@/components/invoice/templates/InvoiceTemplates.vue";
import TempHeader from "@/components/invoice/templates/TempHeader.vue";
</script>
