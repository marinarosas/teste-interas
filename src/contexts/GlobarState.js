import { useEffect, useState } from 'react';
import React from 'react'
import coffees from '../coffees.json'


const GlobarState = () => {

    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || [])
    const [cart, setCart] = useState(cartFromLocalStorage)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenClose, setIsOpenClose] = useState(false)

    const totalQuantity = cart.reduce((acc, coffeeProduct) => (coffeeProduct.quantity) + acc, 0)

    // useEffect(() => {
    //   localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart])

    const addCoffeeInCart = (productToAdd) => {
        const newCart = [...cart]

        const productFound = newCart.find((productInCart) => productInCart.id === productToAdd.id)

        if (!productFound) {
            const newProduct = { ...productToAdd, quantity: 1 }
            newCart.push(newProduct)
        } else {
            productFound.quantity++
        }
        setCart(newCart)
        //localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const removeCoffeeOfCart = (productToRemove) => {
        const newCart = [...cart]
        //const productRemove = newCart.find((productInCart) => productInCart.id === productToRemove.id)
        const productRemoveIndex = newCart.findIndex((productInCart) => productInCart.id === productToRemove.id)
        newCart.splice(productRemoveIndex, 1)
        setCart(newCart)
    }

    return {
        coffees,
        cart,
        setCart,
        addCoffeeInCart,
        removeCoffeeOfCart,
        totalQuantity,
        isOpen,
        setIsOpen,
        isOpenClose,
        setIsOpenClose
    }

}

export default GlobarState