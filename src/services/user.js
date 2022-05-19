import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToCadastro, goToHome } from "../routes/cordinator";

export const login = async (body, nav) => {
    try{
        const res= await axios.post(`${BASE_URL}/login`, body)
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token);
        if (res.data.user.hasAddress === true) {
            goToHome(nav)
        } else {
            goToCadastro(nav)
        }
    } catch(error) {
        alert(error)
    }
}

export const signUp = async (form, nav) => {
    try{
        const res = await axios.post(`${BASE_URL}/signup`, form)
        localStorage.setItem("token", res.data.token);
        alert("Cadastro realizado com sucesso!");
        goToCadastro(nav)
    }catch (error){
        alert(error)
    };
}