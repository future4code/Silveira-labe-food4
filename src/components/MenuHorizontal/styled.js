import styled from "styled-components";

export const CarouselContainer = styled.div`
    max-width: 100%;
    overflow: overlay;
    display: flex;
    align-items: center;
    height: 20px;
    margin: 1.5rem auto;
    box-sizing: border-box;
    
    ::-webkit-scrollbar {
        display: none;
    };
`

export const Categories = styled.span`
    margin-right: 1.5rem;
    font-weight: bolder;
    color: ${({categoriaAtual, nomeCategoria}) => categoriaAtual === nomeCategoria ? "#e86e5a" : "black"};
`