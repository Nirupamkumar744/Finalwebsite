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
        image: "images/44.gif",
        paragraph: "Welcome to Stock Archery, Bihar’s premier stock market training center for expert trading knowledge and strategies. Achieve success with our in-depth resources, tips, and insights tailored for savvy investors. Start mastering the market with the best stock market institute in Bihar today!",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Bihar's First Trading Floor",
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726054959/Screenshot__32_-removebg-preview_ahrfou.png",
        paragraph: "Stock Archery is Bihar’s premier stock market training center and trading floor, offering unmatched hands-on trading education during live market sessions. As a regional pioneer, we specialize in real-time trading experience with expert trainers providing comprehensive, step-by-step guidance to master essential skills. Our innovative approach promotes learning by doing—students trade alongside seasoned professionals, merging theory with practice. Whether you're a novice or seeking advanced skill enhancement, Stock Archery delivers tailored classes to achieve your trading goals. Discover the future of stock market education and elevate your market success with us today.",
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
