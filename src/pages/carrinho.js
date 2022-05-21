
import React, { useContext, useEffect, useState } from "react"
import { CardCarrinho } from "../components/CardCarrinho"
import { BASE_URL } from "../constants/urls"
import GlobalStateContext from "../context/GlobalStateContext"
import { useRequestData } from "../hooks/useRequestData"
import styled from "styled-components"
import { MenuFixo } from "../components/MenuFixo"
import { useNavigate } from "react-router-dom"


const Menu = styled.div`
display: flex;
align-items: center;
width: 100%;
position: relative;

h3{
    width: 100%;
}
`

export const Address = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #E5E5EA;
padding: 5px;

h5{
    margin: 5px;
}

p{
    margin: 5px;
    font-weight: bold;
}
`

export const Products = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
width: 100%;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

hr{
    width: 100%;
    margin: 0;
}
`


export function Carrinho(){
    const {states,setters} = useContext(GlobalStateContext)
    const address = useRequestData(`${BASE_URL}/profile`,{})
    const [info,setInfo] = useState()
    const nav = useNavigate()

    const teste = ()=> { 
        
    }

    useEffect(()=>{
        setInfo(address.data.user)
    },[address])

    const listaCarrinho =states.cart && states.cart.map((produto)=>{
        return <CardCarrinho
        name={produto.name}
        key={produto.id}
        description={produto.description}
        price={produto.price}
        photoUrl={produto.photoUrl}
        />
    })


    return(
        <Container>
            <Menu>
                <h3 style={{textAlign: "center"}}>Meu Carrinho</h3>
            </Menu>
            <hr/>
            <Address>
                <h5>Endereço cadastrado</h5>
                <p>{info && info.address}</p>
            </Address>
            <hr/>
            <Products>
                {listaCarrinho}
            </Products>
            <button onClick={teste}>teste</button>
            <MenuFixo navigate={nav}  isCartPage/>
        </Container>
    )
}