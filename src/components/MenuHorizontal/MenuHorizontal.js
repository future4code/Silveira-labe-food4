import React from "react";

import { CarouselContainer, Categories } from "./styled";

export function MenuHorizontal({restaurants, categoriaSelecionada, setCategoriaSelecionada}) {
    return (
        <CarouselContainer>
            {restaurants && restaurants.map((restaurant) => {
                return (
                    <Categories 
                     key={restaurant.id}
                     nomeCategoria={restaurant.category}
                     categoriaAtual={categoriaSelecionada}
                     onClick={categoriaSelecionada !== restaurant.category ? () => setCategoriaSelecionada(restaurant.category) : () => setCategoriaSelecionada(undefined)}>
                        {restaurant.category}
                    </Categories>
                );
            })}
        </CarouselContainer>
    );
};