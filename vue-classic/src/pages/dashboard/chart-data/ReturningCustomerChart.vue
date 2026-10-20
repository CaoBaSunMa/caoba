<template>
  <apexchart
    type="radialBar"
    height="235"
    width="100%"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      series: [80, 75],
      chartOptions: {
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
      },
    };
  },
};
</script>
