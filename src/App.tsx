import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeLab from "./components/HomeLab";
import Services from "./components/Services";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <About />
        <HomeLab />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
export default App;
