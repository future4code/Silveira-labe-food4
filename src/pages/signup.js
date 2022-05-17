
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { signUp } from "../services/user";
import logo  from "../assets/logo.png";
import { Button } from "@mui/material";
import { goToCadastro } from "../routes/cordinator";
import { Container, Imagem, Titulo, CenterBuntton } from "./Styled/SignupStyled"
import { TextField } from '@mui/material';

export function SignUp(){
    const [form, onChange] = useForm({ name: "", email: "", cpf: "", password: ""})
    const nav = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitForm = async (event) => {
        event.preventDefault()
        localStorage.getItem("token")
        if (form.password === confirmPassword){
            await signUp(form, nav)
        }else{
            alert("Senhas diferentes")
        }
    }

    const onChangeCorfirmPassaword = (event) => {
        setConfirmPassword(event.target.value)
    }

    return(
        <div>
            <Imagem>
                <img src={logo} alt="Logo" /> 
            </Imagem>
            <Titulo>
                <h3>Cadastar</h3>
            </Titulo>
            <Container>
                <form onSubmit={onSubmitForm}>
                    <TextField
                    style={{width: "95%"}}
                    placeholder="Nome"
                    name={"name"}
                    onChange={onChange}
                    value={form.name}
                    label={"Nome"}
                    variant={'outlined'}
                    required
                    />
                    
                    <TextField
                    style={{width: "95%"}}
                    placeholder="Email"
                    name={"Email"}
                    onChange={onChange}
                    value={form.email}
                    label={"email"}
                    variant={'outlined'}
                    required
                    />
                    
                    <TextField
                    style={{width: "95%"}}
                    placeholder="CPF"
                    name={"cpf"}
                    onChange={onChange}
                    value={form.cpf}
                    label={"CPF"}
                    variant={'outlined'}
                    required
                    />
                    
                    <TextField
                    style={{width: "95%"}}
                    placeholder="Senha"
                    name={"password"}
                    onChange={onChange}
                    value={form.password}
                    type={"password"}
                    label={"Senha"}
                    variant={'outlined'}
                    required
                    />
                    
                    <TextField
                    style={{width: "95%"}}
                    placeholder="Confirma Senha"
                    name={"password"}
                    onChange={onChangeCorfirmPassaword}
                    value={confirmPassword}
                    type={"password"}
                    label={"Confirma Senha"}
                    variant={'outlined'}
                    required
                    />

                    <CenterBuntton>
                     <Button onClick={() => goToCadastro(nav) }>Criar</Button>
                    </CenterBuntton>
                 </form>
            </Container> 
        </div>
    )
}