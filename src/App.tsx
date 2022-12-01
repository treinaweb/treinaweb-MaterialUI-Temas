import "./App.css";
import { Button, Typography, styled, Box, Link } from "@mui/material";

const BoxContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxStyled = styled(Box)`
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <BoxContainer>
      <Button variant="outlined" color="secondary" disableRipple={false}>
        BUTTON
      </Button>
      <Link>Link</Link>
    </BoxContainer>
  );
}

export default App;
