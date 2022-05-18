import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { createAddress } from "../services/addAdress"
import { Button, TextField } from '@mui/material';
import { goToHome } from "../routes/cordinator";
import { Container, Imagem, CenterButton } from "./Styled/LoginStyled";
import logo from "../assets/logo.png";

export function CadastroEndereco() {
    const nav = useNavigate()
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createAddress(form,clear,nav)
    }

    return (
        <div>
            <Imagem>
                <img src={logo} alt="Logo" />
            </Imagem>
            <Container>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        style={{width: "95%"}}
                        name="street"
                        value={form.street}
                        onChange={onChange}
                        placeholder="Rua"
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        placeholder="Número"
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={onChange}
                        placeholder="Bairro"
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        placeholder="Cidade"
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="state"
                        value={form.state}
                        onChange={onChange}
                        placeholder="Estado"
                        required
                    />
                    <TextField
                        style={{width: "95%"}}
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        placeholder="Complemento"
                    />
                    <CenterButton>
                        <Button style={{ backgroundColor: "#E86E5A", width: "95%" }} variant="contained" type="submit">Salvar</Button>
                    </CenterButton>
                </form>
            </Container>
        </div>
    )
}