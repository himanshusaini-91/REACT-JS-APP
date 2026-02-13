import React from 'react'
import './Cart.css'
import CartItem from './CartItem'

const Cart = ({ cartItems, updateQuantity, removeFromCart, total }) => {
    if (cartItems?.length === 0) {
        return (
            <div className='cart-container'>
                <h2 className='cart-header'>Shopping Bag</h2>
                <div className='cart-empty'>
                    <p>Your cart is empty</p>
                    <span style={{ fontSize: '3rem', marginTop: '20px' }}>🛒</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className='cart-container'>
                <h2 className='cart-header'>Shopping Bag</h2>
                <ul className='cart-items-list'>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </ul>
                <div className='cart-summary'>
                    <h3 className='total-price'>Total: ${typeof total === 'string' ? total : total.toFixed(2)}</h3>
                    <button className='checkout-btn'>Proceed to Checkout</button>
                </div>
            </div>
        )
    }
}

export default Cart
