import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import RealTimeGraph from "./components/RealTimeGraph";
import PercentageCircle from "./components/PercentageCircle";
import Thermostat from "./components/Thermostat";

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [page, setPage] = useState(1);

  const updatePercentage = (value) => {
    setPercentage(Math.abs(Math.round(value * 100)));
  };

  const onSwiped = (direction) => {
    if (direction === "Left" && page < 3) {
      setPage(page + 1);
    } else if (direction === "Right" && page > 1) {
      setPage(page - 1);
    } else if (direction === "Right" && page === 1) {
      setPage(3);
    } else if (direction === "Left" && page === 3) {
      setPage(1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onSwiped("Left"),
    onSwipedRight: () => onSwiped("Right"),
  });

  const [temperature, setTemperature] = useState(70);

  // Simulate temperature change (you can replace this with your temperature source)
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prevTemperature) => prevTemperature + 0.1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <>
            <RealTimeGraph onDataUpdate={updatePercentage} y={Math.sin(page)} />
            <PercentageCircle percentage={percentage} />
          </>
        );
      case 2:
        return (
          <>
            <h2 className="centered-number">Temperature</h2>
            <div>
              <Thermostat temperature={temperature} />
            </div>
          </>
        );
      case 3:
        return <h2 className="centered-number">Air Quality</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tricorder Readings</h1>
      </header>
      <main {...swipeHandlers}>{renderPage()}</main>
    </div>
  );
};

export default App;
