import React from "react"
import { Container, History, Profile, Info, Address, DisplayCards } from "./Styled/PerfilStyled"

export function Perfil(){
    return(
        <Container>
            <h4>Meu Perfil</h4>
            <Info>
                <hr/>
                <Profile>
                    <h1>Perfil</h1>
                </Profile>
                <hr/>
                <Address>
                    <h1>Endereço</h1>
                </Address>
                <hr/>
            </Info>

            <History>
                <h5>Histórico de pedidos</h5>
                <hr/>
                <DisplayCards>
                    <h1>Cards</h1>
                </DisplayCards>
            </History>
        </Container>
    )
}