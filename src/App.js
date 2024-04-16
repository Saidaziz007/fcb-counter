import logo from "./logo.svg";
import "./App.css";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";
import Reset from "./components/reset/Reset";
import Result from "./components/result/Result";

function App() {
  return (
    <div className="App">
      <div className="counter">
        <h1>Counter</h1>
        <Result />
        <div className="counter-input">
          <Increment className="counter-inc" />
          <Decrement className="counter-dec" />
        </div>
        <Reset />
      </div>
    </div>
  );
}

export default App;
