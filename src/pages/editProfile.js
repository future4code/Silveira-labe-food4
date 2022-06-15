import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Menu, CenterButton, TextPassword } from "./Styled/editiProfileStyled";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, TextField } from '@mui/material';
import { useForm } from "../hooks/useForm";
import { Edit } from "../services/sendEditProfile";
import { goToPerfil } from "../routes/cordinator";

export function EditProfile() {
const nav = useNavigate()
const  [form, onChange] = useForm({name: "" , email: "",cpf: ""});

const onSubmit = (event) => {
    event.preventDefault();
    Edit(form,nav)
}

    return (
        <Container>
            <Menu>
                <ArrowBackIosNewIcon className="back" onClick={()=>goToPerfil(nav)} />
                <h3>Editar Perfil</h3>
            </Menu>
            <form onSubmit={onSubmit}>
                <TextField
                    style={{width: '95%'}}
                    id="outlined-basic"
                    label="Novo Nome"
                    variant="outlined"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type={"text"}
                    placeholder="nome"
                    required
                /> 
                <TextField
                    style={{width: '95%'}}
                    id="outlined-basic"
                    label="Novo Email"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type={"email"}
                    placeholder="Email"
                    required
                /> 
                <TextField
                    style={{width: '95%'}}
                    id="outlined-basic"
                    label="Novo CPF"
                    variant="outlined"
                    name="cpf"
                    value={form.cpf}
                    onChange={onChange}
                    type={"text"}
                    placeholder="CPF"
                    required
                /> 
                <CenterButton>
                    <Button style={{backgroundColor: '#E86E5A',color: 'black', fontWeight: 'bold'}} type="submit" variant="contained"> Salvar </Button>
                </CenterButton>
            </form>
        </Container>
    )
} 