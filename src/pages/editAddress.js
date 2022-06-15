import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { createAddress } from "../services/addAdress"
import { Button, TextField } from '@mui/material';
import { Imagem, CenterButton } from "./Styled/LoginStyled";
import logo from "../assets/logo.png";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { goToPerfil } from "../routes/cordinator";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 95%;
margin-bottom: 100px;
width: 100%;

form{
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 0;
}
`

const Menu = styled.div`
display: flex;
align-items: center;
width: 100%;
position: relative;
margin-top: 10px;

h3{
    width: 100%;
}

.back{
    position: absolute;
    left: 30px;
}
`

export function EditAddress() {
    const nav = useNavigate()
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const address = useRequestData(`${BASE_URL}/profile/address`,{})
    const [data,setData] = useState()


    const onSubmitForm = (event) => {
        event.preventDefault()
        createAddress(form,clear,nav)
    }

    const test = ()=>{
        console.log(data)
    }

    useEffect(()=>{
        setData(address.data.address)
    },[address])

    return (
        <div style={{height: '100vh',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
            <Menu>
                <ArrowBackIosNewIcon onClick={()=>goToPerfil(nav)}  className="back"/>
                <h3 style={{textAlign: "center"}}>Editar Endereço</h3>
            </Menu>
            <Container>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        style={{width: "100%"}}
                        name="street"
                        value={form.street}
                        onChange={onChange}
                        placeholder={`Rua: ${data && data.street}`}
                        required
                    />
                    <TextField
                        style={{width: "100%"}}
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        placeholder={`Número: ${data && data.number}`}
                        required
                    />
                    <TextField
                        style={{width: "100%"}}
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={onChange}
                        placeholder={`Bairro: ${data && data.neighbourhood}`}
                        required
                    />
                    <TextField
                        style={{width: "100%"}}
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        placeholder={`Cidade: ${data && data.city}`}
                        required
                    />
                    <TextField
                        style={{width: "100%"}}
                        name="state"
                        value={form.state}
                        onChange={onChange}
                        placeholder={`Estado: ${data && data.state}`}
                        required
                    />
                    <TextField
                        style={{width: "100%"}}
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        placeholder={`Complemento: ${data && data.complement}`}
                    />
                    <CenterButton>
                        <Button style={{ backgroundColor: "#E86E5A", width: "100%" }} variant="contained" type="submit">Salvar Alteração</Button>
                    </CenterButton>
                </form>
            </Container>
        </div>
    )
}