import React from "react"
import { useNavigate } from "react-router-dom"
import { goToCadastro, goToCarrinho, goToHome, goToPerfil, goToRestaurante, goToSignUp } from "../routes/cordinator"


export function Login(){
const nav = useNavigate()

    return(
        <div>
            <h1>Login</h1>
            <button onClick={()=> goToSignUp(nav)}>SignUp</button>
            <button onClick={()=> goToCadastro(nav)}>Cadastro</button>
            <button onClick={()=> goToHome(nav)}>Home</button>
            <button onClick={()=> goToRestaurante(nav,'b3b24b34b1b2')}>Restaurante</button>
            <button onClick={()=> goToPerfil(nav)}>Perfil</button>
            <button onClick={()=> goToCarrinho(nav)}>Carrinho</button>
        </div>
    )
}