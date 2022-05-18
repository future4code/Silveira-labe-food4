import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Paper from '@mui/material/Paper';
import { goToCarrinho, goToHome, goToPerfil } from '../routes/cordinator';

export function MenuFixo({navigate}) {
  const [value, setValue] = React.useState(0);

  return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, border: "1px solid #b8b8b8" }} elevation={3}>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

          <BottomNavigationAction icon={<HomeOutlinedIcon fontSize="large" />} onClick={ () => goToHome(navigate) } />
          <BottomNavigationAction icon={<ShoppingCartOutlinedIcon fontSize="large" onClick={ () => goToCarrinho(navigate) } />} />
          <BottomNavigationAction icon={<PermIdentityOutlinedIcon fontSize="large" onClick={ () => goToPerfil(navigate) } />} />
        </BottomNavigation>

      </Paper>
  );
}