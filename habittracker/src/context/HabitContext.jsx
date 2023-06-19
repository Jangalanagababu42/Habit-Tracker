import { createContext, useContext, useReducer } from "react";
import HabitReducer, { initialState } from "./HabitReducer";

const HabitContext = createContext();

function HabitProvider({ children }) {
  const [habitState, habitDispatch] = useReducer(HabitReducer, initialState);
  return (
    <HabitContext.Provider value={{ habitState, habitDispatch }}>
      {children}
    </HabitContext.Provider>
  );
}
const useHabit = () => useContext(HabitContext);

export { useHabit, HabitProvider };
