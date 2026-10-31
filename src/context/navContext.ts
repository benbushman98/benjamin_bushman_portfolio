import { createContext } from "react";

export interface NavContextValue {
  nav: string;
  mobileMenu: boolean;
  changeNav: (value: string) => void;
  changeMobileMenu: (value: boolean) => void;
}

const NavContext = createContext<NavContextValue>({} as NavContextValue);
export default NavContext;
