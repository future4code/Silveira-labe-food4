import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { createAddress } from "../services/addAdress"
import { Button, TextField } from '@mui/material';
import { Container, Imagem, CenterButton } from "./Styled/LoginStyled";
import logo from "../assets/logo.png";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";

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
        <div>
            <Imagem>
                <img src={logo} alt="Logo" />
            </Imagem>
            <h3 style={{textAlign: "center"}}>Editar Endereço</h3>
            <Container>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        style={{width: "95%"}}
                        name="street"
                        value={form.street}
                        onChange={onChange}
                        placeholder={`Rua: ${data && data.street}`}
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        placeholder={`Número: ${data && data.number}`}
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={onChange}
                        placeholder={`Bairro: ${data && data.neighbourhood}`}
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        placeholder={`Cidade: ${data && data.city}`}
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="state"
                        value={form.state}
                        onChange={onChange}
                        placeholder={`Estado: ${data && data.state}`}
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        placeholder={`Complemento: ${data && data.complement}`}
                    />
                    <CenterButton>
                        <Button style={{ backgroundColor: "#E86E5A", width: "95%" }} variant="contained" type="submit">Salvar Alteração</Button>
                    </CenterButton>
                </form>
            </Container>
        </div>
    )
}