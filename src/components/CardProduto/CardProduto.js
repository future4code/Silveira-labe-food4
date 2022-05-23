import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useContext, useState } from 'react'
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
  const [number, setNumber] = useState(1);
  

  const onChangeNumber = (e)=>{
    setNumber(e.target.value)
  }

  const addToCart = (id) => {
    const newProductList = [...states.cart];
    for(let i=0 ; i < number; i++){
      newProductList.push(props.produto)
    }
    setters.setCart(newProductList)
    setInCart(true)
  }

  const removeFromCart = (id) => {
    const newProductList = [...states.cart];
    const selectedProduct = states.cart.map((item, index) => {
      if (item.id === id) {
        return index
      }
    });
    newProductList.splice(selectedProduct, number)
    setters.setCart(newProductList)
    setInCart(false)
  }

  const handleModal = ()=>{
    addToCart(props.id)
    handleClose()
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
            <select onChange={onChangeNumber}>
              <option value={1}> 1 </option>
              <option value={2}> 2 </option>
              <option value={3}> 3 </option>
              <option value={4}> 4 </option>
              <option value={5}> 5 </option>
              <option value={6}> 6 </option>
              <option value={7}> 7 </option>
              <option value={8}> 8 </option>
              <option value={9}> 9 </option>
              <option value={10}> 10 </option>
            </select>
            <button onClick={handleModal}>Adicionar ao carrinho</button>
          </Box>
        </Modal>
      </Conteudo>
    </MainContainer >
  )
}

export default CardProduto