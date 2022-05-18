import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Paper from '@mui/material/Paper';

export function MenuFixo() {
  const [value, setValue] = React.useState(0);

  return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

          <BottomNavigationAction icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction icon={<ShoppingCartOutlinedIcon />} />
          <BottomNavigationAction icon={<PermIdentityOutlinedIcon />} />
        </BottomNavigation>

      </Paper>
  );
}