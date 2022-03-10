import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((x) => {
    return x.value;
  });

  const overallMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((x) => {
        return (
          <ChartBar
            key={x.label}
            value={x.value}
            maxValue={overallMax}
            label={x.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
