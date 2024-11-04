import logo from './logo.svg';
import './App.css';

const currDate = new Date();


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Current Date{currDate.toLocaleDateString()} and time is {currDate.toLocaleTimeString}</h3>
    </div>
  );
}

export default App;
