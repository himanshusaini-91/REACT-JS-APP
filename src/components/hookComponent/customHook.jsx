import React from 'react'
import { useCart } from '../../hooks/useCart.js'
import { product as products } from '../../data/product.js'
import Cart from './cart.jsx'
import ProductCart from './ProductCart.jsx'
const CustomHook = () => {
  const { cart, addToCart, updateCart, removeFromCart, total } = useCart()
  return (
    <div className="shop-layout">
      <h1 className="shop-header">React Shop</h1>
      <main className='products-section'>
        <div className="products-grid">
          {products.map((product) => (<ProductCart
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
          ))}
        </div>
      </main>
      <section className='cart-section'>
        <Cart
          cartItems={cart}
          updateQuantity={updateCart}
          removeFromCart={removeFromCart}
          total={total}
        />
      </section>
    </div>
  )
}

export default CustomHook