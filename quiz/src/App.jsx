import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Result from './pages/result';
import Navbar from "./components/navbar";



function App(){
  return(

  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
  </BrowserRouter>


  );
}
export default App;