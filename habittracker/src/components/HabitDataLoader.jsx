import React, { useState } from "react";
import { useHabit } from "../context/HabitContext";
import HabitInfo from "./HabitInfo";
import HabitData from "./HabitData";

function HabitDataLoader() {
  const {
    habitState: { habits },
  } = useHabit();

  return (
    <div>
      <h1>My habits</h1>
      <ul>
        {habits.map((activity) => (
          <HabitData activity={activity} key={activity.id} />
        ))}
      </ul>
    </div>
  );
}

export default HabitDataLoader;
