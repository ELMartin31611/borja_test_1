import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import MultiplyPage from "./pages/MultiplyPage";
import SumPage from "./pages/SumPage";

const linkBtnSx = {
  color: "white",
  textTransform: "none",
  borderRadius: 2,
  px: 2,
  "&.active": { bgcolor: "rgba(255,255,255,.12)" },
};

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#343a40" }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mr: 2 }}>
            Mi App Bootstrap
          </Typography>

          <Button component={NavLink} to="/" end sx={linkBtnSx}>
            Home
          </Button>
          <Button component={NavLink} to="/producto" sx={linkBtnSx}>
            usuario
          </Button>
          <Button component={NavLink} to="/sueldo" sx={linkBtnSx}>
            sueldo
          </Button>
           <Button component={NavLink} to="/bono" sx={linkBtnSx}>
            bono
          </Button>
        

          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto" element={<ProductsPage />} />
          <Route path="/sueldo" element={<SumPage />} />
          <Route path="/bono" element={<MultiplyPage />} />
        </Routes>
      </Container>
    </>
  );
}