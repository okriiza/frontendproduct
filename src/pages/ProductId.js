import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar'

export default function ProductId() {
  const params = useParams();
  const [detailProduct, setDetailProduct] = useState();
  const token = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`, {
      headers: {
        'Authorization': `Bearer ${token.token}`
      }
    }).then(res => {
      // console.log(res)
      setDetailProduct(res.data)
    })

  }, [params.id])

  console.log("detail", detailProduct)

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        detail product
        {/* <p>Nama Brand: {detailProduct.brand}</p>
        <p>Nama Category: {detailProduct.category}</p> */}
      </div>

    </>
  )
}
