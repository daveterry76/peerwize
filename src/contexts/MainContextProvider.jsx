import React, { createContext, useState, useEffect } from 'react'

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {

    const [showSidebar, setShowSideBar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);



    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
        setShowSideBar(false);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [])
    // useEffect(() => {
    //   const handleResize = () => {
    //     setShowSideBar(window.innerWidth > 600);
    //   }
  
    //   handleResize();
  
    //   window.addEventListener("resize", handleResize);
    
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   }
    // }, []);
  
    return (
      <>
        <MainContext.Provider
          value={{
            showSidebar,
            setShowSideBar,
            isMobile,
            setIsMobile,
          }}
        >
          {children}
        </MainContext.Provider>
      </>
    )
  }

  export default MainContextProvider;