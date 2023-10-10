import { useContext } from "react";
import { CountContext } from "./UseContext";

export const useCountContext = () => useContext(CountContext);
