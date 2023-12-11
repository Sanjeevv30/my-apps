import React from "react";
import "./GoalList.css";

function GoalList(props) {
  //console.log(props.name)
  return (
    <ul className="goal-list">
      {props.name.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
}

export default GoalList;
