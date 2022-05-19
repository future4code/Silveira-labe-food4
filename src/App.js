import React, { useEffect, useState } from 'react';
import {createGlobalStyle} from 'styled-components'
import {Router} from './routes/routes';
import styled from 'styled-components';
import splashScreen from './assets/SplashScreen.png'
import GlobalState from './context/GlobalState';


const GLobalStyle = createGlobalStyle`

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background-color: white;
}
`

const SplashScreen = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${splashScreen});
background-size: cover;
background-repeat: no-repeat;
`

function App() {
const [loading,setLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])

  return (
    <div >
    <GlobalState>
      <GLobalStyle/>
      {loading? <SplashScreen /> : <Router/>}
    </GlobalState>
    </div>
  );
}

export default App;
