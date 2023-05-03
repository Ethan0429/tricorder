import React from "react";
import "./App.css";
import RealTimeGraph from "./components/RealTimeGraph";
import PercentageCircle from "./components/PercentageCircle";

const App = () => {
  const dummyPercentage = 25;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tricorder Readings</h1>
      </header>
      <main>
        <RealTimeGraph />
        <PercentageCircle percentage={dummyPercentage} />
      </main>
    </div>
  );
};

export default App;
