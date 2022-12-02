import { Container, styled, Typography, TypographyProps } from "@mui/material";

const BoxStyled = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing(5, 0)};
  gap: ${({ theme }) => theme.spacing(1)};
  flex-wrap: wrap;
`;

const TypographyStyled = styled((props) => (
  <Typography {...props} fontWeight={"bold"} color="primary" />
))<TypographyProps>``;

export default function Footer() {
  return (
    <Container>
      <BoxStyled>
        <div>
          <Typography color={"primary"}>Endereço:</Typography>
          <Typography color={"primary"}>© APP DELIVERY 2023</Typography>
        </div>
        <TypographyStyled>MENU</TypographyStyled>
        <TypographyStyled>Outras Informações</TypographyStyled>
        <TypographyStyled>Nos siga nas redes</TypographyStyled>
      </BoxStyled>
    </Container>
  );
}
