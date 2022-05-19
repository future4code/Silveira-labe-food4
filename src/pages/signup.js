import React, { useState } from "react";import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { signUp } from "../services/user";
import logo  from "../assets/logo.png";
import { Button } from "@mui/material";
import { Container, Imagem, Titulo, TextPassword} from "./Styled/SignupStyled"
import { TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function SignUp(){
    const [form, onChange] = useForm({ name: "", email: "", cpf: "", password: ""})
    const nav = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [viewPassword, setViewPassword] = useState('password')

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

    const showPassword = () => {
        if (viewPassword === 'password') {
            setViewPassword('text')
        } else {
            setViewPassword('password')
        }
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
                    style={{width: '100%'}}
                    id="outlined-basic"
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
                    />
                    <TextField
                    style={{width: '100%'}}
                    id="outlined-basic"
                    placeholder="Email"
                    name={"email"}
                    onChange={onChange}
                    label={"Email"}
                    variant={'outlined'}
                    value={form.email}
                    fullWidth
                    required
                    autoFocus
                    margin="dense"
                    />
                    <TextField
                    style={{width: '100%'}}
                    id="outlined-basic"
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
                    <TextPassword>
                        <TextField
                        style={{width: '100%'}}
                        id="outlined-basic"
                        label={"Confirmar"}
                        variant={'outlined'}
                        name={"password"}
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        type={viewPassword}
                        placeholder="Confirmar Senha"
                        required
                        />
                        {(viewPassword === 'password')? 
                            <VisibilityOffIcon className="eye" onClick={showPassword}/>
                            :
                            <VisibilityIcon className="eye" onClick={showPassword}/>
                        }
                    </TextPassword>
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









