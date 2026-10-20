<template>
  <div class="todo-body">
    <div class="nicescroll-bar">
      <div ref="splitContainer" class="split-wrap">
        <GanttTable />
        <GanttChart />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Split from "split.js";
import GanttTable from "./GanttTable.vue";
import GanttChart from "./GanttChart.vue";

export default {
  name: "GanttBody",
  components: {
    GanttTable,
    GanttChart,
  },
  setup() {
    const splitContainer = ref(null);

    onMounted(() => {
      Split(["#split_1", "#split_2"], {
        sizes: [50, 50], // Initial split percentages
        minSize: 100, // Minimum size of a pane
        gutterSize: 7, // Size of the gutter
      });
    });

    return {
      splitContainer,
    };
  },
};
</script>
