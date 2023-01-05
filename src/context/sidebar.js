import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const SidbarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [isShowSidebar, setIsSidebarOpen] = useState(true);
  const { id } = useParams();
  const [curCategory, setCurCategory] = useState(id);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidbarContext.Provider value={{ isShowSidebar, toggleSidebar, curCategory, setCurCategory }}>
      {children}
    </SidbarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidbarContext);
};
