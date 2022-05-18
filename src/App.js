import React from 'react';
import {createGlobalStyle} from 'styled-components'
import {Router} from './routes/routes';


const GLobalStyle = createGlobalStyle`

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background-color: white;
}
`

function App() {
  return (
    <div >
    
      <GLobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
