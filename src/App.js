import React from "react";
import Sidebar from "../src/components/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}/> 
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;