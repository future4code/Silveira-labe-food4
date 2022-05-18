import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToSignUp } from "../routes/cordinator"
import Button from '@mui/material/Button';
<<<<<<< HEAD
// import { Input, TextFields } from "@mui/icons-material";
import {useForm} from "../hooks/useForm"
import {login} from "../services/user"
import { Container,  Imagem, CenterBuntton } from "./Styled/LoginStyled";
import logo  from "../assets/logo.png";
=======
import TextField from '@mui/material/TextField';
import { useForm } from "../hooks/useForm"
import { login } from "../services/user"
import { Container, Imagem, CenterButton } from "./Styled/LoginStyled";
import logo from "../assets/logo.png";
import { TextPassword } from "./Styled/LoginStyled";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function Login() {
    const [form, onChange] = useForm({ email: "", password: "" });
    const [viewPassword, setViewPassword] = useState('password')
>>>>>>> 6e150da304c0c6058d6a4c2108eefffbca29cd4e

    const nav = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        await login(form, nav)
    }

    const showPassword = () => {
        if (viewPassword === 'password') {
            setViewPassword('text')
        } else {
            setViewPassword('password')
        }

    }

    return (
        <Container>
            <Imagem>
                <img src={logo} alt="Logo" />
            </ Imagem>

            <form onSubmit={onSubmit}>
                <h5>Entrar</h5>
                <TextField
                    style={{width: '95%'}}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type={"email"}
                    placeholder="exemplo@email.com"
                    required
                />

                <TextPassword>
                    <TextField
                    style={{width: '100%'}}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type={viewPassword}
                    placeholder="exemplo123"
                    required
                    />
                    {(viewPassword === 'password')? 
                    <VisibilityOffIcon className="eye" onClick={showPassword}/>
                    :
                    <VisibilityIcon className="eye" onClick={showPassword}/>
                    }
                </TextPassword>
                
                <CenterButton>
                    <Button style={{backgroundColor: '#E86E5A',color: 'black', fontWeight: 'bold'}} type="submit" variant="contained"> Entrar </Button>
                    <h5>Não possui cadastro? <a onClick={() => goToSignUp(nav)}>Clique aqui</a></h5>
                </CenterButton>
            </form>
        </Container>
    )
} 