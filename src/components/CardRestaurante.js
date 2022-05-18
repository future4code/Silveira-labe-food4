import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export function CardRestaurante({logo, nome, tempoEntrega, frete, onClick}) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "1rem" }} onClick={onClick}>
      <CardMedia sx={{ overflow: "hidden" }}
        component="img"
        height="140"
        image={logo}
        alt="Logo restaurante"
      />

      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
            <Typography variant="body1" sx={{color: "#e86e5a"}}>
                {nome}
            </Typography>
            <Typography variant="body1" sx={{color: "#b8b8b8"}}>
                {tempoEntrega} min
            </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <Typography variant="body1" sx={{color: "#b8b8b8"}}>
                Frete R${frete},00
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
