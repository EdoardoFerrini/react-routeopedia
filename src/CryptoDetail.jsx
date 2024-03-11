import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  //deve avere lo stesso id che gli passiamo nella Route path
  const { cryptoSymbol, id } = useParams();
  return (
    <div>
      <h1>crypto detail :</h1>
      <p>{cryptoSymbol}</p>
      <h1>Id :</h1>
      <p>{id}</p>
    </div>
  )
}

export default CryptoDetail
