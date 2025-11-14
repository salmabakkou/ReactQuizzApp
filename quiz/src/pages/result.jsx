import React from 'react';
import { useLocation , useNavigate } from 'react-router-dom';


export default function Result() {
  const location=useLocation();
  const navigate=useNavigate();
  const result=location.state?.result || 0;
  const total=10;

  const affichageMessage = () => {
    if(result==0){
      return "score";
    }else if (result <= 3) {
      return "😔 Oups… ce n’était pas ton jour. Essaie encore, tu vas y arriver !";
    } else if (result <= 5) {
      return "🙂 Pas mal ! Tu es sur la bonne voie.";
    } else if (result <= 7) {
      return "💪 Très bien ! Tu as un bon niveau.";
    } else if (result <= 9) {
      return "🔥 Excellent ! Tu es proche du sans faute !";
    } else {
      return "👑 Parfait ! Score complet, bravo !";
    }
  };
 

  return (
    <div className="result background">
      <h1>{affichageMessage()}</h1>
      <h2>{result}/{total}</h2>
      <button className='btn' onClick={() => navigate('/quiz')}>restart Quiz</button>
    </div>
  )
}
