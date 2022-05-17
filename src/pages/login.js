import React from "react"
import { useNavigate } from "react-router-dom"
import { goToSignUp } from "../routes/cordinator"
import Button from '@mui/material/Button';
import { useForm } from "../hooks/useForm"
import { login } from "../services/user"
import { Container, Imagem, CenterButton } from "./Styled/LoginStyled";
import logo from "../assets/logo.png";

export function Login() {
    const [form, onChange] = useForm({ email: "", password: "" });
    const nav = useNavigate();

    const onSubmit = async (event) => {
        event.prevenDefault();
        await login(form, nav)
    }

    return (
        <div>
            <Imagem>
                <img src={logo} alt="Logo" />
            </ Imagem>
            <Container>
                <form onSubmit={onSubmit}>
                    <p>E-mail:</p>
                    <input
                        placeholder="email@email.com"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        type={"email"}
                        required
                    ></input>
                    <p>Senha:</p>
                    <input
                        placeholder="Mínimo 6 caracteres"
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        type={"password"}
                        required
                    ></input>
                    <CenterButton>
                        <Button variant="contained" onClick={login}> Entrar </Button>
                        <Button variant="contained" onClick={() => goToSignUp(nav)}>
                            Cadastrar
                        </Button>
                    </CenterButton>


                </form>
            </Container>
        </div>
    )
} 