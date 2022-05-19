
import React, { useContext } from "react"
import GlobalStateContext from "../context/GlobalStateContext"


export function Carrinho(){
    const {states,setters} = useContext(GlobalStateContext)

    const teste = ()=> {
        setters.setCart("GlobalState funcionou!") 
        console.log(states.cart)
    }


    return(
        <div>
            <h1>Carrinho</h1>
            <button onClick={teste}>Teste</button>
        </div>
    )
}