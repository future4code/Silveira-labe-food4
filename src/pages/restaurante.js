import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardProduto from '../components/CardProduto/CardProduto';
import { BASE_URL } from '../constants/urls';
import GlobalStateContext from '../context/GlobalStateContext';
import { Banner, Local, MainContainer } from '../pages/Styled/RestauranteStyled';

export const Restaurante = () => {
  const [rest, setRest] = useState({})
  const { states, setters } = useContext(GlobalStateContext)
  const params = useParams()
  // const restaurante = 1
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJXVU1Bc0JSS2hGcGZYbmdPTEtjIiwibmFtZSI6Ikx1aXMiLCJlbWFpbCI6Imx1aXNfZW1haWxAaG90bWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBkYSBHbMOzcmlhLCAyMTAsIENhc2EgLSBDZW50cm8iLCJpYXQiOjE2NTI4MTU1MzZ9.yKNU8UZnKAEoZN_KYX9AuDtpB3rg9yPS58GNrnhhZmY"

  const pegaRestDetail = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, { headers: { auth: token } })
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
