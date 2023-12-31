import "./App.css";
import { ChoiceModal } from "./components/ChoiceModal/ChoiceModal";
import { CombatPanel } from "./components/CombatPanel/CombatPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CombatPanel />
        <ChoiceModal />
      </header>
    </div>
  );
}

export default App;
