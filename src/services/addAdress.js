import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createAddress = (body, clear, nav) => {
    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            "auth": localStorage.getItem("token")
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            console.log(res.response.data.message)
            clear()
        }).catch((err) => {
            alert("Ocorreu um erro!!")
            console.log(err.response.data.message);
        })
}