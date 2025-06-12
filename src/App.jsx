import React from "react";
import FlipCard from "./FlipCard";
import "./App.css";

import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';
import bg3 from './assets/bg3.png';
import bg4 from './assets/bg4.png';
import bg5 from './assets/bg5.png';
import bg6 from './assets/bg6.png';
import bg7 from './assets/bg7.png';

const frontTexts = [
  "Offensive Term In Video Game",
  "Image From Pocahontas Movie",
  "Photograph On Orange Shirt Day",
  "Dreamcatcher Product from Social Media",
  "Turtle Drawing On Highway Barrier",
  "Totem Pole from Ajax Community Centre",
  "Artwork by David Beaucage Johnson"
];
const backTexts = [
  "Lack of understanding and a refusal to change.",
  "Misrepresentation is not always obvious.",
  "Reconciliation requires action, not just remembrance.",
  "Appropriation is not always intentional or obvious.",
  "The turtle was always there. What changed was me.",
  "Silence can lead to erasure.",
  "Journey Through Switzerland's Majestic Landscapes"
];
const imageUrls = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
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
