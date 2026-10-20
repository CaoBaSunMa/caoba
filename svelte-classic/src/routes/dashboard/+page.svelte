<script>
  import ActiveUser from "../../components/dashboard/ActiveUser.svelte";
  import AudienceOverview from "../../components/dashboard/AudienceOverview.svelte";
  import CustomerTable from "../../components/dashboard/CustomerTable.svelte";
  import ReturningCustomer from "../../components/dashboard/ReturningCustomer.svelte";
  // import DateRangePicker from "$lib/components/date-range-picker/DateRangePicker.svelte";

  let selectedStart = new Date();
  let selectedEnd = new Date();
</script>

<!-- <ChatBoatInterface :show="false" /> -->
<div class="container-xxl">
  <!-- Page Header -->
  <div class="hk-pg-header pg-header-wth-tab pt-7">
    <div class="d-flex">
      <div class="d-flex flex-wrap justify-content-between flex-1">
        <div class="mb-lg-0 mb-2 me-8">
          <h1 class="pg-title">欢迎回来</h1>
          <p>
            使用 caoba 组件的多种功能来创建页面
          </p>
        </div>
        <div class="pg-header-action-wrap">
          <div class="input-group w-300p">
            <!-- <DateRangePicker bind:startDate={selectedStart} bind:endDate={selectedEnd} /> -->
            <!-- <date-range-picker
                  :dateRange="dateRange"
                  :locale-data="{ format: 'm/dd hh:mm TT' }"
                  :ranges="false"
                  :time-picker="true"
                  :time-picker24-hour="false"
                  :opens="opens"
                  :linked-calendars="true"
                  :inputIcon="true"
                /> -->
          </div>
        </div>
      </div>
    </div>
    <ul class="nav nav-line nav-light nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#">
          <span class="nav-link-text">概览</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#">
          <span class="nav-link-text">分析</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#">
          <span class="nav-link-text">运营</span>
        </a>
      </li>
    </ul>
  </div>
  <!-- /Page Header -->

  <!-- Page Body -->
  <div class="hk-pg-body">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab_block_1">
        <div class="row">
          <div class="col-xxl-9 col-lg-8 col-md-7 mb-md-4 mb-3">
            <AudienceOverview />
          </div>
          <div class="col-xxl-3 col-lg-4 col-md-5 mb-md-4 mb-3">
            <ReturningCustomer />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-md-4 mb-3">
            <ActiveUser />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-md-4 mb-3">
            <CustomerTable />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Body -->
</div>
