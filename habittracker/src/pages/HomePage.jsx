import React, { useState } from "react";
import HabitDataLoader from "../components/HabitDataLoader";
import HabitInfo from "../components/HabitInfo";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [openform, setOpenform] = useState(false);
  return (
    <div>
      <NavLink to="/archive">Archive</NavLink>
      <h1>Habit Tracker</h1>
      <p
        style={{
          height: "50px",
          width: "100px",
          margin: "auto",
          backgroundColor: "lightblue",
        }}
      >
        <button onClick={() => setOpenform(true)}>+</button>
        Add New Address
      </p>
      <HabitInfo openform={openform} setOpenform={setOpenform} />
      <div>
        <HabitDataLoader />
      </div>
    </div>
  );
}

export default HomePage;
