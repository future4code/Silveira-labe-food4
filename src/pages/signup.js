import React, { useState } from "react";import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { signUp } from "../services/user";
import logo  from "../assets/logo.png";
import { Button } from "@mui/material";
import { Container, Imagem, Titulo, CenterBuntton } from "./Styled/SignupStyled"
import { TextField } from '@mui/material';
export function SignUp(){
    const [form, onChange] = useForm({ name: "", email: "", cpf: "", password: ""})
    const nav = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const onSubmitForm = async (event) => {
        setLoading(true)
        event.preventDefault()
        localStorage.getItem("token")
        if (form.password === confirmPassword){
            await signUp(form, nav)
            setLoading(false)
        }else{
            alert("Senhas diferentes")
        }
    }
    const onChangeConfirmPassword = (event) => {
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
    placeholder="Nome"
    name={"name"}
    onChange={onChange}
    label={"Nome"}
    variant={'outlined'}
    value={form.name}
    fullWidth
    required
    autoFocus
    margin="dense"
>
</TextField>
<TextField
    placeholder="Email"
    name={"email"}
    onChange={onChange}
    label={"email"}
    variant={'outlined'}
    value={form.email}
    fullWidth
    required
    autoFocus
    margin="dense"
></TextField>
<TextField
    placeholder="CPF"
    name={"cpf"}
    onChange={onChange}
    label={"CPF"}
    variant={'outlined'}
    value={form.cpf}
    fullWidth
    required
    autoFocus
    margin="dense"
></TextField>
<TextField
    placeholder="Senha"
    name={"password"}
    onChange={onChange}
    label={"Senha"}
    variant={'outlined'}
    value={form.password}
    fullWidth
    required
    autoFocus
    margin="dense" id="senha"
    type={"password"}
></TextField>
<TextField
    placeholder="Confirmar Senha"
    name={"password"}
    onChange={onChangeConfirmPassword}
    label={"Confirmar Senha"}
    variant={'outlined'}
    value={confirmPassword}
    fullWidth
    required
    autoFocus
    margin="dense"
    id="senhaC"
    type={"password"}
></TextField>
<Button
    style={{backgroundColor: '#E86E5A',color: 'black', fontWeight: 'bold'}}
    loading={loading}
    loadingPosition="end"
    variant="contained"
    fullWidth
    type="submit"
>
    Criar
</Button>
</form>
            </Container>
        </div>
    )
}









