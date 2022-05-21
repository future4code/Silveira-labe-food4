import React from "react"
import styled from "styled-components"

const Card = styled.div`
display: flex;
border: solid 1px;
width: 90%;
margin-top: 20px;
`

const Imagem = styled.div`
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
width: 100%;

img{
width: 100%;
}
`

const Info = styled.div`

`

export function CardCarrinho(props){
    return (
        <Card>
            <Imagem>
            <img src={props.photoUrl}/>
            </Imagem>
            <Info>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>{props.price}</h3>
            </Info>
        </Card>
    )
}