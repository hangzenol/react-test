import React from "react";
import Sidebar from "../src/components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Quote from "./pages/Quote";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginRegister/>}/> 
      </Routes>
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/quote" element={<Quote/>}/>
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;