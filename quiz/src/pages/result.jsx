import React from 'react';
import { useLocation , useNavigate } from 'react-router-dom';

export default function Result() {
  const location=useLocation();
  const navigate=useNavigate();
  const result=location.state?.result || 0;
  const total=10;

  return (
    <div class="result background">
      <h1> score </h1>
      <h2>{result}/{total}</h2>
      <button className='btn' onClick={() => navigate('/quiz')}>restart Quiz</button>
    </div>
  )
}
