<template>
  <div class="hk-pg-header pg-header-wth-tab pt-7">
    <div class="d-flex">
      <div class="d-flex flex-wrap justify-content-between flex-1">
        <div class="mb-lg-0 mb-2 me-8">
          <h1 class="pg-title">欢迎回来</h1>
          <p>使用基于 caoba 组件的各种功能创建页面</p>
        </div>
        <div class="pg-header-action-wrap">
          <div class="input-group w-300p">
            <date-range-picker
              :dateRange="dateRange"
              :locale-data="{ format: 'm/dd hh:mm TT' }"
              :ranges="false"
              :time-picker="true"
              :time-picker24-hour="false"
              :opens="opens"
              :linked-calendars="true"
              :inputIcon="true"
            />
          </div>
        </div>
      </div>
    </div>

    <BNav class="nav-line nav-light" tabs>
      <BNavItem active>概览</BNavItem>
      <BNavItem>分析</BNavItem>
      <BNavItem>运营</BNavItem>
    </BNav>
  </div>
</template>

<script setup>
const dateRange = ref({
  startDate: new Date(),
  endDate: new Date(),
});

const opens = "left";
const drops = "down";
</script>
