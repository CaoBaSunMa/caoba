<template>
  <div class="row">
    <div class="col-sm-12 col-md-5">
      <span class="dataTables_info">{{ displayRange }}</span>
    </div>
    <div class="col-sm-12 col-md-7">
      <nav aria-label="Page navigation">
        <ul :class="['pagination custom-pagination pagination-simple d-flex justify-content-end', `pagination-${size}`]">
          <!-- Display data range -->
          <!-- <li class="page-item">
            <span class="page-link">{{ displayRange }}</span>
          </li> -->

          <li class="page-item" :class="{ disabled: currentPage <= 1 }">
            <a class="page-link" href="javascript:void(0);" aria-label="Previous" @click="changePage(currentPage - 1)">
              <span aria-hidden="true">
                <i class="ri-arrow-left-s-line" />
              </span>
            </a>
          </li>

          <!-- For display multiple page numbers -->
          <!-- <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
        <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
      </li> -->

          <!-- For display only current page numbers -->
          <li class="page-item active">
            <a class="page-link" href="#" @click="changePage(page)">{{ currentPage }}</a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
            <a class="page-link" href="javascript:void(0);" aria-label="Next" @click="changePage(currentPage + 1)">
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
    const displayRange = computed(() => `${startItem.value} - ${endItem.value} of ${props.totalRows}`);

    function changePage(page) {
      if (page > 0 && page <= totalPages.value) {
        emit('update:currentPage', page);
      }
    }

    return {
      totalPages,
      changePage,
      displayRange
    };
  }
};
</script>