import GlobalStateContext from "./GlobalStateContext";
import React, { useEffect, useState } from "react";

const GlobalState = (props) => {

const [cart,setCart] = useState([])
const [produtos,setProdutos] = useState([])
const [restaurant,setRestaurant] = useState([])
const [postBody,setPostBody] = useState([])

const states = {postBody,restaurant, cart, produtos }
const setters = {setRestaurant,setRestaurant, setCart, setProdutos }
const requests = {}

    return <GlobalStateContext.Provider value={{states, setters, requests}}>
                {props.children}
           </GlobalStateContext.Provider>
}

export default GlobalState