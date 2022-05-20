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

  const addToCart = (id) => {
    const newProductList = [...states.cart];
    newProductList.push(props.produto)
    setters.setCart(newProductList)
    console.log(states.cart)
  }

  const removeFromCart = (id) => {
    const selectedProduct = states.produtos.findIndex((produto) => produto.id === id);
    const newProductList = [...states.cart];
    newProductList.splice(selectedProduct, 1)
    setters.setCart(newProductList)
    console.log(states.cart)
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
        <button onClick={() => addToCart(props.id)}>Adicionar</button>
        <button onClick={() => removeFromCart(props.id)}>Remover</button>
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto