import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const RealTimeGraph = () => {
  const [data, setData] = useState([]);

  const updateData = () => {
    const x = new Date();
    const y = Math.sin(x);
    setData((prevData) => [...prevData, { x, y }]);
  };

  useEffect(() => {
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: data.map((d) => d.x),
    datasets: [
      {
        label: "Real-time sine wave",
        data: data.map((d) => d.y),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: -1,
            max: 1,
          },
        },
      ],
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default RealTimeGraph;
