import React from "react";
import { useNavigate } from "react-router-dom";

import { CardRestaurante } from "../../components/CardRestaurante";
import { InputBuscaRestaurante } from "../../components/InputBuscaRestaurante";
import { MenuFixo } from "../../components/MenuFixo";

import { BASE_URL } from "../../constants/urls";

import { useRequestData } from "../../hooks/useRequestData";
import { goToRestaurante } from "../../routes/cordinator";
import { MainContainer, Title, InputContainer } from "./styled";

export function Home() {
    const {data, getData, isLoading} = useRequestData(`${BASE_URL}/restaurants`, []);
    const navigate = useNavigate();

    const listaRestaurantes = data.restaurants && data.restaurants.map((restaurante) => {
        return (
            <CardRestaurante
             key={restaurante.id}
             logo={restaurante.logoUrl}
             nome={restaurante.name}
             tempoEntrega={restaurante.deliveryTime}
             frete={restaurante.shipping} 
             onClick={() => goToRestaurante(navigate, restaurante.id)} />
        );
    })

    return (
        <>
                <Title>Rappi4</Title>

            {isLoading && <p style={{textAlign: "center"}}>Carregando...</p>}
            
            <MainContainer>
                <InputBuscaRestaurante />

                {listaRestaurantes}

                <MenuFixo navigate={navigate} />
            </MainContainer>

        </>
    )
};