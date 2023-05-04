import React, { useState } from "react";
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
        <RealTimeGraph onDataUpdate={updatePercentage} />
        <PercentageCircle percentage={percentage} />
      </main>
    </div>
  );
};

export default App;
