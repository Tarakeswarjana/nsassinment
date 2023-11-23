import logo from './logo.svg';
import './App.css';
import ImageSlider from './Component/ImageSlider';
import ApexChart from './Component/ApexChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to My AssignMent Project
      </header>
      <div style={{margin:"20px"}}>

      <ImageSlider/>

      <h1>||Data visualization|| </h1>
      <ApexChart/>
      </div>
    </div>
  );
}

export default App;
