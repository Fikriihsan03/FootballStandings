import Standing from "./Standing";

const StandingList = ({ standings }) => {
  return (
    <>
      {standings.map((_, i) => {
        return (
          <Standing
            key={[i]}
            id={[i + 1]}
            name={standings[i].name}
            played={standings[i].played}
            win={standings[i].win}
            draw={standings[i].draw}
            loss={standings[i].loss}
            goalsFor={standings[i].goalsfor}
            goalsAgainist={standings[i].goalsagainst}
            goalsDifference={standings[i].goalsdifference}
            total={standings[i].total}
            email={standings[i].email}
          />
        );
      })}
    </>
  );
};
export default StandingList;
