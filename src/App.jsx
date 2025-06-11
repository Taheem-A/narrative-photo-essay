import React from "react";
import FlipCard from "./FlipCard";
import "./App.css";

import bg from './assets/bg.png';
import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';
// Importing the others later

const frontTexts = [
  "Offensive Term In Video Game",
  "Image From Pocahontas Movie",
  "Photograph From Orange Shirt Day",
  "Taste the Flavors of Switzerland",
  "Explore Switzerland's Hidden Gems",
  "Unwind by Switzerland's Scenic Lakes",
  "Journey Through Switzerland's Majestic Landscapes"
];
const backTexts = [
  "Lack of understanding and a refusal to change",
  "Misrepresentation isn’t always obvious",
  "Adventure Awaits in the Swiss Alps",
  "Taste the Flavors of Switzerland",
  "Explore Switzerland's Hidden Gems",
  "Unwind by Switzerland's Scenic Lakes",
  "Journey Through Switzerland's Majestic Landscapes"
];
const imageUrls = [
  bg1,
  bg2,
  bg,
  // Placeholders
  bg,
  bg,
  bg,
  bg,
];

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
