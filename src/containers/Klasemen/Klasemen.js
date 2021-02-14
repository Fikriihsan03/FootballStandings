import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import StandingTable from "../../components/StandingTables/StandingTables";

function Klasemen() {
  const [leagueCode, setLeagueCode] = useState("4328");
  const changeLeagueCode = (code) => {
    setLeagueCode(code);
  };
  return (
    <div className="App">
      <Navigation changeCode={changeLeagueCode} />
      <StandingTable leagueCode={leagueCode} />
    </div>
  );
}

export default Klasemen;
