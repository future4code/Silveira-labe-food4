import React from 'react'
import { Banner, Conteudo, DivDesc, DivFoto, MainContainer } from './styled'

const CardProduto = (props) => {
  console.log(props)
  return (
    <MainContainer>
      <Banner src={props.logo} />
      <Conteudo>
        <DivFoto>
          <img src={props.fotoProduto} />
        </DivFoto>
        <DivDesc>
          <div>
            <p className='titulo'>{props.nome}</p>
            <p>{(props.descricao)}</p>
          </div>
          <div>
            <p>R${(props.preco)}0,00</p>
          </div>
        </DivDesc>
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto