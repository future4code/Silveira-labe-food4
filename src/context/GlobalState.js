import GlobalStateContext from "./GlobalStateContext";
import React, { useState } from "react";

const GlobalState = (props) => {

const [cart,setCart] = useState([])
const states = { cart }
const setters = { setCart }
const requests = {}

    return <GlobalStateContext.Provider value={{states, setters, requests}}>
                {props.children}
           </GlobalStateContext.Provider>
}

export default GlobalState