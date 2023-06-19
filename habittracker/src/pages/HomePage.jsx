import React, { useState } from "react";
import HabitDataLoader from "../components/HabitDataLoader";
import HabitInfo from "../components/HabitInfo";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [openform, setOpenform] = useState(false);
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

      <h1>Habit Tracker</h1>
      <p
        style={{
          height: "50px",
          width: "100px",
          margin: "auto",
          backgroundColor: "lightblue",
        }}
        onClick={() => setOpenform(true)}
      >
        <button
          style={{
            outline: "none",
            border: "none",
            backgroundColor: "lightblue",
          }}
        >
          +
        </button>
        Add New Task
      </p>
      <HabitInfo openform={openform} setOpenform={setOpenform} />
      <div>
        <HabitDataLoader />
      </div>
    </div>
  );
}

export default HomePage;
