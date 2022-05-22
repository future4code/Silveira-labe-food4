import { SystemUpdateAltSharp } from "@mui/icons-material"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import GlobalStateContext from "../context/GlobalStateContext"

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
    const {states,setters} = useContext(GlobalStateContext)
    let [count,setCount] = useState(0)

    useEffect(()=>{
        for(const item of states.cart){
            if(item.id === props.id){
                setCount(count += 1)
            }
        }
    },[])

    return (
        <Card>
            <Imagem>
            <img src={props.photoUrl}/>
            </Imagem>
            <Info>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>{props.price} R$</h3>
            <h3>Contagem: {count}</h3>
            </Info>
        </Card>
    )
}