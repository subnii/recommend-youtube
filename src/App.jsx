import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    </>
  );
}

export default App;
