import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiRepeat, FiArrowRight } from "react-icons/fi";
import "./App.css";

const FlipCard = ({ frontText, backText, imgUrl, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/essay', {
      state: {
        frontText,
        backText,
        imgUrl,
        index
      }
    });
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="cardInner">
        <div
          className="cardFront"
          onClick={() => setIsFlipped(true)}
          title="Flip card back"
          style={{
            backgroundImage: `linear-gradient(rgba(27, 27, 27, 0.6), rgba(27, 27, 27, 0.6)), url("${imgUrl}")`
          }}
        >
          <div className="cardContent">
            <p className="cardHeader">{frontText}</p>
            <FiRepeat className="cardIcon" />
          </div>
        </div>

        <div
          className="cardBack"
          onClick={() => setIsFlipped(false)}
          title="Flip card front"
        >
          <div className="cardContent">
            <p className="cardHeader">{backText}</p>
            <FiArrowRight className="cardIcon" onClick={handleNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
