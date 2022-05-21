import GlobalStateContext from "./GlobalStateContext";
import React, { useEffect, useState } from "react";

const GlobalState = (props) => {

const [cart,setCart] = useState([])
const [produtos,setProdutos] = useState([])
const states = { cart, produtos }
const setters = { setCart, setProdutos }
const requests = {}

    return <GlobalStateContext.Provider value={{states, setters, requests}}>
                {props.children}
           </GlobalStateContext.Provider>
}

export default GlobalState