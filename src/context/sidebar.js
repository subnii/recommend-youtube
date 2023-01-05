import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const SidbarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const isMobile = /mobi/i.test(window.navigator.userAgent);
  const [isShowSidebar, setIsSidebarOpen] = useState(!isMobile);
  const { id } = useParams();
  const [curCategory, setCurCategory] = useState(id);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidbarContext.Provider value={{ isMobile, isShowSidebar, toggleSidebar, curCategory, setCurCategory }}>
      {children}
    </SidbarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidbarContext);
};
