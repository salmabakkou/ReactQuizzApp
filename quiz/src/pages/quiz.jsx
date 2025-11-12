import React from 'react';
import questions from '../data/questions';
import { useState } from 'react';

export default function Quiz() {
    const [indexQuestion,setIndexQuestion]=useState(0);
  

    const nextQuestion=()=>{
        setIndexQuestion(indexQuestion+1)
    }


  return (
      <div>
        <h1>{questions[indexQuestion].question}</h1>
    {
        questions[indexQuestion].options.map((option)=>(
        <button onClick={()=>nextQuestion()}>{option}</button>
    ))
   }

    </div>
  )
}
