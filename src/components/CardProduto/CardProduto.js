import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import {
  Banner,
  Conteudo,
  DivDesc,
  DivFoto,
  MainContainer,
  Title,
  Price
} from './styled'


const CardProduto = (props) => {
  const { states, setters } = useContext(GlobalStateContext)
  const [inCart, setInCart] = useState(false)

  // const checkCart = (id) => {
  //   const checkProduct = states.cart.find((produto) => produto.id === id)
  //   return checkProduct
  // }

  const addToCart = (id) => {
    const newProductList = [...states.cart];
    newProductList.push(props.produto)
    setters.setCart(newProductList)
    console.log("CARRINHO: ", states.cart)
    {console.log(checkCart)}
  }

  const removeFromCart = (id) => {
    const newProductList = [...states.cart];
    const selectedProduct = states.produtos.findIndex((produto) => produto.id === id)
    newProductList.splice(selectedProduct, 1)
    setters.setCart(newProductList)
    console.log("CARRINHO: ", states.cart)
    {console.log(checkCart)}
  }

  const checkCart = states.cart.find(produto => produto.id === props.id) ? true : false
  // useEffect(() => {
  //   states.cart.forEach((produto) => {
  //     if (produto.id === props.id) {
  //       setInCart(true);
  //     } else {
  //       setInCart(false);
  //     }
  //   })
  // }, [states.cart])

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
        <button onClick={checkCart ? () => removeFromCart(props.id) : () => addToCart(props.id)}>
          {checkCart ? "Remover" : "Adicionar"}
        </button>
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto