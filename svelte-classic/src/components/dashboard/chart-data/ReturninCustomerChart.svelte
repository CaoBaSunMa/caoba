<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  let chart;
  let options = {
    stroke: {
      lineCap: "round",
    },
    chart: {
      height: 235,
      width: "100%",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "55%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            fontSize: "1.75rem",
            show: true,
            fontWeight: "500",
          },
          total: {
            show: true,
            formatter: function () {
              return ["$2249"];
            },
          },
        },
      },
    },
    colors: ["#007D88", "#25cba1"],
    labels: ["订阅", "餐饮"],
    series: [80, 75],
  }; // define your options here

  onMount(async () => {
    if (browser) {
      const ApexCharts = (await import("apexcharts")).default;
      const chartElement = document.getElementById("returningCustomerChart");
      chart = new ApexCharts(chartElement, options);
      await chart.render();
    }
  });

  // Cleanup on destroy
  onDestroy(() => {
    if (chart) chart.destroy();
  });
</script>

<div id="returningCustomerChart"></div>
