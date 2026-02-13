import { useState, useEffect, useMemo } from 'react'

export function useCart() {
    const [cart, setCart] = useState(() => {
        try {
            const cartData = localStorage.getItem('cart')
            return cartData ? JSON.parse(cartData) : []
        } catch (error) {
            console.log("Failed to load cart from localstorage")
            return []
        }
    })
    // persist cart to localStorage
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart))
        } catch (error) {
            console.log("Failed to save cart to localstorage")
        }
    }, [cart])

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'cart') {
                try {
                    const cartData = event.newValue ? JSON.parse(event.newValue) : [];
                    setCart(cartData)
                } catch (error) {
                    console.log("Failed to parse cart from localstorage")
                }
            }
        }
        window.addEventListener('storage', handleStorageChange)
        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find(item => item.id === product.id)
            if (existingItem) {
                return currentCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...currentCart, { ...product, quantity: 1 }]
        })
    }

    const updateCart = (productId, quantity) => {
        if (quantity < 1) return
        setCart((currentCart) => {
            return currentCart.map(item => item.id === productId ? { ...item, quantity } : item)
        })
    }

    const removeFromCart = (productId) => {
        setCart((currentCart) => currentCart.filter(item => item.id !== productId))
    }
    // This is not require in react 19 por later
    const total = useMemo(() => {
        return Number(cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)
    }, [cart])

    return {
        cart,
        addToCart,
        updateCart,
        removeFromCart,
        total
    }
}


