import React, { useState, useEffect } from "react";
import StandingList from "../../components/StandingList/StandingList";
import classes from "./StandingTable.module.css";

const StandingTable = ({ leagueCode }) => {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${leagueCode}&s=2020-2021`
    )
      .then((response) => response.json())
      .then((club) => {
        console.log(club.table);
        setStandings(club.table);
      });
  }, [leagueCode]);
  return !standings.length ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="container">
        <div className="row">
          <table className={classes.Table}>
            <thead>
              <tr>
                <th className={classes.Club}>Klub</th>
                <th className={classes.Poin}>M</th>
                <th className={classes.Poin}>M</th>
                <th className={classes.Poin}>S</th>
                <th className={classes.Poin}>K</th>
                <th className={classes.Poin}>GM</th>
                <th className={classes.Poin}>GA</th>
                <th className={classes.Poin}>SG</th>
                <th className={classes.Poin}>Poin</th>
              </tr>
            </thead>
            <tbody>
              <StandingList standings={standings} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StandingTable;
