import './App.css';
import { FiRepeat } from 'react-icons/fi';
import { useState } from 'react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="App">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="cardInner">
          {/* Front side */}
          <div 
            className="cardFront"
            onClick={() => setIsFlipped(!isFlipped)} 
            title="Flip card back"
          >
            <div className="cardContent">
              <p className="cardHeader">Find The Best Places In Switzerland</p>
              <FiRepeat className="cardIcon" />
            </div>
          </div>
          {/* Back side */}
          <div 
            className="cardBack"
            onClick={() => setIsFlipped(false)} 
            title="Flip card back"
          >
            <div className="cardContent">
              <p className="cardHeader">Explore mountains, lakes & cities!</p>
              <FiRepeat className="cardIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
