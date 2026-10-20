<script>
  import { createEventDispatcher } from "svelte";

  export let totalRows = 0;
  export let currentPage = 1;
  export let size = "md";
  export let rowsPerPage = 10;

  const dispatch = createEventDispatcher();

  let totalPages = Math.ceil(totalRows / rowsPerPage);
  let startItem = (currentPage - 1) * rowsPerPage + 1;
  let endItem = Math.min(currentPage * rowsPerPage, totalRows);
  let displayRange = `${startItem} - ${endItem} / 共 ${totalRows} 条`;

  $: totalPages = Math.ceil(totalRows / rowsPerPage);
  $: startItem = (currentPage - 1) * rowsPerPage + 1;
  $: endItem = Math.min(currentPage * rowsPerPage, totalRows);
  $: displayRange = `${startItem} - ${endItem} / 共 ${totalRows} 条`;

  function changePage(page) {
    if (page > 0 && page <= totalPages) {
      dispatch("updateCurrentPage", page);
    }
  }
</script>

<div class="row">
  <div class="col-sm-12 col-md-5">
    <span class="dataTables_info">{displayRange}</span>
  </div>
  <div class="col-sm-12 col-md-7">
    <nav aria-label="Page navigation">
      <ul
        class="pagination custom-pagination pagination-simple d-flex justify-content-end pagination-{size}"
      >
        <!-- Previous Button -->
        <li class="page-item {currentPage <= 1 ? 'disabled' : ''}">
          <a
            class="page-link"
            href="javascript:void(0);"
            aria-label="Previous"
            on:click={() => changePage(currentPage - 1)}
          >
            <span aria-hidden="true">
              <i class="ri-arrow-left-s-line"></i>
            </span>
          </a>
        </li>

        <!-- Current Page -->
        <li class="page-item active">
          <a class="page-link" href="javascript:void(0);">{currentPage}</a>
        </li>

        <!-- Next Button -->
        <li class="page-item {currentPage >= totalPages ? 'disabled' : ''}">
          <a
            class="page-link"
            href="javascript:void(0);"
            aria-label="Next"
            on:click={() => changePage(currentPage + 1)}
          >
            <span aria-hidden="true">
              <i class="ri-arrow-right-s-line"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
