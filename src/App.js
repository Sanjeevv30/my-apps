import React from "react";
import GoalList from "./components/GoalList/GoalList";
import "./App.css";
import NewGoal from "./components/NewGoal/NewGoal";
function App() {
  const Name = [
    { id: 1, text: "Hello" },
    { id: 2, text: "I am" },
    { id: 3, text: "Sanjeev" },
  ];

  function addNewGoalHandler(NewGoal) {
    Name.push(NewGoal);
    console.log(Name);
  }

  return (
    <div>
      <h2 className="course-goal">My-Name</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList name={Name} />
    </div>
  );
}

export default App;
