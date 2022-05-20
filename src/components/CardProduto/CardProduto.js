import React, { useContext } from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import { Banner, 
  Conteudo, 
  DivDesc, 
  DivFoto, 
  MainContainer,
  Title,
  Price
 } from './styled'


const CardProduto = (props) => {
  const {states,setters} = useContext(GlobalStateContext)

  const teste = ()=> {
    console.log(states.produtos)
  }

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
        <button onClick={teste}>Adicionar</button>
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto