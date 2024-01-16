import { Box, Container } from "@chakra-ui/react";
import Grid from "./Components/Grid/Grid";

function App() {
  return (
    <>
      <Box>
        <Box></Box>
        <Container bg="black" padding={1}>
          <Grid></Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;