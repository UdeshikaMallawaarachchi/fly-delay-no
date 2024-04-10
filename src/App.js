import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import FlightPredictionContainer from './Components/FlightPredictionContainer';
import '../src/SCSS/Index.scss'
import Home from './Components/Home';
import Feedback from './Components/Feedback';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <FlightPredictionContainer/>
      {/* <Feedback/> */}
      
    </div>
  );
}

export default App;
