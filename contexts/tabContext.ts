import { createContext } from "react";
import { TabType } from "../types";

export const TabContext = createContext<TabType>('Home');