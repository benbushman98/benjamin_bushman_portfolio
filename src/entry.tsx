import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AccessibilityPage from "./pages/AccessibilityPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPage from "./pages/PrivacyPage";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/jetbrains-mono";
import "./styles.css";

// Each HTML page sets data-page on #root to pick what to render.
const pages = {
  home: App,
  accessibility: AccessibilityPage,
  privacy: PrivacyPage,
  "not-found": NotFoundPage,
};

const root = document.getElementById("root") as HTMLElement;
const Page = pages[root.dataset.page as keyof typeof pages] ?? App;

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
