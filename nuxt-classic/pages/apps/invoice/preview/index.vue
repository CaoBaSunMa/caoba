<template>
  <InvoiceLayout>
    <template #invoice-header="{ showSidebar, toggleSidebar }">
      <PreviewHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </template>
    <template #invoice-body>
      <InvoiceBody />
    </template>
  </InvoiceLayout>
</template>

<script setup>
import InvoiceLayout from "@/components/invoice/InvoiceLaout.vue";
import PreviewHeader from "@/components/invoice/preview/PreviewHeader.vue";
import InvoiceBody from "@/components/invoice/preview/InvoiceBody.vue";
</script>
