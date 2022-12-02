import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Icon,
  Drawer,
  Container,
} from "@mui/material";
import { useState } from "react";
import ToogleThemeButton from "../TogleTheme";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const links = [
    "Página inicial",
    "Procurar Comercio",
    "Cadastre Seu Comercio",
    "Contato",
    "Entrar ou Cadastrar",
    "Criar Conta De Entregador",
  ];
  return (
    <AppBar color="inherit">
      <Toolbar component={Container}>
        <img
          src="/tw-express.png"
          alt="logo"
          style={{ width: "150px", marginRight: "24px" }}
        />
        <Box
          sx={{
            width: "100%",
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "space-between",
            gap: 2,
            mr: 2,
          }}
        >
          {links.map((nome) => {
            return <Link href="#">{nome}</Link>;
          })}
        </Box>
        <IconButton
          size="large"
          color="inherit"
          sx={{ mr: 2, display: { md: "none" } }}
          onClick={() => setOpenDrawer(true)}
        >
          <Icon>menu</Icon>
        </IconButton>
        <ToogleThemeButton />
        <Drawer
          open={openDrawer}
          onClick={() => setOpenDrawer(false)}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              m: 2,
            }}
          >
            <img
              src="/tw-express.png"
              alt="logo"
              style={{ width: "150px", margin: "16px 0 24px 0" }}
            />
            {links.map((nome) => {
              return <Link href="#">{nome}</Link>;
            })}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
