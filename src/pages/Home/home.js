import React, { useContext, useState } from "react";
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
import GlobalStateContext from "../../context/GlobalStateContext";

export function Home() {
    const {data, getData, isLoading} = useRequestData(`${BASE_URL}/restaurants`, []);
    const [form, onChange, clear] = useForm({busca: "", opcaoSelect: ""});
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(undefined);
    const {states,setters} = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const checkCartBefore = (resId)=>{
        console.log(states.cart)
        if((states.cart.length === 0) || (states.restaurant == resId)){
            goToRestaurante(navigate, resId)
        }
        else{alert("por favor conclua sua compra atual ou esvazie o carrinho!")}
    }

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
                onClick={()=>checkCartBefore(restaurante.id)} />
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