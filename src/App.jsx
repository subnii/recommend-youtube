import React from "react";
import Contents from "./components/layout/Contents";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <Contents></Contents>
      </div>
    </>
  );
}

export default App;
