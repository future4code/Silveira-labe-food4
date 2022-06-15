import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    position: relative;
    overflow: hidden;
    .categoria{
        width: 95%;
        padding: 5px 0;
        border-bottom: 2px solid black;
    }
`
export const Local = styled.div`
    display: flex;
    flex-flow: column;
    width: 90%;
    color: #000000;
    margin-top: 20px;

    p {
        margin: 5px 15px;
        margin-left: 0;
        color: #b8b8b8;
    }

    .titulo {
        color: #E86E5A;
        font-weight: bolder;
    }

    div {
        display: flex;
    }
`
export const Banner = styled.div`
    height: 150px;
    border-radius: 15px 15px 0px 0px;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: 100% 100%;
`