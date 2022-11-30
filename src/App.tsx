import "./App.css";
import { Button, Typography, styled, Box } from "@mui/material";

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
      <BoxStyled sx={{ bgcolor: "primary.main" }} />
      <BoxStyled sx={{ bgcolor: "secondary.main" }} />
    </BoxContainer>
  );
}

export default App;
