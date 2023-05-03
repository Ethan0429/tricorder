import React, { useState, useEffect } from "react";
import "./App.css";
import RealTimeGraph from "./components/RealTimeGraph";
import PercentageCircle from "./components/PercentageCircle";

const App = () => {
  const [percentage, setPercentage] = useState(0);

  const updatePercentage = (value) => {
    setPercentage(Math.abs(Math.round(value * 100)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tricorder Readings</h1>
      </header>
      <main>
        <div className="graph-container">
          <RealTimeGraph onDataUpdate={updatePercentage} />
        </div>
        <PercentageCircle percentage={percentage} />
      </main>
    </div>
  );
};

export default App;
