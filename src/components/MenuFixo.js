import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Paper from '@mui/material/Paper';

import iconeHomeBranco from "../assets/white-homepage.svg";
import iconeCarrinhoBranco from "../assets/white-shopping-cart.svg";
import iconePerfilBranco from "../assets/white-profile.svg";
import iconeHomeAtivo from "../assets/red-homepage.svg";
import iconeCarrinhoAtivo from "../assets/red-shopping-cart.svg";
import iconePerfilAtivo from "../assets/red-profile.svg";

import { goToCarrinho, goToHome, goToPerfil } from '../routes/cordinator';

export function MenuFixo({navigate, isHomePage, isCartPage, isProfilePage}) {
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

          <BottomNavigationAction icon={ <img src={isHomePage ? iconeHomeAtivo : iconeHomeBranco} alt="" /> } onClick={ () => goToHome(navigate) } />
          <BottomNavigationAction icon={ <img src={isCartPage ? iconeCarrinhoAtivo : iconeCarrinhoBranco} alt="" /> } onClick={ () => goToCarrinho(navigate)} />
          <BottomNavigationAction icon={ <img src={isProfilePage ? iconePerfilAtivo : iconePerfilBranco} alt="" /> } onClick={ () => goToPerfil(navigate)} />
        </BottomNavigation>

      </Paper>
  );
}