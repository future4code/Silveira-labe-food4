import axios from "axios";
import { useState, useEffect } from "react";

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        try {
            setIsLoading(true);

            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJXVU1Bc0JSS2hGcGZYbmdPTEtjIiwibmFtZSI6Ikx1aXMiLCJlbWFpbCI6Imx1aXNfZW1haWxAaG90bWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBkYSBHbMOzcmlhLCAyMTAsIENhc2EgLSBDZW50cm8iLCJpYXQiOjE2NTI4MTU1MzZ9.yKNU8UZnKAEoZN_KYX9AuDtpB3rg9yPS58GNrnhhZmY"

            const headers = {
                headers: {auth: token}
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