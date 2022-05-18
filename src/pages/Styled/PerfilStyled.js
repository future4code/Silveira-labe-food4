import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h4{
    text-align: center;
}
`

export const Info = styled.div`
display: flex;
flex-direction: column;
width: 100%;

hr{
    width: 100%;
    margin: 0;
}

p{
    margin: 5px;
    font-weight: bold;
}
`

export const Profile = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 5px;

div{
    width: 100%;
    margin-left: 10px;
}

p{
    margin: 5px;
    font-weight: bold;
}
`

export const Address = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #E5E5EA;
width: 100%;
padding: 5px;

div{
    width: 100%;
    margin-left: 10px;
}

h5{
    margin: 5px;
}

p{
    margin: 5px;
    font-weight: bold;
}
`

export const History = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
width: 90%;


hr{
    width: 100%;
    background-color: black;
}

h5{
    text-align: left;
    width: 100%;
    margin: 0;
}
`

export const DisplayCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`