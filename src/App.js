import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import FlightPredictionContainer from "./Components/FlightPredictionContainer";
import "../src/SCSS/Index.scss";
import Home from "./Components/Home";
import Feedback from "./Components/Feedback";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flight-status" element={<FlightPredictionContainer />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
