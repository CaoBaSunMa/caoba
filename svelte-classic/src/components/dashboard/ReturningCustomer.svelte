<script>
  import ReturninCustomerChart from "./chart-data/ReturninCustomerChart.svelte";
</script>

<div class="card card-border mb-0 h-100">
  <div class="card-header card-header-action">
    <h6>回头客</h6>
    <div class="card-action-wrap">
      <a
        class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="icon">
          <feather-icon name="more-vertical"> </feather-icon>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a class="dropdown-item" href="#">操作</a>
        <a class="dropdown-item" href="#">另一个操作</a>
        <a class="dropdown-item" href="#">此处的其他选项</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">分隔链接</a>
      </div>
    </div>
  </div>
  <div class="card-body text-center">
    <!-- chart -->
    <ReturninCustomerChart />
    <!-- chart -->
    <div class="d-inline-block mt-4">
      <div class="mb-4">
        <span class="d-block badge-status lh-1">
          <span
            class="badge bg-primary badge-indicator badge-indicator-nobdr d-inline-block"
          ></span>
          <span class="badge-label d-inline-block">自然流量</span>
        </span>
        <span class="d-block text-dark fs-5 fw-medium mb-0 mt-1">$243.50</span>
      </div>
      <div>
        <span class="badge-status lh-1">
          <span
            class="badge bg-primary-light-2 badge-indicator badge-indicator-nobdr"
          ></span>
          <span class="badge-label">营销</span>
        </span>
        <span class="d-block text-dark fs-5 fw-medium mb-0 mt-1">$1469</span>
      </div>
    </div>
  </div>
</div>
