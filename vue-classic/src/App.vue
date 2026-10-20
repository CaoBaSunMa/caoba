<template>
  <RouterView />
</template>

<style>
/* 全局分页固定在底部 */
.simplebar-content-wrapper .pagination,
.nicescroll-bar .pagination {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  background: white !important;
  z-index: 1000 !important;
  padding: 0.5rem 1.25rem !important;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1) !important;
  display: flex !important;
  justify-content: flex-end !important;
}
.simplebar-content-wrapper .dataTables_info,
.nicescroll-bar .dataTables_info {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 50% !important;
  background: white !important;
  z-index: 1000 !important;
  padding: 0.5rem 1.25rem !important;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1) !important;
  display: flex !important;
  align-items: center !important;
}
</style>