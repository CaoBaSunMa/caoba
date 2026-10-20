<template>
  <div class="hk-pg-body">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab_block_1">
        <BRow>
          <BCol xxl="9" lg="8" md="7" class="mb-md-4 mb-3">
            <AudienceOverview />
          </BCol>
          <BCol xxl="3" lg="4" md="5" class="mb-md-4 mb-3">
            <ReturningCustomer />
          </BCol>
        </BRow>
        <BRow>
          <BCol md="12" class="mb-md-4 mb-3">
            <ActiveUsers />
          </BCol>
        </BRow>
        <BRow>
          <BCol md="12" class="mb-md-4 mb-3">
            <CustomerTable />
          </BCol>
        </BRow>
      </div>
    </div>
  </div>
</template>

<script setup>
//components
import AudienceOverview from "@/components/dashboard/AudienceOverview.vue";
import ReturningCustomer from "@/components/dashboard/ReturningCustomer.vue";
import ActiveUsers from "@/components/dashboard/ActiveUsers.vue";
import CustomerTable from "@/components/dashboard/CustomerTable.vue";
</script>
