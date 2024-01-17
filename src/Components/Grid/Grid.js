import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { NUM_COLUMN } from "../../constants/constants";
import { useGrid } from "../../Context/gridContext";

function Grid() {
  const { clickedBoxes, setClickedBoxes } = useGrid();

  // Updating the clicked box
  const handleBoxClick = (row, col) => {
    setClickedBoxes((prevClickedBoxes) => {
      const updatedClickedBoxes = [...prevClickedBoxes];
      updatedClickedBoxes[row] = [...updatedClickedBoxes[row]];
      updatedClickedBoxes[row][col] = !updatedClickedBoxes[row][col];
      return updatedClickedBoxes;
    });
  };

  return (
    <>
      <SimpleGrid columns={NUM_COLUMN} spacingX={0.5} spacingY={0.5}>
        {clickedBoxes.map((row, rowIndex) =>
          row.map((isClicked, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              width="10px"
              height="10px"
              bg={isClicked ? "blue" : "white"}
              onClick={() => handleBoxClick(rowIndex, colIndex)}
            />
          ))
        )}
      </SimpleGrid>
    </>
  );
}

export default Grid;
