import React, { useState } from "react";
import { useHabit } from "../context/HabitContext";
import HabitInfo from "./HabitInfo";

function HabitData({ activity }) {
  const [openTask, setOpenTask] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const {
    // habitState: { habits },
    habitDispatch,
  } = useHabit();
  const toggleEditForm = (activity) => {
    console.log(activity, "ac");
    setShowEdit(!showEdit);
  };
  const DeleteTask = (id) => {
    console.log(id);
    habitDispatch({ type: "DELETE_TASK", payload: { id: id } });
  };
  const ArchieveTask = (activity) => {
    habitDispatch({ type: "DELETE_TASK", payload: { id: activity.id } });
    habitDispatch({ type: "ARCHIVE_TASK", payload: { task: activity } });
  };
  return (
    <div
      style={{
        listStyle: "none",
        boxShadow: "5px 10px 8px #888888",
        display: "inline-block",
        margin: "10px",
      }}
    >
      <li key={activity.id}>
        <h1
          onClick={() => {
            setOpenTask((prev) => !prev);
          }}
        >
          Name:{activity.name}
        </h1>
        {openTask && (
          <>
            {!showEdit ? (
              <>
                <p>repeat:{activity.repeat}</p>
                <p>Goal:{activity.goal}</p>
                <p>TimeOftheDay:{activity.time}</p>
                <p>startDate:{activity.date}</p>
                <button onClick={() => toggleEditForm()}>Edit</button>
                <button onClick={() => DeleteTask(activity.id)}>Delete</button>
                <button onClick={() => ArchieveTask(activity)}>Archieve</button>
              </>
            ) : (
              <HabitInfo
                openform={showEdit}
                setOpenform={setShowEdit}
                filledform={activity}
              />
            )}
          </>
        )}
      </li>
    </div>
  );
}

export default HabitData;
