import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    background-color: white;
    border: 0.8px solid #C7C7CC;
    border-radius: 16px;
    word-wrap: break-word;
    color: #D1D1D6;
    p{
        margin: 4px 0px;
        margin-left: 10px;
    }
    .titulo{
        color: #E86E5A;
    }

`
export const DivFoto = styled.div`
    background-size: contain;
    img{
        width: 358px;
        height: 187px;
        border-radius: 16px;
    }
`

export const DivDesc = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Conteudo = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`
export const Banner = styled.div`
    display: flex;
    flex-flow: column;
    border-radius: 16px 16px 0px 0px;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
`
export const Title = styled.div`
color: black;
`

export const Price = styled.div`
color: black;
`