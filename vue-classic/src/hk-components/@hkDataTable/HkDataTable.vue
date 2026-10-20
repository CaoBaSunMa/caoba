<template>
  <div v-if="searchBar && !searchQuery" class="form-group mb-3" id="searchForm">
    <div class="row">
      <div class="col-md-3">
        <!-- <input type="search" class="form-control form-control-sm" placeholder="Search" v-model="searchTerm"
                        @change="setSearchTerm"> -->
        <input
          type="search"
          class="form-control form-control-sm"
          placeholder="搜索"
          v-model="localSearchTerm"
        />
      </div>
    </div>
  </div>

  <table
    :class="[
      'hk-data-table table',
      classes,
      {
        'table-striped': stripedRows,
        'table-striped-columns': stripedCols,
        'table-hover': hover,
        'table-bordered': bordered,
        'table-borderless': borderless,
        'table-sm': size === 'sm',
        'table-responsive': responsive,
      },
    ]"
  >
    <thead>
      <tr>
        <th v-if="selectable || starred">
          <input
            type="checkbox"
            class="form-check-input check-select-all fs-6 mb-0"
            @change="selectRow"
            :checked="isAllSelected"
          />
        </th>
        <th
          v-for="column in columns"
          :key="column.accessor"
          @click="column.sort && requestSort(column.accessor)"
          :class="[
            {
              'd-none': column.hidden,
              'text-primary': sortOrder !== null && sortKey === column.accessor,
            },
          ]"
        >
          <span class="d-flex">
            <span class="flex-grow-1">
              {{ column.title }}
            </span>
            <span v-if="column.sort">
              <span v-if="sortKey === column.accessor">
                <IconSortAscending
                  :size="14"
                  stroke-width="2.5"
                  v-if="sortOrder === 'asc'"
                />
                <IconSortDescending
                  :size="14"
                  stroke-width="2.5"
                  v-else-if="sortOrder === 'desc'"
                />
                <IconArrowsSort :size="14" stroke-width="2.5" v-else />
              </span>
              <span v-else>
                <IconArrowsSort :size="14" stroke-width="2.5" />
              </span>
            </span>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in paginatedData"
        :key="row.id"
        :class="{ selected: selectedRows.includes(row.id) }"
      >
        <td v-if="selectable || starred">
          <div class="d-flex align-items-center">
            <input
              type="checkbox"
              class="form-check-input fs-6 mb-0"
              :value="row.id"
              v-model="selectedRows"
            />
            <span v-if="starred" class="ms-2 mt-1" @click="toggleStar(row)" role="button">
              <span :class="['fav-star', { marked: row.starred }]">
                <feather-icon name="star" />
              </span>
            </span>
          </div>
        </td>
        <!-- <td v-if="starred">
                        <span @click="toggleStar(row)" role="button">
                            <span :class="['feather-icon fav-star', { 'marked': row.starred }]">
                                <feather-icon name="star" />
                            </span>
                        </span>
                    </td> -->
        <!-- <td v-for="column in columns" :key="column.accessor">
                        <component :is="column.cellFormatter ? 'FormattedCell' : 'span'" :row="row" :column="column" />
                        <template>{{ column }}</template>
