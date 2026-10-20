<script>
  import { onMount } from "svelte";
  import {
    IconArrowsSort,
    IconSortAscending,
    IconSortDescending,
  } from "@tabler/icons-svelte";
  import Pagination from "./Pagination.svelte";
  import { StarIcon } from "svelte-feather-icons";

  export let columns = [];
  export let data = [];
  export let sortable = false;
  export let selectable = false;
  export let starred = false;
  export let rowsPerPage = 10;
  export let classes = "";
  export let searchBar = false;
  export let searchQuery = "";
  export let stripedRows = false;
  export let stripedCols = false;
  export let hover = false;
  export let bordered = false;
  export let borderless = false;
  export let size = "";
  export let responsive = false;
  export let showPagination = false;
  export let paginatorSize = "";

  let selectedRows = [];
  let sortKey = null;
  let sortOrder = null;
  let currentPage = 1;
  let localSearchTerm = searchQuery || "";

  function requestSort(key) {
    if (sortKey === key) {
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortKey = key;
      sortOrder = "asc";
    }
  }

  function selectRow() {
    if (isAllSelected()) {
      selectedRows = [];
    } else {
      selectedRows = data.map((row) => row.id);
    }
  }

  function toggleStar(row) {
    row.starred = !row.starred;
  }

  function sortedData() {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
    });
  }

  function filteredData() {
    return sortedData().filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(localSearchTerm.toLowerCase())
    );
  }

  function paginatedData() {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData().slice(start, start + rowsPerPage);
  }

  function isAllSelected() {
    return data.length && selectedRows.length === data.length;
  }
</script>

{#if searchBar && !searchQuery}
  <div class="form-group mb-3" id="searchForm">
    <div class="row">
      <div class="col-md-3">
        <input
          type="search"
          class="form-control form-control-sm"
          placeholder="搜索"
          bind:value={localSearchTerm}
        />
      </div>
    </div>
  </div>
{/if}

<table
  class="hk-data-table table {classes} {stripedRows
    ? 'table-striped'
    : ''} {stripedCols ? 'table-striped-columns' : ''} {hover
    ? 'table-hover'
    : ''} {bordered ? 'table-bordered' : ''} {borderless
    ? 'table-borderless'
    : ''} {size === 'sm' ? 'table-sm' : ''} {responsive
    ? 'table-responsive'
    : ''}"
>
  <thead>
    <tr>
      {#if selectable || starred}
        <th>
          <input
            type="checkbox"
            class="form-check-input check-select-all fs-6 mb-0"
            on:change={selectRow}
            checked={isAllSelected()}
          />
        </th>
      {/if}
      {#each columns as column}
        <th
          on:click={() => column.sort && requestSort(column.accessor)}
          class={[
            sortKey === column.accessor && "text-primary",
            column.hidden && "d-none",
          ]}
        >
          <span class="d-flex">
            <span class="flex-grow-1">{column.title}</span>
            {#if column.sort}
              {#if sortKey === column.accessor}
                {#if sortOrder === "asc"}
                  <IconSortAscending size={14} stroke-width={2.5} />
                {:else if sortOrder === "desc"}
                  <IconSortDescending size={14} stroke-width={2.5} />
                {:else}
                  <IconArrowsSort size={14} stroke-width={2.5} />
                {/if}
              {:else}
                <IconArrowsSort size={14} stroke-width={2.5} />
              {/if}
            {/if}
          </span>
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each paginatedData() as row (row.id)}
      <tr class:selected={selectedRows.includes(row.id)}>
        {#if selectable || starred}
          <td>
            <div class="d-flex align-items-center">
              <input
                type="checkbox"
                class="form-check-input fs-6 mb-0"
                bind:group={selectedRows}
                value={row.id}
              />
              {#if starred}
                <span
                  class="ms-2 mt-1"
                  on:click={() => toggleStar(row)}
                  role="button"
                >
                  <span class="fav-star {row.starred ? 'marked' : ''}">
                    <StarIcon />
                  </span>
                </span>
              {/if}
            </div>
          </td>
        {/if}
        {#each columns as column}
          <td class={column.tdClass} class:d-none={column.hidden}>
            {#if column.cellFormatter}
              {#await column.cellFormatter(row[column.accessor], row) then formattedValue}
                {@html formattedValue}
              {/await}
            {:else}
              {row[column.accessor]}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

{#if showPagination}
  <Pagination
    totalRows={filteredData().length}
    {rowsPerPage}
    bind:currentPage
    size={paginatorSize}
  />
{/if}
