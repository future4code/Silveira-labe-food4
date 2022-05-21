import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CardProduto from '../components/CardProduto/CardProduto';
import { BASE_URL } from '../constants/urls';
import GlobalStateContext from '../context/GlobalStateContext';
import { Banner, Local, MainContainer } from '../pages/Styled/RestauranteStyled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styled from 'styled-components';
import { goToHome } from '../routes/cordinator';

const Menu = styled.div`
display: flex;
align-items: center;
width: 100%;
position: relative;
margin-top: 10px;

h3{
    width: 100%;
}

.back{
    position: absolute;
    left: 30px;
}
`

export const Restaurante = () => {
  const [rest, setRest] = useState({})
  const { states, setters } = useContext(GlobalStateContext)
  const params = useParams()
  const nav = useNavigate()
  // const restaurante = 1

  const pegaRestDetail = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, { headers: { auth: localStorage.getItem('token') } })
      .then((response) => {
        setRest(response.data.restaurant)
        setters.setProdutos(response.data.restaurant.products)

      }).catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => {
    pegaRestDetail()
  }, [])

  return (
    <MainContainer>
      <Menu>
                <ArrowBackIosNewIcon onClick={()=>goToHome(nav)}  className="back"/>
                <h3 style={{textAlign: "center"}}>Restaurante</h3>
            </Menu>
      {params.produto}
      {rest && rest.name ?
        <Local>
          <Banner src={rest.logoUrl} />
          <p
            className='titulo'>{rest.name}
            <button>Voltar</button>
          </p>
          <p>{rest.category}</p>
          <div>
            <p>{rest.deliveryTime - 10} - {rest.deliveryTime} min</p>
            <p>Frete R${rest.shipping},00</p>
          </div>
          <p>{rest.address}</p>
        </Local>
        : null}
      {states.produtos.length > 0 ? states.produtos.map((produto) => {
        return <CardProduto key={produto.id}
          restId={params.id}
          id={produto.id}
          produto={produto}
          fotoProduto={produto.photoUrl}
          nome={produto.name}
          descricao={produto.description}
          preco={produto.price}
        />;
      }) :
        <h2>Carregando lista de produtos!</h2>}
    </MainContainer>
  )
}
