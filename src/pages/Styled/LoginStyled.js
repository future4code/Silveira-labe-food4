import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    height: 100vh;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        justify-content: center;

        h5{
            margin: 5px;
        }
    }
`

export const TextPassword = styled.div`
    width: 95%;
    position: relative;
    display: flex;
    align-items: center;

    .eye{
        position: absolute;
        right: 0;
        margin-right: 15px;
    }
`

export const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    margin-top: 70px;
`

export const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;

    a{
        color: #E86E5A;
        text-decoration: underline;
    }

    Button{
        width: 95%;
        margin: 10px;
    }
`
