import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToHome } from "../routes/cordinator";

export const login = async (body, nav) => {
    try{
        const res= await axios.post(`${BASE_URL}/login`, body)
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token);
        goToHome(nav);
    } catch(error) {
        alert(error)
    }
}