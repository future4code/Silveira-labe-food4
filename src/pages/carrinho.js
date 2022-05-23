
import React, { useContext, useEffect, useState } from "react"
import { CardCarrinho } from "../components/CardCarrinho"
import { BASE_URL } from "../constants/urls"
import GlobalStateContext from "../context/GlobalStateContext"
import { useRequestData } from "../hooks/useRequestData"
import styled from "styled-components"
import { MenuFixo } from "../components/MenuFixo"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import axios from "axios"

const Menu = styled.div`
display: flex;
align-items: center;
width: 100%;
position: relative;

h3{
    width: 100%;
}
`

const PlaceOrder = styled.form`

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

export const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;

    a{
        color: #E86E5A;
        text-decoration: underline;
    }

    Button{
        width: 95%;
        margin: 10px;
    }
`

export const Products = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
width: 100%;
margin-bottom: 30px;
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
export const PaymentMethod = styled.div`

`


export function Carrinho(){
    const {states,setters} = useContext(GlobalStateContext)
    const address = useRequestData(`${BASE_URL}/profile`,{})
    const [info,setInfo] = useState()
    const [method,setMethod] = useState()
    const nav = useNavigate()

    const onSubmitOrder = (e)=> { 
        e.preventDefault()
    }

    const onChangeMethod = (e)=> { 
        setMethod(e.target.value)
    }

    useEffect(()=>{
        setInfo(address.data.user)
    },[address])

    const listaCarrinho =states.cart && states.cart.filter((element,pos)=>{
        return states.cart.indexOf(element) == pos
    }).map((produto)=>{
        return <CardCarrinho
        name={produto.name}
        key={produto.id}
        id={produto.id}
        description={produto.description}
        price={produto.price}
        photoUrl={produto.photoUrl}
        />
    })

    const checkQuantity = (id) => {
        let quantidade = 0;

        for(const item of states.cart) {
            if(item.id === id) {
                quantidade++;
            }
        }

        return quantidade;
    };

    const testeLista = states.cart.map((produto) => {
        return {id: produto.id, quantity: checkQuantity(produto.id)}
    })

    console.log(testeLista)


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
            <hr/>
            <PlaceOrder onSubmit={onSubmitOrder}>
                <PaymentMethod >
                    <input onChange={onChangeMethod} value={'money'} type={'checkbox'}/> dinheiro
                    <input onChange={onChangeMethod} value={'creditcard'} type={'checkbox'}/> cartão de credito
                </PaymentMethod>
                <CenterButton>
                        <Button style={{ backgroundColor: "#E86E5A", width: "100%" }} variant="contained" type="submit">Confirmar Compra</Button>
                </CenterButton>
            </PlaceOrder>
            <MenuFixo navigate={nav}  isCartPage/>
        </Container>
    )
}