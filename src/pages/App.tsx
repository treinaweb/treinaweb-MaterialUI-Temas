import Header from "../components/Header";
import { styled, Box, Typography, Button, Container } from "@mui/material";

const BackgroundImgeStyled = styled("div")`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-image: url("/bghome-1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

const BoxContainer = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

function App() {
  return (
    <div>
      <Header />
      <BackgroundImgeStyled />
      <Container>
        <BoxContainer>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              src="/aplicativo.png"
              alt="telefone treinaweb expresso"
              style={{ width: "250px" }}
            />
          </Box>
          <Box>
            <Typography variant="h3" component={"h1"} color="primary">
              TreinaWeb Expresso no seu celular!
            </Typography>
            <Typography variant="body1" paragraph color="primary">
              Baixe grátis o nosso aplicativo! Um verdadeiro shopping na palma
              da sua mão.
            </Typography>
            <Box sx={{ my: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Button variant="contained" sx={{ bgcolor: "grey", mr: 2 }}>
                APP STORE
              </Button>
              <Button variant="contained" sx={{ bgcolor: "grey" }}>
                GOOGLE PLAY
              </Button>
            </Box>
          </Box>
        </BoxContainer>
      </Container>
    </div>
  );
}

export default App;
