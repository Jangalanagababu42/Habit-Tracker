import React, { useState } from "react";
import { useHabit } from "../context/HabitContext";
import { v4 as uuid } from "uuid";

function HabitInfo({ openform, setOpenform, filledform }) {
  console.log(filledform, "filled");
  const { habitState, habitDispatch } = useHabit();
  const initialData = {
    name: "",
    repeat: "",
    goal: "",
    date: "",
    time: "",
  };
  const [formData, setFormData] = useState(
    filledform ? filledform : initialData
  );
  const formOnchangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetForm = () => [setFormData(initialData)];
  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    if (!filledform) {
      habitDispatch({
        type: "ADD_TASK",
        payload: { task: { id: uuid(), ...formData } },
      });
    } else {
      habitDispatch({
        type: "EDIT_TASK",
        payload: { task: { ...formData } },
      });
    }
    resetForm();
    setOpenform(false);
  };
  return (
    <div>
      {openform && (
        <form onSubmit={formOnSubmitHandler}>
          <label for="task">Task</label>
          <input
            type="text"
            id="task"
            name="name"
            value={formData.name}
            onChange={(e) => {
              formOnchangeHandler(e);
            }}
            placeholder="Enter the task"
          />
          <label for="repeat">Repeat</label>
          <select
            name="repeat"
            value={formData.repeat}
            onChange={(e) => {
              formOnchangeHandler(e);
            }}
          >
            <optgroup label="repeat">
              Choose
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </optgroup>
          </select>
          <label for="goal">Goal</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={(e) => {
              formOnchangeHandler(e);
            }}
          >
            <optgroup label="goal">
              Choose
              <option value="1 time a day">1 time a day</option>
              <option value="3 times a day">3 times a day</option>
              <option value="5 times a day">5 times a day</option>
              <option value="7 times a day">7 times a day</option>
            </optgroup>
          </select>
          <label for="time">Time of Day</label>
          <select
            name="time"
            value={formData.time}
            onChange={(e) => {
              formOnchangeHandler(e);
            }}
          >
            <optgroup label="time">
              Choose
              <option value="AnyTime">AnyTime</option>
              <option value="4pm">4pm</option>
              <option value="5pm">5pm</option>
              <option value="7pm">7pm</option>
            </optgroup>
          </select>
          <label for="date">Start Date</label>
          <select
            name="date"
            value={formData.date}
            onChange={(e) => {
              formOnchangeHandler(e);
            }}
          >
            <optgroup label="date">
              Choose
              <option value="Today">Today</option>
              <option value="Tomarrow">Tomarrow</option>
              <option value="DayAfterTomarrow">DayAfterTomarrow</option>
            </optgroup>
          </select>
          <input type="submit" value="Add" />
          <input
            type="button"
            value="cancel"
            onClick={() => setOpenform(false)}
          />
          <input type="reset" value="Reset" onClick={resetForm} />
        </form>
      )}
    </div>
  );
}

export default HabitInfo;
