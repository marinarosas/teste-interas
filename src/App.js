import { useEffect, useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { GlobalContext } from '../src/context/GlobalContext'
import { HomePage } from "./pages/HomePage";
import coffees from '../src/coffees'

function App() {

  //const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || [])
  const [cart, setCart] = useState([])

  const totalQuantity = cart.reduce((acc, coffeeProduct) => (coffeeProduct.quantity) + acc, 0)

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // })

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

  const context = {
    coffees,
    cart,
    setCart,
    addCoffeeInCart,
    removeCoffeeOfCart,
    totalQuantity
  }

  return (
      <GlobalContext.Provider value={context}>
        <GlobalStyles />
        <HomePage />
      </GlobalContext.Provider>
  );
}

export default App;
