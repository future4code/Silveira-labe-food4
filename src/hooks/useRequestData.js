import axios from "axios";
import { useState } from "react";

export function useRequestData(initialState, url) {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        try {
            setIsLoading(true);

            const headers = {
                headers: {auth: localStorage.getItem("token")}
            };

            const response = await axios.get(`${url}`, headers);
            setData(response.data);
            setIsLoading(false);
            
        } catch(error) {
            alert("Ocorreu um erro, tente novamente.");
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {getData()}, [url]);
    return {data, getData, isLoading};
};