import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./RealTimeGraph.css";

const RealTimeGraph = () => {
  const [data, setData] = useState([]);

  const updateData = () => {
    const x = new Date().getTime();
    const y = Math.sin(x);
    setData((prevData) => [...prevData, { x, y }]);
  };

  useEffect(() => {
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      min: -1,
      max: 1,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Real-time sine wave",
      data: data,
    },
  ];

  return (
    <div className="chart-wrapper">
      <Chart options={chartOptions} series={series} type="line" />
    </div>
  );
};

export default RealTimeGraph;
