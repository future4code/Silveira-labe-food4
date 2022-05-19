import React from 'react'
import { Banner, 
  Conteudo, 
  DivDesc, 
  DivFoto, 
  MainContainer,
  Title,
  Price
 } from './styled'

const CardProduto = (props) => {
  return (
    <MainContainer>
      <Banner src={props.logo} />
      <Conteudo>
        <DivFoto>
          <img src={props.fotoProduto} />
        </DivFoto>
        <DivDesc>
          <Title>
            <p className='titulo'>{props.nome}</p>
            <p>{(props.descricao)}</p>
          </Title>
          <Price>
            <p>R${(props.preco)}</p>
          </Price>
        </DivDesc>
        <button>Adicionar</button>
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto