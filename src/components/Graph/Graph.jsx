import React, { useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import * as d3 from "d3";
import { Line } from "react-chartjs-2";
import "./Graph.css";
const Graph = () => {
  const chartRef = useRef(null);
  //   d3.csv("./dataset.csv").then((datapoints) => {
  //     const timestamp = [];
  //     const profit = [];

  //     for(let i=0;i<datapoints.length;i+=1000) {
  //         timestamp.push(datapoints[i]["Timestamp"]);
  //         profit.push(datapoints[i].profit);
  //     }
  // const data1 = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //       {
  //         label: 'Dataset of Months',
  //         fill: false,
  //         lineTension: 0.1,
  //         backgroundColor: 'rgba(75,192,192,0.4)',
  //         borderColor: 'rgba(75,192,192,1)',
  //         borderCapStyle: 'butt',
  //         borderDash: [],
  //         borderDashOffset: 0.0,
  //         borderJoinStyle: 'miter',
  //         pointBorderColor: 'rgba(75,192,192,1)',
  //         pointBackgroundColor: '#fff',
  //         pointBorderWidth: 1,
  //         pointHoverRadius: 5,
  //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //         pointHoverBorderColor: 'rgba(220,220,220,1)',
  //         pointHoverBorderWidth: 2,
  //         pointRadius: 1,
  //         pointHitRadius: 10,
  //         data: timestamp
  //       }
  //     ]
  //   };
  //   const config = {
  //     type: 'line',
  //     data1,
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   };

  // render init block
  //   const myChart = new Chart(
  //     document.getElementById('myChart'),
  //     config
  //   );
  //   console.log(datapoints)
  //   });

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
            x: {
              // Specify 'linear' for a numeric x-axis
            },
          },
        },
      });
    });
  }, []);

  //   const downsample = (data) => {
  //     // Implement your downsampling logic here
  //     // This is just a placeholder, you might need a more sophisticated algorithm
  //     return data.filter((_, index) => index % 10 === 0);
  //   };
  function simpleDownsample(data, threshold) {
    const dataSize = data.length;

    if (dataSize <= threshold) {
      return data;
    }

    const downsampledData = [];
    const bucketSize = Math.ceil(dataSize / threshold);

    for (let i = 0; i < dataSize; i += bucketSize) {
      const bucketEnd = Math.min(i + bucketSize, dataSize);

      // Select the Timestamp of the first data point in the bucket
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

  function lttbDownsample(data, threshold) {
    const dataSize = data.length;

    if (dataSize <= 2 || threshold >= dataSize) {
      return data;
    }

    const sampledData = [];
    const samplingRate = dataSize / threshold;
    let sampledIndex = 0;

    for (let i = 0; i < dataSize; i += samplingRate) {
      sampledData.push(data[Math.floor(i)]);
    }
    const downsampledData = [];
    downsampledData.push(data[0]);
    let bucketSize = dataSize / (threshold - 2);
    let bucketStart = 1;
    let nextBucketStart = bucketSize;
    let maxAreaPoint = null;

    for (let i = 1; i < threshold - 1; i++) {
      let avgX = 0;
      let avgY = 0;
      let pointCount = 0;

      for (let j = bucketStart; j < nextBucketStart; j++) {
        avgX += data[j].Timestamp;
        avgY += data[j]["Profit Percentage"];
        pointCount++;
      }

      avgX /= pointCount;
      avgY /= pointCount;

      let area = 0;

      for (let j = bucketStart; j < nextBucketStart; j++) {
        area +=
          0.5 *
          Math.abs(
            (avgX - data[j].Timestamp) * (avgY - data[j]["Profit Percentage"]) -
              (avgX - data[j + 1].Timestamp) *
                (avgY - data[j]["Profit Percentage"])
          );
      }

      if (!maxAreaPoint || area > maxAreaPoint.area) {
        maxAreaPoint = {
          index: Math.floor(avgX),
          area: area,
        };
      }

      downsampledData.push(data[maxAreaPoint.index]);

      bucketStart = nextBucketStart;
      nextBucketStart += bucketSize;
    }

    downsampledData.push(data[dataSize - 1]);
    console.log(downsampledData);
    return downsampledData;
  }

  //   // Example usage:
  //   const originalData = /* Your dataset here */;
  //   const threshold = 1000; // Adjust the threshold based on your requirements

  //   const downsampledData = lttbDownsample(originalData, threshold);
  //   console.log(downsampledData);

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
