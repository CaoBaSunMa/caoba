<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'invoiceapp-wrap',
        { 'invoiceapp-sidebar-toggle': showSidebar },
        { 'invoiceapp-setting-active': showSettingPannel },
      ]"
    >
      <InvoiceSidebar />
      <div class="invoiceapp-content">
        <div class="invoiceapp-detail-wrap">
          <slot
            name="invoice-header"
            :showSidebar="showSidebar"
            :toggleSidebar="toggleSidebar"
            :toggleSettingPannel="toggleSettingPannel"
          />
          <slot name="invoice-body" />
        </div>
      </div>

      <!-- Edit Info for create-invoice page -->
      <!-- <EditInfo /> -->
      <!-- /Edit Info -->

      <!-- Billed Edit Info for create-invoice page -->
      <!-- <BilledTo /> -->
      <!-- /Billed Edit Info -->
    </div>
  </div>
</template>

<script setup>
import InvoiceSidebar from "./InvoiceSidebar.vue";

// Reactive state for sidebar and setting panel visibility
const showSidebar = ref(false);
const showSettingPannel = ref(false);

// Toggle functions
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleSettingPannel = () => {
  showSettingPannel.value = !showSettingPannel.value;
};
</script>
