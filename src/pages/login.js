import React from "react"
import { useNavigate } from "react-router-dom"
import { goToCadastro, goToCarrinho, goToHome, goToPerfil, goToRestaurante, goToSignUp } from "../routes/cordinator"
import Button from '@mui/material/Button';
import { Input, TextFields } from "@mui/icons-material";

export function Login(){
const nav = useNavigate()

    return(
        <div>
            <h1>Login</h1>
            <Button variant="contained" onClick={()=> goToSignUp(nav)}>SignUp</Button>
            <Button variant="outlined" onClick={()=> goToCadastro(nav)}>Cadastro</Button>
            <Button variant="contained" onClick={()=> goToHome(nav)}>Home</Button>
            <Button variant="outlined" onClick={()=> goToRestaurante(nav,'B3b24b34b1b2')}>Restaurante</Button>
            <Button variant="contained" onClick={()=> goToPerfil(nav)}>Perfil</Button>
            <Button variant="outlined" onClick={()=> goToCarrinho(nav)}>Carrinho</Button>
        </div>
    )
}