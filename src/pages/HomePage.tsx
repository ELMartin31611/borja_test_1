import { Paper, Typography } from "@mui/material";
import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";





export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Bienvenido 👋
      </Typography>

      <Typography color="text.secondary">
        Este proyecto usa React + React Router + Material UI.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Usa el menú superior (oscuro) para navegar entre páginas.
      </Typography>
    </Paper>
  );
}
