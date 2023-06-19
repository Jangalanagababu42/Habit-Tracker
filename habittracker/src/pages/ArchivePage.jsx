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
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{ height: "40px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </NavLink>

      <NavLink to="/archive">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          style={{ height: "40px", marginLeft: "10px" }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </NavLink>

      <h1>Archieved Task</h1>
      <ul
        style={{
          listStyle: "none",
          boxShadow: "5px 10px 8px #888888",
          display: "inline-block",
        }}
      >
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
