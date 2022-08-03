import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'

export default function Product() {
  const [product, setProduct] = useState([]);
  const token = JSON.parse(localStorage.getItem('user'));
  // const token = tokena.token
  useEffect(() => {
    axios.get('https://dummyjson.com/products', {
      headers: {
        'Authorization': `Bearer ${token.token}`
      }
    }).then(res => {
      // console.log(res.data.products)
      setProduct(res.data.products)
    })

  }, [])

  console.log(product)

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {product.map((data) => (
            <div className="col-md-4" key={data.id}>
              <div className='card' style={{ width: "18rem" }}>
                <img src={data.thumbnail} className="img-fluid img-thumbnail" alt={data.title} />
                <div class="card-body">
                  <h5 class="card-title">{data.title}</h5>
                  <p class="card-text">{data.description}</p>
                  <Link to={`/product/${data.id}`} className="btn btn-primary btn-sm mx-2">Detail</Link>
                  <Link to={`/product/edit/${data.id}`} className="btn btn-success btn-sm mx-2">edit</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
