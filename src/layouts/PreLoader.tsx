import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="preloader-container">
        <h1>benjamin</h1>
        <div id="progress-line-container">
          <div className="progress-line" />
        </div>
        <h1>bushman</h1>
      </div>
    </div>
  );
};
export default PreLoader;
