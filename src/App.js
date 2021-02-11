import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import StandingTable from "./containers/StandingTable";

class App extends React.Component {
  state = {
    leagueCode: "4331",
  };
  changeLeagueCode = (code) => {
    this.setState({ leagueCode: code });
    console.log(this.state.leagueCode);
  };
  render() {
    return (
      <div className="App">
        <Navigation changeCode={this.changeLeagueCode} />
        <StandingTable leagueCode={this.state.leagueCode} />
      </div>
    );
  }
}

export default App;
