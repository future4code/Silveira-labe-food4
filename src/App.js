import React, { useEffect, useState } from 'react';
import {createGlobalStyle} from 'styled-components'
import {Router} from './routes/routes';
import styled from 'styled-components';

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
background-color: red;
`

function App() {
const [loading,setLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[])

  return (
    <div >
      <GLobalStyle/>
      {loading? <SplashScreen /> : <Router/>}
    </div>
  );
}

export default App;
