import { createContext } from "react";

export interface ColorContextValue {
  color: string;
  changeColor: (value: string) => void;
}

const ColorContext = createContext<ColorContextValue>({} as ColorContextValue);
export default ColorContext;
