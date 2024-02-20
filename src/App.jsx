import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Video from "./components/Video";
import "./App.css";
import Button from "./components/Button";
import Preloader from "./components/Preloader";

function App() {
  // play video
  const [isPlaying, setIsPlaying] = useState(true);
  const [isloading, setIsLoading] = useState(true);

  // reference to video
  const videoref = useRef(null);

  const handleToggle = () => {
    if (videoref.current) {
      if (isPlaying) {
        videoref.current.pause();
      } else {
        videoref.current.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      // after window load set state to false
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, []);

  return (
    <>
      <Video videoref={videoref} />
      <Preloader isloading={isloading} />
      <Button isPlaying={isPlaying} handleToggle={handleToggle} />
    </>
  );
}

export default App;
