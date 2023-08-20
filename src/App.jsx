import LinesChart from "./Components/LinesChart";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="title-box"><span className="title">Temperatura media por provincia</span></h1>
      <p className="subtitle-box"><span className="subtitle">Veranos 2000/2010</span></p>
      <div className="chart-container">
        <LinesChart className="chart" />
      </div>
    </div>
  );
}

export default App;
