import { ReactNode, useReducer } from "react";
import ColorContext from "./colorContext";

const type = {
  COLOR: "NAV",
} as const;

interface ColorStateShape {
  color: string;
}

type ColorAction = { type: typeof type.COLOR; payload: string };

const navReducer = (
  state: ColorStateShape,
  action: ColorAction
): ColorStateShape => {
  switch (action.type) {
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

const ColorState = (props: { children: ReactNode }) => {
  const initialState: ColorStateShape = {
    color: "blue",
  };
  const [state, dispatch] = useReducer(navReducer, initialState);

  const changeColor = (value: string) => {
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  };
  return (
    <ColorContext.Provider
      value={{
        changeColor: changeColor,
        color: state.color,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
