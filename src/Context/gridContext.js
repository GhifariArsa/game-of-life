import React, { createContext, useContext, useState } from "react";
import { NUM_COLUMN, NUM_ROWS } from "../constants/constants";

const GridContext = createContext();

export function GridContextProvider({ children }) {
  const initialClickedBoxes = Array(NUM_ROWS)
    .fill()
    .map(() => Array(NUM_COLUMN).fill(false));

  const [clickedBoxes, setClickedBoxes] = useState(initialClickedBoxes);

  // Counting the amount of alive adjacent cells
  const countAliveAdjacent = (grid, row, column) => {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        const neighbourRow = row + i;
        const neighbourCol = column + j;

        if (
          neighbourRow >= 0 &&
          neighbourRow < NUM_COLUMN &&
          neighbourCol < NUM_COLUMN - 1 &&
          neighbourCol >= 0
        ) {
          if (grid[neighbourRow][neighbourCol]) {
            count += 1;
          }
        }
      }
    }

    return count;
  };

  // Starting one iteration of the game
  const startGame = () => {
    let newArray = Array(NUM_ROWS)
      .fill()
      .map(() => Array(NUM_COLUMN).fill(false));

    clickedBoxes.forEach((row, rowIndex) => {
      row.forEach((isClicked, colIndex) => {
        const numAliveAdj = countAliveAdjacent(
          clickedBoxes,
          rowIndex,
          colIndex
        );

        if (isClicked) {
          if (numAliveAdj < 2) {
            newArray[rowIndex][colIndex] = false;
          } else if (numAliveAdj === 2 || numAliveAdj === 3) {
            newArray[rowIndex][colIndex] = true;
          } else if (numAliveAdj > 3) {
            newArray[rowIndex][colIndex] = false;
          }
        } else {
          if (numAliveAdj === 3) {
            newArray[rowIndex][colIndex] = true;
          }
        }
      });
    });

    setClickedBoxes(newArray);
  };

  return (
    <GridContext.Provider
      value={{ clickedBoxes, setClickedBoxes, initialClickedBoxes, startGame }}
    >
      {children}
    </GridContext.Provider>
  );
}

export function useGrid() {
  return useContext(GridContext);
}
