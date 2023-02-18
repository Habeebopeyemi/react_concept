import Counter from "./components/counter";
import Pokemon from "./components/pokemon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Pokemon/>
      </header>
    </div>
  );
}

export default App;
