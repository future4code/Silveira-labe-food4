import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HistoryCard } from "../components/HistoryCard"
import { MenuFixo } from "../components/MenuFixo"
import { BASE_URL } from "../constants/urls"
import { useRequestData } from "../hooks/useRequestData"
import { Container, History, Profile, Info, Address, DisplayCards } from "./Styled/PerfilStyled"
import EditIcon from '@mui/icons-material/Edit';
import { goToEditAddress, goToEditProfile } from "../routes/cordinator"

export function Perfil(){
const profile = useRequestData(`${BASE_URL}/profile`,{})
const history = useRequestData(`${BASE_URL}/orders/history`,[])
const [info,setInfo] = useState()
const nav = useNavigate()

useEffect(()=>{
    setInfo(profile.data.user)
},[profile])

const historyList = history.data.orders && history.data.orders.map((item)=>{
    return (<HistoryCard
            
            />)
})

    return(
        <Container>
            <h4>Meu Perfil</h4>
            <Info>
                <hr/>
                <Profile>
                    <div>
                    <p>{info && info.name}</p>
                    <p>{info && info.email}</p>
                    <p>{info && info.cpf}</p>
                    </div>
                    <EditIcon onClick={()=>goToEditProfile(nav)} style={{ fontSize: '25px',marginBottom: '20px',marginRight:'30px'}}/>
                    
                </Profile>
                <hr/>
                <Address>
                    <div>
                    <h5>Endereço cadastrado</h5>
                    <p>{info && info.address}</p>
                    </div>
                    <EditIcon onClick={()=>goToEditAddress(nav)} style={{ fontSize: '25px',marginBottom:'20px',marginRight:'30px'}}/>
                </Address>
                <hr/>
            </Info>
            <History>
                <h5>Histórico de pedidos</h5>
                <hr/>
                <DisplayCards>
                    {!history.data.orders? historyList : <h3>Histórico vazio</h3>}
                </DisplayCards>
            </History>
            <MenuFixo navigate={nav} isProfilePage/>
        </Container>
    )
}