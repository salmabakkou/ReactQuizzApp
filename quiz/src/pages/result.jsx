import React from 'react';
import { useLocation , useNavigate } from 'react-router-dom';

export default function Result() {
  const location=useLocation();
  const navigate=useNavigate();
  const result=location.state?.result || 0;
  const total=10;

  return (
    <div>
      <h1> Result </h1>
      <h1>{result}/{total}</h1>
      <button onClick={() => navigate('/')}>restart Quiz</button>
    </div>
  )
}
