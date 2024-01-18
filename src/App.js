import { Button, Box, Container, Center, Text } from "@chakra-ui/react";
import Grid from "./Components/Grid/Grid";
import { useEffect, useState } from "react";
import { useGrid } from "./Context/gridContext";
import {
  GAME_DELAY,
  BG_COLOR,
  PRIMARY,
  SECONDARY,
  ACCENT,
} from "./constants/constants";
import SpeedSlider from "./Components/Slider/SpeedSlider";

function App() {
  const [started, setStarted] = useState(false);
  const { startGame, setRandomBoxes, contextSliderValue } = useGrid();

  useEffect(() => {
    let intervalId;

    // Delay 500 milliseconds for the iteration of the game
    const handleGameInterval = () => {
      intervalId = setInterval(() => {
        startGame();
      }, GAME_DELAY * (101 - contextSliderValue));
    };

    if (started) {
      handleGameInterval();
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [started, startGame, contextSliderValue]);

  const handleClick = () => {
    setStarted(!started);
  };

  const handleRandomClick = () => {
    setRandomBoxes();
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={BG_COLOR}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Conway's Game of Life
      </Text>

      <Center>
        <Container>
          <Container bg="black" padding={1} rounded={4}>
            <Grid />
          </Container>
          <Container centerContent padding={3}>
            <Button
              onClick={handleClick}
              width="50%"
              bg={started ? "#D12424" : PRIMARY}
              _hover={PRIMARY}
              textColor={"white"}
            >
              {started ? "Stop Game" : "Start Game"}
            </Button>
            <Button
              onClick={handleRandomClick}
              margin={2}
              bg={ACCENT}
              textColor={"white"}
              _hover={{ textColor: "white" }}
            >
              Random
            </Button>
            <SpeedSlider />
          </Container>
        </Container>
      </Center>
    </Box>
  );
}

export default App;
