import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardRestaurante } from "../../components/CardRestaurante";
import { MenuHorizontal } from "../../components/MenuHorizontal/MenuHorizontal";
import { InputBuscaRestaurante } from "../../components/InputBuscaRestaurante";
import { MenuFixo } from "../../components/MenuFixo";

import { BASE_URL } from "../../constants/urls";

import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";

import { goToRestaurante } from "../../routes/cordinator";
import { Title, MainContainer, ContainerCards } from "./styled";

export function Home() {
    const {data, getData, isLoading} = useRequestData(`${BASE_URL}/restaurants`, []);
    const [form, onChange, clear] = useForm({busca: "", opcaoSelect: ""});

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(undefined);

    const navigate = useNavigate();

      const restaurantesFiltrados = data.restaurants && data.restaurants.filter((restaurante) => {
          return categoriaSelecionada ? restaurante.category === categoriaSelecionada : restaurante;
        }).filter((restaurante) => {
            return restaurante.name.toUpperCase().includes(form.busca.toUpperCase());
        }).map((restaurante) => {
           return (
               <CardRestaurante
                key={restaurante.id}
                logo={restaurante.logoUrl}
                nome={restaurante.name}
                tempoEntrega={restaurante.deliveryTime}
                frete={restaurante.shipping} 
                onClick={() => goToRestaurante(navigate, restaurante.id)} />
           );
        });

    return (
        <>
            <Title>Rappi4</Title>
            
            <MainContainer>
                <InputBuscaRestaurante valorBusca={form.busca} onChange={onChange} />
                {isLoading && <p style={{textAlign: "center"}}>Carregando...</p>}

                <MenuHorizontal restaurants={data.restaurants} categoriaSelecionada={categoriaSelecionada} setCategoriaSelecionada={setCategoriaSelecionada} />

                <ContainerCards>
                    {restaurantesFiltrados}
                    {data && form.busca !== "" && restaurantesFiltrados.length === 0 && <p style={{textAlign: "center"}}>Por favor faça uma pesquisa sem categoria específica.</p>}
                </ContainerCards>

                <MenuFixo navigate={navigate} isHomePage />
            </MainContainer>
        </>
    )
};