</td> -->

        <td
          v-for="column in columns"
          :key="column.accessor"
          :class="[{ 'd-none': column.hidden }, column.tdClass]"
        >
          <template v-if="column.cellFormatter">
            <slot
              :name="column.cellFormatter"
              :cell-value="row[column.accessor]"
              :row="row"
            ></slot>
          </template>
          <template v-else>
            {{ row[column.accessor] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination
    v-if="showPagination"
    :total-rows="filteredData.length"
    :rowsPerPage="rowsPerPage"
    v-model:current-page="currentPage"
    :size="paginatorSize"
  />
</template>

<script>
import Pagination from "./Pagination.vue";
import { IconArrowsSort, IconSortAscending, IconSortDescending } from "@tabler/icons-vue";

export default {
  components: {
    Pagination,
    IconArrowsSort,
    IconSortAscending,
    IconSortDescending,
  },
  emits: ["selection-change", "star-toggle"],
  props: {
    columns: Array,
    data: Array,
    sortable: Boolean,
    selectable: Boolean,
    starred: Boolean,
    rowsPerPage: {
      type: Number,
      default: 10,
    },
    classes: String,
    searchBar: {
      type: Boolean,
      default: false,
    },
    searchQuery: String,
    //table options
    stripedRows: Boolean,
    stripedCols: Boolean,
    hover: Boolean,
    bordered: Boolean,
    borderless: Boolean,
    size: String,
    responsive: Boolean,
    //pagination
    showPagination: {
      type: Boolean,
      default: false,
    },
    paginatorSize: String,
  },
  data() {
    return {
      selectedRows: [],
      sortKey: null,
      sortOrder: null,
      currentPage: 1,
      // Initialize localSearchTerm based on searchQuery or searchTerm props
      localSearchTerm: this.searchQuery || "",
    };
  },
  methods: {
    requestSort(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortOrder = "asc";
      }
    },
    selectRow() {
      if (this.isAllSelected) {
        this.selectedRows = [];
      } else {
        this.selectedRows = this.data.map((row) => row.id);
      }
    },
    toggleStar(row) {
      row.starred = !row.starred;
      this.$emit("star-toggle", row);
    },
  },
  computed: {
    sortedData() {
      if (!this.sortKey) return this.data;
      return [...this.data].sort((a, b) => {
        const valueA = a[this.sortKey];
        const valueB = b[this.sortKey];

        // Handle different data types (e.g., strings, numbers, dates)
        if (typeof valueA === "string" && typeof valueB === "string") {
          const comparison = valueA.localeCompare(valueB, undefined, {
            sensitivity: "base",
          });
          return this.sortOrder === "asc" ? comparison : -comparison;
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return this.sortOrder === "asc" ? valueA - valueB : valueB - valueA;
        } else if (valueA instanceof Date && valueB instanceof Date) {
          return this.sortOrder === "asc" ? valueA - valueB : valueB - valueA;
        } else {
          // Fallback to default comparison (may not be ideal for all data types)
          return this.sortOrder === "asc" ? -1 : 1;
        }
      });
    },

    filteredData() {
      return this.sortedData.filter((row) => {
        const rowData = Object.values(row).join(" ").toLowerCase(); // Combine all values into a single string
        const searchTerms = this.localSearchTerm.toLowerCase().split(" "); // Split search term by spaces
        // Check if all parts of the search term are present in the row data
        return searchTerms.every((term) => rowData.includes(term));
      });
    },

    // filteredData() {
    //     // Implement any filtering logic here
    //     return this.sortedData.filter(row => {
    //         return Object.values(row).some(value => {
    //             if (typeof value === 'string') {
    //                 return value.toLowerCase().includes(this.searchTerm.toLowerCase());
    //             }
    //             return false;
    //         });
    //     });

    //     // return this.sortedData;
    // },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.filteredData.slice(start, end);
    },
    isAllSelected() {
      return this.data.length && this.selectedRows.length === this.data.length;
    },
  },

  watch: {
    // Watch for changes in searchTerm prop and update localSearchTerm accordingly
    searchQuery(newSearchTerm) {
      this.localSearchTerm = newSearchTerm;
    },
    // 行选择变化时向上通知（供批量操作使用）
    selectedRows: {
      deep: true,
      handler(newVal) {
        this.$emit("selection-change", Array.isArray(newVal) ? [...newVal] : []);
      },
    },
  },
};
</script>

<!-- // script with setup() -->
<!-- <script>
import { ref, computed } from 'vue';
import Pagination from './Pagination.vue';
import { IconArrowsSort, IconSortAscending, IconSortDescending } from '@tabler/icons-vue';

export default {
    components: {
        Pagination,
        IconArrowsSort,
        IconSortAscending,
        IconSortDescending,

    },
    props: {
        columns: Array,
        data: Array,
        sortable: Boolean,
        selectable: Boolean,
        starred: Boolean,
        rowsPerPage: Number,
        classes: String,
    },
    setup(props) {
        const selectedRows = ref([]);
        const sortKey = ref(null);
        const sortOrder = ref(null);
        const currentPage = ref(1);

        console.log('order:', sortOrder.value);



        // const sortedData = computed(() => {
        //     if (!sortKey.value) return props.data;
        //     return [...props.data].sort((a, b) => {
        //         if (a[sortKey.value] < b[sortKey.value]) {
        //             return sortOrder.value === 'asc' ? -1 : 1;
        //         }
        //         if (a[sortKey.value] > b[sortKey.value]) {
        //             return sortOrder.value === 'asc' ? 1 : -1;
        //         }
        //         return 0;
        //     });
        // });

        const sortedData = computed(() => {
            if (!sortKey.value) return props.data;
            return [...props.data].sort((a, b) => {
                const valueA = a[sortKey.value];
                const valueB = b[sortKey.value];

                // Handle different data types (e.g., strings, numbers, dates)
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    const comparison = valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
                    return sortOrder.value === 'asc' ? comparison : -comparison;
                } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                    return sortOrder.value === 'asc' ? valueA - valueB : valueB - valueA;
                } else if (valueA instanceof Date && valueB instanceof Date) {
                    return sortOrder.value === 'asc' ? valueA - valueB : valueB - valueA;
                } else {
                    // Fallback to default comparison (may not be ideal for all data types)
                    return sortOrder.value === 'asc' ? -1 : 1;
                }
            });
        });

        const filteredData = computed(() => {
            // Implement any filtering logic here
            return sortedData.value;
        });

        const paginatedData = computed(() => {
            const start = (currentPage.value - 1) * props.rowsPerPage;
            const end = start + props.rowsPerPage;
            return filteredData.value.slice(start, end);
        });

        const isAllSelected = computed(() => {
            return props.data.length && selectedRows.value.length === props.data.length;
        });

        function requestSort(key) {
            if (sortKey.value === key) {
                sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
            } else {
                sortKey.value = key;
                sortOrder.value = 'asc';
            }

            console.log('order:', sortOrder.value);

        }

        function toggleAll() {
            if (isAllSelected.value) {
                selectedRows.value = [];
            } else {
                selectedRows.value = props.data.map(row => row.id);
            }
        }

        function toggleStar(row) {
            row.starred = !row.starred;
        }

        return {
            selectedRows,
            sortKey,
            sortOrder,
            currentPage,
            sortedData,
            filteredData,
            paginatedData,
            isAllSelected,
            requestSort,
            toggleAll,
            toggleStar,

        };
    }
    // ... rest of the component logic
};
</script> -->
