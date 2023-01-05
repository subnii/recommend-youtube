import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { SidebarProvider, useSidebarContext } from "./context/sidebar";

const queryClient = new QueryClient();

function Contents() {
  const { isShowSidebar } = useSidebarContext();

  return (
    <>
      {isShowSidebar && <Sidebar />}
      <Outlet />
    </>
  );
}

function App() {
  return (
    <SidebarProvider>
      <Header></Header>
      <div
        className="flex-1 flex"
        style={{
          height: "calc(100% - 61px)",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <>
            <Contents></Contents>
          </>
        </QueryClientProvider>
      </div>
    </SidebarProvider>
  );
}

export default App;
