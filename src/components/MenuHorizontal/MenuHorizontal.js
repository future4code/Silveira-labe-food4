import React from "react";

import { CarouselContainer, Categories } from "./styled";

export function MenuHorizontal({restaurants, categoriaSelecionada, setCategoriaSelecionada}) {
    return (
        <CarouselContainer>
            {restaurants && restaurants.map((restaurant) => {
                return (
                    <Categories 
                     key={restaurant.id}
                     onClick={categoriaSelecionada !== restaurant.category ? () => setCategoriaSelecionada(restaurant.category) : () => setCategoriaSelecionada(undefined)}>
                        {restaurant.category}
                    </Categories>
                );
            })}
        </CarouselContainer>
    );
};