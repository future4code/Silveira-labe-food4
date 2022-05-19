import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToPerfil } from "../routes/cordinator"



export function Edit(body,nav){
    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }

    const BODY = body

    axios.put(`${BASE_URL}/profile`,BODY,headers)
    .then((res)=>{
        console.log(res)
        goToPerfil(nav)
    })
    .catch((error)=>{
        console.log(error)
    })
}