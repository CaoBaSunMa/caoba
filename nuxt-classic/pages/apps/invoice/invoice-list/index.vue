<template>
  <InvoiceLayout>
    <template #invoice-header="{ showSidebar, toggleSidebar }">
      <InvoiceListHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    </template>
    <template #invoice-body>
      <InvoiceList />
    </template>
  </InvoiceLayout>
</template>

<script setup>
import InvoiceLayout from "@/components/invoice/InvoiceLaout.vue";
import InvoiceList from "@/components/invoice/invoice-list/InvoiceList.vue";
import InvoiceListHeader from "@/components/invoice/invoice-list/InvoiceListHeader.vue";
</script>
