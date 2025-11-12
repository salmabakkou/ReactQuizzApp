import React from 'react';
import questions from '../data/questions';
import { useState } from 'react';
import { use } from 'react';

export default function Quiz() {
    const [index,setIndex]=useState(0)
    const [question,setQuestion]=useState(questions);
    const [option,setOption]=useState([])


  return (
    <div>
      <h2>Quiz</h2>
      <h4>{questions[0].question}</h4>
      <button>{questions[0].options[0]}</button>
      <button>{questions[0].options[1]}</button>
      <button>{questions[0].options[2]}</button>
      <button>{questions[0].options[3]}</button>
    </div>
  )
}
