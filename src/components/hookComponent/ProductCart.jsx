import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCart = ({ product, onAddToCart }) => {
  return (
    <>
      <div className='product-cart product-card'>
        <h3>{product.name}</h3>
        <p className='price'>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </>

  )
}

export default ProductCart
