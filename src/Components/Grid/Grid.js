import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { NUM_COLUMN, NUM_ROWS } from "../../constants/constants";

function Grid() {
  // Creating an array of indices from 0
  const boxIndices = Array.from(
    { length: NUM_COLUMN * NUM_ROWS },
    (_, index) => index
  );

  // State to keep track of clicked status
  const [clickedBoxes, setClickedBoxes] = useState(
    Array(NUM_COLUMN * NUM_ROWS).fill(false)
  );

  const handleBoxClick = (index) => {
    // Toggle the clicked status for the clicked box
    const updatedClickedBoxes = [...clickedBoxes];
    updatedClickedBoxes[index] = !updatedClickedBoxes[index];
    setClickedBoxes(updatedClickedBoxes);
  };

  return (
    <>
      <SimpleGrid columns={NUM_COLUMN} spacingX={0.5} spacingY={0.5}>
        {boxIndices.map((index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            bg={clickedBoxes[index] ? "blue" : "white"} // Change background color based on clicked status
            onClick={() => handleBoxClick(index)}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Grid;
