import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CardProduto = (props) => {
  const { states, setters } = useContext(GlobalStateContext)
  const [inCart, setInCart] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // const checkCart = (id) => {
  //   const checkProduct = states.cart.find((produto) => produto.id === id)
  //   return checkProduct
  // }

  const addToCart = (id) => {
    const newProductList = [...states.cart];
    newProductList.push(props.produto)
    setters.setCart(newProductList)
    // console.log("CARRINHO: ", states.cart)
    // {console.log(checkCart)}
    setInCart(true)
  }

  const removeFromCart = (id) => {
    const newProductList = [...states.cart];
    // const selectedProduct = states.produtos.findIndex((produto) => produto.id === id)
    const selectedProduct = states.cart.map((item, index) => {
      if (item.id === id) {
        return index
      }
    });
    newProductList.splice(selectedProduct, 1)
    setters.setCart(newProductList)
    setInCart(false)
    // console.log("CARRINHO: ", states.cart)
    // {console.log(checkCart)}
  }

  const handleModal = ()=>{
    addToCart(props.id)
    handleClose()
  }


  // const checkCart = states.cart.find(produto => produto.id === props.id) ? true : false
  // useEffect(() => {
  //   states.cart.forEach((produto) => {
  //     if (produto.id === props.id) {
  //       setInCart(true);
  //     } else {
  //       setInCart(false);
  //     }
  //   })
  // }, [states.cart])

  console.log(states.cart)
  console.log(states.cart)

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
        {inCart ?
          <button onClick={() => removeFromCart(props.id)}>Remover</button>
          :
          <button onClick={handleOpen}>Adicionar</button>}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <select>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
              <option> 6 </option>
              <option> 7 </option>
              <option> 8 </option>
              <option> 9 </option>
              <option> 10 </option>
            </select>
            <button onClick={handleModal}>Adicionar ao carrinho</button>
          </Box>
        </Modal>


        {/* <button onClick={checkCart ? () => removeFromCart(props.id) : () => addToCart(props.id)}>
          {checkCart ? "Remover" : "Adicionar"}
        </button> */}
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto