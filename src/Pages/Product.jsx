import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'

function Product() {
  const navigate= useNavigate();

  const[goToProduct, setGoToProduct]= useState(()=>{
    return false;
  })
  return (
    <div>
      Product Page 
      <br/>
      <button onClick={()=>{
        navigate("/product/create")
      }}>
        Add Product{" "}
      </button>
      <br/>
      <Link to={`/product/detail/5`}>
      <button >Navigate to Product Detail - 5</button>
      </Link>
      <br/>

      {goToProduct && <Navigate to="/product/details/3"></Navigate>}
      <button onClick={()=>setGoToProduct({goToProduct : true})}>Navigate to Product - 3(useState)</button>
    </div>
  )
}

export default Product
