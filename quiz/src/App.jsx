import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Result from './pages/result';
import './App.css';


function App(){
  return(
  

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
  </BrowserRouter>


  );
}
export default App;