import React, { useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import * as d3 from "d3";
import "./Graph.css";
const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    d3.csv("./dataset.csv").then((datapoints) => {
      const finalData = simpleDownsample(datapoints, 7);
      console.log(datapoints);
      console.log(finalData);
      const timestamp = [];
      const profit = [];

      for (let i = 0; i < finalData.length; i++) {
        timestamp.push(finalData[i]["Timestamp"].slice(0, 10));
        profit.push(finalData[i]["Profit Percentage"]);
      }
      // Set up the chart
      console.log(profit);
      const ctx = chartRef.current.getContext("2d");
      var gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(37, 205, 37, 0.4)");
      gradient.addColorStop(1, "rgba(37, 205, 37, 0)");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: timestamp,
          datasets: [
            {
              label: "Profit Percentage",
              data: profit,
              borderColor: "#25CD25",
              borderWidth: 4,
              borderDash: [8, 5],
              fill: true,
              backgroundColor: gradient,
            },
          ],
        },
        options: {
          scales: {
            x: {},
          },
        },
      });
    });
  }, []);

  function simpleDownsample(data, threshold) {
    const dataSize = data.length;

    if (dataSize <= threshold) {
      return data;
    }

    const downsampledData = [];
    const bucketSize = Math.ceil(dataSize / threshold);

    for (let i = 0; i < dataSize; i += bucketSize) {
      const bucketEnd = Math.min(i + bucketSize, dataSize);

      const selectedTimestamp = data[i].Timestamp;

      let maxProfitPercentage = -Infinity;

      for (let j = i; j < bucketEnd; j++) {
        maxProfitPercentage = Math.max(
          maxProfitPercentage,
          data[j]["Profit Percentage"]
        );
      }

      downsampledData.push({
        Timestamp: selectedTimestamp,
        "Profit Percentage": maxProfitPercentage,
      });
    }

    return downsampledData;
  }

  return (
    <div className="graph">
      <h2>Growth</h2>
      <canvas
        id="chart"
        style={{
          display: "block",
          boxSizing: "border-box",
          height: "280px",
          width: "544px",
          marginTop: "-32px",
          marginLeft: "0",
        }}
        ref={chartRef}
      ></canvas>
    </div>
  );
};

export default Graph;
