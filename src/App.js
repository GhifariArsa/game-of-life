import { Button, Box, Container } from "@chakra-ui/react";
import Grid from "./Components/Grid/Grid";
import { useEffect, useState } from "react";
import { useGrid } from "./Context/gridContext";

function App() {
  const [started, setStarted] = useState(false);
  const { startGame } = useGrid();

  useEffect(() => {
    let intervalId;

    // Delay 500 seconds for the iteration of the game
    const handleStartGameWithDelay = () => {
      const delay = 100;

      intervalId = setInterval(() => {
        startGame();
      }, delay);
    };

    if (started) {
      handleStartGameWithDelay();
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [started, startGame]);

  // Checking if the game started or stopped
  const handleClick = () => {
    if (started) {
      setStarted(false);
    } else setStarted(true);
  };

  return (
    <>
      <Box>
        <Box></Box>
        <Container bg="black" padding={1}>
          <Grid></Grid>
        </Container>
        <Container>
          <Button onClick={handleClick}>{started ? "Stop" : "Start"}</Button>
        </Container>
      </Box>
    </>
  );
}

export default App;
