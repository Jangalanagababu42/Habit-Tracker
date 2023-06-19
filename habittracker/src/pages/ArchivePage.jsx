import React from "react";
import { useHabit } from "../context/HabitContext";
import { NavLink } from "react-router-dom";

function ArchivePage() {
  const {
    habitState: { archive },
    habitDispatch,
  } = useHabit();
  console.log(archive);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <h1>Archieved Task</h1>
      <ul>
        {archive.map((activity) => (
          <li key={activity.id}>
            <h1>Name:{activity.name}</h1>

            <>
              <p>repeat:{activity.repeat}</p>
              <p>Goal:{activity.goal}</p>
              <p>TimeOftheDay:{activity.time}</p>
              <p>startDate:{activity.date}</p>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArchivePage;
