import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDetails() {
  const { productId } = useParams();
  return (
    <div>
      product details
      ID: {productId}
    </div>
  )
}

export default ProductDetails
