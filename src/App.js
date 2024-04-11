import "./App.css";
import FlightPredictionContainer from "./Components/FlightPredictionContainer";
import "../src/SCSS/Index.scss";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Feedback from "./Components/Feedback";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flight-status" element={<FlightPredictionContainer />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
