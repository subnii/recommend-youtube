import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex-1 flex h-full">
        <QueryClientProvider client={queryClient}>
          <Sidebar />
          <Outlet />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
