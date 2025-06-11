import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './essayPage.css';
import essayTexts from './essayTexts.js';

const EssayPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No data found</p>;

  const { frontText, backText, imgUrl, index } = state;
  const fullEssay = essayTexts[index];

  return (
    <div className="essayPage">
      <button className="backButton" onClick={() => navigate(-1)}>← Back</button>
      <div className="essayCard">
        <img src={imgUrl} alt="Card visual" className="essayImage" />
        <div className="essayContent">
          <h1>{frontText}</h1>
          <p className="subtitle">{backText}</p>
          <p className="essayText" style={{ whiteSpace: 'pre-wrap' }}>{fullEssay}</p>
        </div>
      </div>
    </div>
  );
};

export default EssayPage;
