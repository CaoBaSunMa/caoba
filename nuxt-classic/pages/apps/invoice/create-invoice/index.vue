<template>
  <InvoiceLayout>
    <template #invoice-header="{ showSidebar, toggleSidebar, toggleSettingPannel }">
      <InvoiceHeader
        :showSidebar="showSidebar"
        @toggle-sidebar="toggleSidebar"
        @toggle-setting-pannel="toggleSettingPannel"
      />
    </template>
    <template #invoice-body>
      <CreateInvoice />
    </template>
  </InvoiceLayout>
</template>

<script setup>
import InvoiceLayout from "@/components/invoice/InvoiceLaout.vue";
import CreateInvoice from "@/components/invoice/create-invoice/CreateInvoice.vue";
import InvoiceHeader from "@/components/invoice/create-invoice/InvoiceHeader.vue";
</script>
