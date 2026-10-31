import About from "./components/About";
// import Blog from "./archive/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";
import Layouts from "./layouts/Layouts";

const App = () => {
  return (
    <Layouts bodyCls={"dark fullscreendark"}>
      {/* Back To Home Ends [ONLY MOBILE] */}
      {/* Home Section Starts */}
      <Home leftImg={true} />
      {/* Home Section Ends */}
      {/* About Section Starts */}
      <About />
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <Work />
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <Contact />
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      {/* <Blog /> */}
    </Layouts>
  );
};
export default App;
