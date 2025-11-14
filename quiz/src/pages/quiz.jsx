import React from 'react';
import questions from '../data/questions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
    const [indexQuestion,setIndexQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const navigate=useNavigate();
    let result=score;

    const nextQuestion=()=>{
        if(indexQuestion === questions.length-1){
          navigate('/result',{state:{result}});
          return;
        } else{
          setIndexQuestion(indexQuestion+1)
        } 
    }
    const handleScore =(option)=>{
      
      if(option===questions[indexQuestion].answer){
        result= score+1
        setScore(result)
        
      }
    }
  return (
    <div className="quiz background">
       <section>
        <h1>{questions[indexQuestion].question}</h1>
        <div className="option">
            {
                questions[indexQuestion].options.map((option,index)=>(
                <button  key={index} onClick={()=>{handleScore(option),nextQuestion()}}>{option}</button>
            ))
            }
        </div>
      </section>
    </div>
  )
}
