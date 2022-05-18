import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import { Login } from "../pages/login";
import { SignUp } from '../pages/signup'
import { Home } from '../pages/Home/home'
import { CadastroEndereco } from '../pages/cadastroEndereco'
import { Carrinho } from '../pages/carrinho'
import { Perfil } from '../pages/perfil'
import { Restaurante } from '../pages/restaurante'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="home" element={<Home />} />
                <Route path="cadastro" element={<CadastroEndereco />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="perfil" element={<Perfil />} />
                <Route path="restaurante/:id" element={<Restaurante />} />
            </Routes>
        </BrowserRouter>
    )
}