import React, { useState } from "react";
import { FiRepeat, FiArrowRight } from "react-icons/fi";
import "./App.css"; // Use your existing CSS file

const FlipCard = ({ frontText, backText, imgUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="cardInner">
        {/* Front side */}
        <div
          className="cardFront"
          onClick={() => setIsFlipped(true)}
          title="Flip card back"
          style={{ backgroundImage: `linear-gradient(rgba(27, 27, 27, 0.6), rgba(27, 27, 27, 0.6)), url("${imgUrl}")` }}
        >
          {/* Content layer */}
          <div className="cardContent">
            <p className="cardHeader">{frontText}</p>
            <FiRepeat className="cardIcon" />
          </div>
        </div>

        {/* Back side */}
        <div
          className="cardBack"
          onClick={() => setIsFlipped(false)}
          title="Flip card front"
        >
          <div className="cardContent">
            <p className="cardHeader">{backText}</p>
            <FiArrowRight className="cardIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
