import React, { useState } from "react";
import { FiRepeat } from "react-icons/fi";
import "./FlipCard.css"; // or a separate CSS file if you prefer

const FlipCard = ({ frontText, backText, backgroundImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="cardInner">
        {/* Front side */}
        <div
          className="cardFront"
          onClick={() => setIsFlipped(!isFlipped)}
          title="Flip card"
        >
          <div
            className="cardBackground"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="cardContent">
            <p className="cardHeader">{frontText}</p>
            <FiRepeat className="cardIcon" />
          </div>
        </div>

        {/* Back side */}
        <div
          className="cardBack"
          onClick={() => setIsFlipped(false)}
          title="Flip card"
        >
          <div className="cardContent">
            <p className="cardHeader">{backText}</p>
            <FiRepeat className="cardIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
