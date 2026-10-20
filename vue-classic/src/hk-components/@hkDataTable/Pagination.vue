<template>
  <div class="row">
    <div class="col-sm-12 col-md-5">
      <span class="dataTables_info">{{ displayRange }}</span>
    </div>
    <div class="col-sm-12 col-md-7">
      <nav aria-label="分页导航">
        <ul :class="['pagination custom-pagination d-flex justify-content-end', `pagination-${size}`]">
          <!-- 上一页 -->
          <li class="page-item" :class="{ disabled: currentPage <= 1 }">
            <a class="page-link" href="javascript:void(0);" aria-label="上一页" @click="changePage(currentPage - 1)">
              <span aria-hidden="true">
                <i class="ri-arrow-left-s-line" />
              </span>
            </a>
          </li>

          <!-- 首页 -->
          <li v-if="startPage > 1" class="page-item">
            <a class="page-link" href="javascript:void(0);" @click="changePage(1)">1</a>
          </li>
          <li v-if="startPage > 2" class="page-item disabled">
            <span class="page-link">...</span>
          </li>

          <!-- 页码 -->
          <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: page === currentPage }">
            <a class="page-link" href="javascript:void(0);" @click="changePage(page)">{{ page }}</a>
          </li>

          <!-- 末尾 -->
          <li v-if="endPage < totalPages - 1" class="page-item disabled">
            <span class="page-link">...</span>
          </li>
          <li v-if="endPage < totalPages" class="page-item">
            <a class="page-link" href="javascript:void(0);" @click="changePage(totalPages)">{{ totalPages }}</a>
          </li>

          <!-- 下一页 -->
          <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
            <a class="page-link" href="javascript:void(0);" aria-label="下一页" @click="changePage(currentPage + 1)">
              <span aria-hidden="true">
                <i class="ri-arrow-right-s-line" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    totalRows: Number,
    currentPage: Number,
    size: {
      type: String,
      default: 'md'
    },
    rowsPerPage: {
      type: Number,
      default: 10
    }
  },
  emits: ['update:currentPage'],
  setup(props, { emit }) {
    const totalPages = computed(() => Math.ceil(props.totalRows / props.rowsPerPage));
    const startItem = computed(() => (props.currentPage - 1) * props.rowsPerPage + 1);
    const endItem = computed(() => Math.min(props.currentPage * props.rowsPerPage, props.totalRows));
    const displayRange = computed(() => `第 ${startItem.value} - ${endItem.value} 条 / 共 ${props.totalRows} 条`);

    // 可见页码窗口（最多显示5个页码）
    const visiblePages = computed(() => {
      const total = totalPages.value;
      const current = props.currentPage;
      const delta = 2;
      const range = [];
      for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
        range.push(i);
      }
      return range;
    });

    const startPage = computed(() => visiblePages.value[0] || 1);
    const endPage = computed(() => visiblePages.value[visiblePages.value.length - 1] || 1);

    function changePage(page) {
      if (page > 0 && page <= totalPages.value) {
        emit('update:currentPage', page);
      }
    }

    return {
      totalPages,
      visiblePages,
      startPage,
      endPage,
      changePage,
      displayRange
    };
  }
};
</script>