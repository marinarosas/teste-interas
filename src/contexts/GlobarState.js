import { useEffect, useState } from 'react';
import coffees from '../coffees.json'

const GlobarState = () => {

  //const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || [])
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenClose, setIsOpenClose] = useState(false)
  //const [coffees, setCoffees] = useState(coffeesData)

  const totalQuantity = cart.reduce((acc, coffeeProduct) => (coffeeProduct.quantity) + acc, 0)

  console.log("QUANTIDADE TOTAL:", totalQuantity);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }, [cart])

  const addCoffeeInCart = (productToAdd) => {
    const newCart = [...cart]
    console.log(newCart, "NOVO CARRINHO")
    const productFound = newCart.find((productInCart) => productInCart.id === productToAdd.id)
    console.log(productFound)
    if (!productFound) {
      const newProduct = { ...productToAdd, quantity: 1 }
      newCart.push(newProduct)
    } else {
      productFound.quantity++
    }
    setCart(newCart)
    //localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const removeCoffeeOfCart = (coffeeToRemove) => {
    const newCart = [...cart]
    const productRemove = newCart.find((productInCart) => productInCart.id === coffeeToRemove.id)
    //const productRemoveIndex = newCart.findIndex((productInCart) => productInCart.id === coffeeToRemove.id)
    newCart.splice(productRemove, 1)
    setCart(newCart)
  }

  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart]
    const productFound = newCart.find((productInCart) => productInCart.id === productToIncrease.id)
    if (!productFound) {
      const newProduct = { ...productToIncrease, quantity: 1 }
      newCart.push(newProduct)
    } else {
      productFound.quantity++
    }
    setCart(newCart)
  }

  const decreaseQuantityInCart = (productToDecrease) => {
    if (productToDecrease.quantity > 1) {
      const newCart = [...cart]
      const productFound = newCart.find((productInCart) => productInCart.id === productToDecrease.id)
      productFound.quantity--
      setCart(newCart)
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
    isOpenClose,
    setIsOpenClose,
    increaseQuantityInCart,
    decreaseQuantityInCart
  }

}

export default GlobarState