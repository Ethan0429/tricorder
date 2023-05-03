import React from "react";
import "./App.css";
import RealTimeGraph from "./components/RealTimeGraph";
import PercentageCircle from "./components/PercentageCircle";

const App = () => {
  const dummyPercentage = 65;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-time Graph and Percentage Circle</h1>
      </header>
      <main>
        <RealTimeGraph />
        <PercentageCircle percentage={dummyPercentage} />
      </main>
    </div>
  );
};

export default App;
