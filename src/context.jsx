import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
  paragraph: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "STOCK ARCHERY",
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741347106/Untitled_design_15_royn8o.png",
        paragraph: "Welcome to Stock Archery, your premier source for expert trading knowledge and strategies. Achieve trading success with our in-depth resources, tips, and insights tailored for savvy investors. Start mastering the market today",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Bihar's First Trading Floor",
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726054959/Screenshot__32_-removebg-preview_ahrfou.png",
        paragraph: "Introducing Stock Archery's  live trading classes—where education meets real-time trading. Gain hands-on experience and practical skills in our interactive sessions. Elevate your trading expertise with our unique, live-learning approach. Join now and experience the future of trading education",
      },
    });
  };

  const updateVideoPage = () => {
    return dispatch({
      type: "VIDEO_UPDATE",
      payload: {
        name2: "STOCK ARCHERY",
        paragraph2: "First of its kind, we offer live trading classes where students can learn and trade in real-time. This unique approach combines education with practical trading experience, providing a hands-on learning environment.",
      },
    });
  };

 

  // Call updateVideoPage to set values specific to the video page
  useEffect(() => {
    updateVideoPage();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, updateVideoPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming the context
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
