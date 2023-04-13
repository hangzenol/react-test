import React from "react";
import Sidebar from "../src/components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;