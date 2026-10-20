<template>
  <BCard no-body class="card-border mb-0 h-100">
    <template #header class="card-header-action">
      <h6>回头客</h6>
      <div class="card-action-wrap">
        <!-- <a
          class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret"
          href="#"
          data-bs-toggle="dropdown"
        >
          <span class="icon">
            <feather-icon name="more-vertical"> </feather-icon>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div> -->

        <BDropdown
          variant="flush-dark"
          toggle-class="btn-icon btn-rounded flush-soft-hover"
          no-caret
        >
          <template #button-content>
            <span class="icon">
              <feather-icon name="more-vertical"> </feather-icon>
            </span>
          </template>
          <BDropdownItem>操作</BDropdownItem>
          <BDropdownItem>另一个操作</BDropdownItem>
          <BDropdownItem>此处的其他选项</BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem>分隔链接</BDropdownItem>
        </BDropdown>
      </div>
    </template>
    <BCardBody class="text-center">
      <!-- chart -->
      <ReturningCustomerChart />
      <!-- chart -->
      <div class="d-inline-block mt-4">
        <div class="mb-4">
          <span class="d-block badge-status lh-1">
            <HkBadge
              variant="primary"
              class="d-inline-block"
              indicator
              borderless
            ></HkBadge>
            <span class="badge-label d-inline-block">自然流量</span>
          </span>
          <span class="d-block text-dark fs-5 fw-medium mb-0 mt-1">$243.50</span>
        </div>
        <div>
          <span class="badge-status lh-1">
            <HkBadge class="bg-primary-light-2" indicator borderless></HkBadge>
            <span class="badge-label">营销</span>
          </span>
          <span class="d-block text-dark fs-5 fw-medium mb-0 mt-1">$1469</span>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup>
import ReturningCustomerChart from "./chart-data/ReturningCustomerChart.vue";
</script>
