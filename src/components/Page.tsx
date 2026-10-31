import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

// Shell for the standalone text pages (accessibility, privacy, 404)
const Page = ({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="doc">
        <div className="container doc-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {updated && <p className="doc-updated">Last updated {updated}</p>}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Page;
