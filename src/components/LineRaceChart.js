import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const LineRaceChart = ({ items }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const sourceData = [
      ["score", "quantity", "product"],
      ...items.map((i) => [0, i.quantity, i.title]),
    ];
    const option = {
      title: {
        text: "本次購買",
        left: "center",
      },
      animationDuration: 3000,
      animationEasing: "cubicInOut",
      dataset: { source: sourceData },
      xAxis: { type: "value", name: "數量" },
      yAxis: { type: "category", inverse: true },
      visualMap: {
        orient: "horizontal",
        left: "center",
        min: 1,
        max: 10,
        text: ["max", "min"],
        dimension: 1,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"],
        },
      },
      series: [
        {
          realtimeSort: true,
          type: "bar",
          encode: { x: "quantity", y: "product" },
          label: {
            show: true,
            position: "right",
            valueAnimation: true,
          },
        },
      ],
    };
    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [items]);
  return (
    <div
      className="product_chart"
      ref={chartRef}
      style={{ width: "100%", minHeight: "400px" }}
    />
  );
};

export default LineRaceChart;
