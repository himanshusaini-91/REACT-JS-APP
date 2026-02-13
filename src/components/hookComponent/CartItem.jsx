import React from 'react'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    return (
        <li className='cart-item'>
            <div className='cart-item-info'>
                <h3>{item.name}</h3>
                <p className='price'>${item.price}</p>
            </div>
            <div className='cart-item-actions'>
                <div className='quantity-controls'>
                    <button className='quantity-btn' onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <FaMinus />
                    </button>
                    <span className='quantity-value'>{item.quantity}</span>
                    <button className='quantity-btn' onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <FaPlus />
                    </button>
                </div>
                <button className='remove-btn' onClick={() => removeFromCart(item.id)} title="Remove Item">
                    <FaTrash />
                </button>
            </div>
        </li>
    )
}

export default CartItem
