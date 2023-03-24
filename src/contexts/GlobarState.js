import { useEffect, useState } from 'react';
import coffees from '../coffees.json'

const GlobarState = () => {

  //const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || [])
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  let [quantityToAdd, setQuantityToAdd] = useState(0)

  const totalQuantity = cart.reduce((acc, coffee) => (coffee.quantity) + acc, 0)

  const totalPrice = cart.reduce((acc, coffee) => (coffee.price * coffee.quantity) + acc, 0)

  console.log("QUANTIDADE TOTAL:", totalQuantity);
  console.log("QUANTIDADE TO ADD:", quantityToAdd)

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }, [cart])

  const addCoffeeInCart = (productToAdd) => {
    const newCart = [...cart]
    const productExist = newCart.find((productInCart) => productInCart.id === productToAdd.id)

    if (productExist) {
      productExist.quantity += quantityToAdd
    } else {
      newCart.push({ ...productToAdd, quantity: quantityToAdd })
    }
    setCart(newCart)
    //localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const removeCoffeeOfCart = (coffeeToRemove) => {
    const newCart = [...cart]
    const productRemoveIndex = cart.findIndex((productInCart) => productInCart.id === coffeeToRemove.id)
    if (productRemoveIndex !== -1) {
      newCart.splice(productRemoveIndex, 1)
    }
    setCart(newCart)
  }

  // const increaseQuantityInCart = (productToIncrease) => {
  //   const newCart = [...cart]
  //   const productFound = newCart.find((productInCart) => productInCart.id === productToIncrease.id)
  //   if (!productFound) {
  //     const newProduct = { ...productToIncrease, quantity: 1 }
  //     newCart.push(newProduct)
  //     setQuantityToAdd(newProduct.quantity)
  //   } else {
  //     productFound.quantity++
  //   }
  //   setCart(newCart)
  // }

  const increaseQuantityInCart = () => {
    setQuantityToAdd(quantityToAdd + 1)
  }

  console.log(quantityToAdd);
  // const decreaseQuantityInCart = (productToDecrease) => {
  //   if (productToDecrease.quantity > 1) {
  //     const newCart = [...cart]
  //     const productFound = newCart.find((productInCart) => productInCart.id === productToDecrease.id)
  //     productFound.quantity--
  //     setCart(newCart)
  //   }
  // }

  const decreaseQuantityInCart = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(quantityToAdd - 1)
    }
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
    increaseQuantityInCart,
    decreaseQuantityInCart,
    totalPrice,
    quantityToAdd,
    setQuantityToAdd
  }

}

export default GlobarState