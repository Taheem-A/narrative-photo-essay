import React from "react";
import FlipCard from "./FlipCard";
import "./App.css";

import { frontTexts, backTexts, imageUrls } from "./data";

// Define how many cards per row
const rows = [1, 3, 2, 1];

function App() {
  // Split the cards into groups based on rows array
  let startIndex = 0;
  const cardRows = rows.map((count) => {
    const rowCards = frontTexts.slice(startIndex, startIndex + count);
    startIndex += count;
    return rowCards;
  });

  return (
    <div className="App">
      {cardRows.map((rowCards, rowIndex) => (
        <div className="cardRow" key={rowIndex}>
          {rowCards.map((_, i) => {
            const index = rows.slice(0, rowIndex).reduce((a, b) => a + b, 0) + i;
            return (
              <FlipCard
                key={index}
                frontText={frontTexts[index]}
                backText={backTexts[index]}
                imgUrl={imageUrls[index]}
                index={index}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
