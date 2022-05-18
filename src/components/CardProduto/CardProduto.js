import React from 'react'
import { Banner, Conteudo, MainContainer } from './styled'

const CardProduto = (props) => {
    console.log(props)
  return (
    <MainContainer>
        <Banner src={props.logo}/>
        <Conteudo>
          <div>
        <img src={props.fotoProduto}/>
        </div>       
            <p className='titulo'>{props.nome}</p>
           <p>{(props.descricao)}</p>
            <p>R${(props.preco)}0,00</p>
      
           
        
        </Conteudo>
    </MainContainer>
  )
}

export default CardProduto