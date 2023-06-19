import React from "react";
export const initialState = {
  habits: [
    {
      id: 1,
      name: "Excercise",
      repeat: "Daily",
      goal: "1 time a day",
      time: "AnyTime",
      date: "Today",
    },
    {
      id: 2,
      name: "study",
      repeat: "Daily",
      goal: "3 times a day",
      time: "4pm",
      date: "Tomarrow",
    },
    {
      id: 3,
      name: "Music",
      repeat: "Weekly",
      goal: "3 times a day",
      time: "AnyTime",
      date: "Today",
    },
  ],
  archive: [],
};
function HabitReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, habits: [...state.habits, action.payload.task] };
    case "DELETE_TASK":
      console.log(action.payload);
      const updatedhabits = state.habits.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, habits: updatedhabits };
    case "ARCHIVE_TASK":
      return { ...state, archive: [...state.archive, action.payload.task] };
    case "EDIT_TASK":
      const editform = state.habits.map((task) =>
        task.id === action.payload.task.id ? action.payload.task : task
      );
      return { ...state, habits: editform };
    default:
      return state;
  }
}

export default HabitReducer;
