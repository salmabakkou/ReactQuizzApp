import React from 'react';
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const navigate=useNavigate();
  return (
    <div className='home'>
      
        <h1>Ready to test your web development skills?</h1>
        <button onClick={() => navigate('/quiz')} >Start Quiz</button>
       
    </div>
  )
}
