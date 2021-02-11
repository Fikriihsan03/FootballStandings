import Standing from "./Standing";

const StandingList = ({ standings }) => {
  return (
    <>
      {standings.map((_, i) => {
        return (
          <Standing
            key={i}
            id={[i + 1]}
            image={standings[i].strTeamBadge}
            name={standings[i].strTeam}
            played={standings[i].intPlayed}
            win={standings[i].intWin}
            draw={standings[i].intDraw}
            loss={standings[i].intLoss}
            goalsFor={standings[i].intGoalsFor}
            goalsAgainist={standings[i].intGoalsAgainst}
            goalsDifference={standings[i].intGoalDifference}
            total={standings[i].intPoints}
            email={standings[i].email}
          />
        );
      })}
    </>
  );
};
export default StandingList;
