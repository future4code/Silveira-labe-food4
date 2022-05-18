import React from "react";
import { useNavigate } from "react-router-dom";

import { CardRestaurante } from "../../components/CardRestaurante";
import { MenuFixo } from "../../components/MenuFixo";

import { BASE_URL } from "../../constants/urls";

import { useRequestData } from "../../hooks/useRequestData";
import { goToRestaurante } from "../../routes/cordinator";

export function Home() {
    const {data, getData, isLoading} = useRequestData(`${BASE_URL}/restaurants`, []);
    const navigate = useNavigate();

    const listaRestaurantes = data.restaurants && data.restaurants.map((restaurante) => {
        return (
            <CardRestaurante
             logo={restaurante.logoUrl}
             nome={restaurante.name}
             tempoEntrega={restaurante.deliveryTime}
             frete={restaurante.shipping} 
             onClick={() => goToRestaurante(navigate, restaurante.id)} />
        );
    })

    return (
        <div>
            <h1>Rappi4</h1>

            <input placeholder="Restaurante" />

            {isLoading && <p>Carregando...</p>}

            {listaRestaurantes}

            <MenuFixo />
        </div>
    )
};