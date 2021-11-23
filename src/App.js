import './App.css';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  return (
    <div className="App">
      <div className="App-topNav">
        <p className="App-text">Ar Salon & Day Spa</p>
      </div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <LoadingIndicator></LoadingIndicator>
    </div>
  );
}

export default App;
