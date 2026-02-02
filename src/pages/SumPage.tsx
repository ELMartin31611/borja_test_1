import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";


export default function SumPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const result = useMemo(() => a + b - c, [a, b, c]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          Calculadora de Sueldo Neto

        </Typography>

        <TextField

          type="number"
          value={a}
          label="Sueldo basico"
          onChange={(e) => setA(Number(e.target.value))}
          sx={{ mr: 2, mb: 2 }}
        />

        <TextField

          type="number"
          value={b}
          label="Primas"
          onChange={(e) => setB(Number(e.target.value))}
          sx={{ mr: 2, mb: 2}}
        />



        <TextField
          type="number"
          value={c}
          label="Deducciones"
          onChange={(e) => setC(Number(e.target.value))}
          sx={{ mr: 2, mb: 2 }}
        />

        <Typography sx={{ mt: 1 }}>
        Resultado: <strong>{result}</strong>
      </Typography>
    
    </Paper>
  );
}