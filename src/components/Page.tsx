import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

// Shell for the standalone text pages (accessibility, privacy, 404)
const Page = ({
  title,
  updated,
  children,
}: {
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
