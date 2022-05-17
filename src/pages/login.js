import React from "react"
import { useNavigate } from "react-router-dom"
import {  goToSignUp } from "../routes/cordinator"
import Button from '@mui/material/Button';
// import { Input, TextFields } from "@mui/icons-material";
import {useForm} from "../hook/useForm"
import {login} from "../services/user"
import { Container } from "./Styled/LoginStyled";

export function Login(){
    const [form, onChange] = useForm({ email: "", password: ""});
    const nav = useNavigate();

    const onSubmit = async (event) => {
        event.prevenDefault();
        await login(form, nav)
    }

    return(
        <div>
            <Container>
                <form onSubmit={onSubmit}>
                    <p>E-mail:</p>
                    <input
                    placeholder="Email"
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
                    placeholder="Senha"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    type={"password"}
                    required
                    ></input>
                    <div>
                        <Button onClick={login}> Entrar </Button>
                        <Button class="btn" onClick={() => goToSignUp(nav)}>
                        Cadastrar
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    )
} 