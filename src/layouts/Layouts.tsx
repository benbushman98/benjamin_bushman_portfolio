import { Fragment, ReactNode, useContext, useEffect } from "react";
import ColorContext from "../context/colorContext";
import NavContext from "../context/navContext";
import useWindowSize from "../useWindowSize";
import BackMobile from "./BackMobile";
import Header from "./Header";

interface LayoutsProps {
  children: ReactNode;
  bodyCls?: string;
  extraPage?: boolean;
  light?: boolean;
}

const Layouts = ({ children, bodyCls, extraPage, light }: LayoutsProps) => {
  useEffect(() => {
    document.body.className = bodyCls ? bodyCls : "dark fullscreendark";
  }, []);
  const { changeMobileMenu, mobileMenu } = useContext(NavContext);
  const { color } = useContext(ColorContext);
  // The skin stylesheet <link> lives in index.html; swap it when the color changes.
  useEffect(() => {
    const skin = document.getElementById("skin-css") as HTMLLinkElement | null;
    if (skin) {
      skin.href = `/css/skins/${color}.css`;
    }
  }, [color]);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1025) {
      changeMobileMenu(false);
    }
  }, [width]);
  return (
    <Fragment>
      <div className="page animated" style={{ animationDuration: "500ms" }}>
        {/* Header Starts */}
        {!extraPage && <Header light={light} />}
        {/* Main Content Starts */}{" "}
        {extraPage ? (
          children
        ) : (
          <main
            id="main"
            className={`${width < 1025 ? (mobileMenu ? "open" : "") : ""}`}
          >
            {/* Back To Home Starts [ONLY MOBILE] */}
            <BackMobile changeMobileMenu={changeMobileMenu} />
            {children}
          </main>
        )}
      </div>{" "}
    </Fragment>
  );
};
export default Layouts;
