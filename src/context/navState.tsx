import { ReactNode, useReducer } from "react";
import NavContext from "./navContext";

const type = {
  NAV: "NAV",
  MOBILE_MENU: "MOBILE_MENU",
} as const;

interface NavStateShape {
  nav: string;
  mobileMenu: boolean;
}

type NavAction =
  | { type: typeof type.NAV; payload: string }
  | { type: typeof type.MOBILE_MENU; payload: boolean };

const navReducer = (state: NavStateShape, action: NavAction): NavStateShape => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.MOBILE_MENU:
      return {
        ...state,
        mobileMenu: action.payload,
      };

    default:
      return state;
  }
};

const NavState = (props: { children: ReactNode }) => {
  const initialState: NavStateShape = {
    nav: "home",
    mobileMenu: false,
  };
  const [state, dispatch] = useReducer(navReducer, initialState);

  const changeNav = (value: string) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  };
  const changeMobileMenu = (value: boolean) => {
    dispatch({
      type: type.MOBILE_MENU,
      payload: value,
    });
  };
  return (
    <NavContext.Provider
      value={{
        changeNav: changeNav,
        nav: state.nav,
        mobileMenu: state.mobileMenu,
        changeMobileMenu: changeMobileMenu,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
