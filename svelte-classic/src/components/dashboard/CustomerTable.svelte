<script>
  import { onMount } from "svelte";
  import HkDataTable from "../../hk-components/@hk-data-table/HkDataTable.svelte";
  import { contactStore } from "../../lib/stores/contactStore.js";
  import { writable } from "svelte/store";

  let searchTerm = writable("");
  let columns = [
    { key: "name", label: "客户名称", sortable: true },
    { key: "email", label: "邮箱", sortable: true },
    { key: "phone", label: "电话", sortable: false },
    { key: "company", label: "公司", sortable: true },
    { key: "status", label: "状态", sortable: true },
  ];
  let data = $state([]);

  onMount(() => {
    contactStore.fetchContacts();
    const unsubscribe = contactStore.subscribe((value) => {
      data = (value.contacts || []).map(c => ({
        name: `${c.firstName || ''} ${c.lastName || ''}`.trim() || '未知',
        email: c.email || '',
        phone: c.phone || '',
        company: c.company || '',
        status: c.starred ? 'VIP' : '普通',
      }));
    });
    return unsubscribe;
  });
</script>

<div class="card card-border mb-0 h-100">
  <div class="card-header card-header-action">
    <h6>
      新客户
      <span class="badge badge-sm badge-light ms-1">240</span>
    </h6>
    <div class="card-action-wrap">
      <button class="btn btn-sm btn-outline-light">
        <span>
          <span class="icon">
            <feather-icon name="upload"></feather-icon>
          </span>
          <span class="btn-text">导入</span>
        </span>
      </button>
      <button class="btn btn-sm btn-primary ms-3">
        <span>
          <span class="icon">
            <feather-icon name="plus"></feather-icon>
          </span>
          <span class="btn-text">添加</span>
        </span>
      </button>
    </div>
  </div>
  <div class="card-body">
    <div class="contact-list-view">
      <div class="row">
        <div class="col-7 mb-3">
          <div class="contact-toolbar-left">
            <div class="d-xxl-flex d-none align-items-center">
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="基本轮廓按钮示例"
              >
                <button type="button" class="btn btn-outline-light active">
                  查看全部
                </button>
                <button type="button" class="btn btn-outline-light"
                  >已监控</button
                >
                <button type="button" class="btn btn-outline-light"
                  >未监控</button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-5 mb-3">
          <div class="contact-toolbar-right d-flex justify-content-end">
            <div class="dataTables_filter">
              <label>
                <input
                  type="search"
                  class="form-control form-control-sm"
                  placeholder="搜索"
                  aria-controls="datable_1"
                  bind:value={searchTerm}
                />
              </label>
            </div>
            <button class="btn btn-sm btn-outline-light ms-3">
              <span>
                <span class="icon">
                  <i class="bi bi-filter"></i>
                </span>
                <span class="btn-text">筛选</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 table-responsive">
          <HkDataTable
            {columns}
            {data}
            selectable
            showPagination
            paginatorSize="sm"
            rowsPerPage={4}
            responsive
            classes="nowrap w-100 mb-5"
          />
        </div>
      </div>
    </div>
  </div>
</div>
