import React from 'react';
import questions from '../data/questions';
import { useState } from 'react';

export default function Quiz() {
    const [indexQuestion,setIndexQuestion]=useState(0)


    const nextQuestion=()=>{
        setIndexQuestion(indexQuestion+1)
    }



  return (
    <div>
      <h2>Quiz</h2>
      <h4>{questions[indexQuestion].question}</h4>
      <button onClick={nextQuestion}>{questions[indexQuestion].options[0]}</button>
      <button onClick={nextQuestion}>{questions[indexQuestion].options[1]}</button>
      <button onClick={nextQuestion}>{questions[indexQuestion].options[2]}</button>
      <button onClick={nextQuestion}>{questions[indexQuestion].options[3]}</button>     
    </div>
  )
}
