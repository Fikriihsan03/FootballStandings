import classes from "./Standing.module.css";

const Standing = ({
  id,
  image,
  name,
  played,
  win,
  draw,
  loss,
  goalsFor,
  goalsDifference,
  goalsAgainist,
  total,
}) => {
  return (
    <tr className={classes.Standing}>
      <td style={{ textAlign: "left" }}>
        {id}.<img style={{ margin: "8px" }} src={image} alt="strTeamBadge" />{" "}
        {name}
      </td>
      <td>{played}</td>
      <td>{win}</td>
      <td>{draw}</td>
      <td>{loss}</td>
      <td>{goalsFor}</td>
      <td>{goalsAgainist}</td>
      <td>{goalsDifference}</td>
      <td>{total}</td>
    </tr>
  );
};
export default Standing;
