import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Video from "./components/Video";
import SectionsPage from "./components/sectionpage";


const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection /> 
      <Video/>
      <SectionsPage/>  
    </>
  );
};

export default Home;

