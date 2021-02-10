import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import StandingTable from "./containers/StandingTable";

function App() {
  return (
    <div className="App">
      <Navigation />
      <StandingTable />
    </div>
  );
}

export default App;
