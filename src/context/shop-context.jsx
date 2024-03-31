import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++ ) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const getTotalCartItemAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            totalAmount += cartItems[itemId];
        }
        return totalAmount;
    };

    const getTotalAmountForItem = (itemId) => {
        let totalAmount = 0;
        if (cartItems[itemId] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
            totalAmount += cartItems[itemId] * itemInfo.price;
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: newAmount}))
    }

    const clearCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        clearCart,
        getTotalAmountForItem,
        getTotalCartItemAmount
    };

    console.log(cartItems)
    
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};