import React from "react";
import "./NewGoal.css";
function NewGoal(props) {
  const addGoalHandler = (e) => {
    e.preventDefault();
    const NewGoal = {
      id: Math.random().toString(),
      text: "Hello Sanjeev",
    };
    props.onAddGoal(NewGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text"></input>
      <button type="submit">Send</button>
    </form>
  );
}
export default NewGoal;
