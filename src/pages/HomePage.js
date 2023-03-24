import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { AdvertisingTop } from '../components/AdvertisingTop/AdvertisingTop';
import { CardapioTitleStyled, CoffeeCardsStyles } from './HomePage.styled';
import { CoffeeCard } from '../components/CoffeeCard/CoffeeCard';
import coffees from '../coffees.json';

export const HomePage = () => {

  const [cart, setCart] = useState([])

  const totalQuantity = cart.reduce((acc, coffee) => (coffee.quantity) + acc, 0)

  const totalPrice = cart.reduce((acc, coffee) => (coffee.price * coffee.quantity) + acc, 0)

  const addCoffeeInCart = (productToAdd, quantityToAdd) => {
    const newCart = [...cart]
    const productExist = newCart.find((productInCart) => productInCart.id === productToAdd.id)

    if (productExist) {
      productExist.quantity += Number(quantityToAdd)
    } else {
      newCart.push({ ...productToAdd, quantity: Number(quantityToAdd) })
    }
    setCart(newCart)
  }

  const removeCoffeeOfCart = (coffeeToRemove) => {
    const newCart = [...cart]
    const productRemoveIndex = cart.findIndex((productInCart) => productInCart.id === coffeeToRemove.id)

    if (productRemoveIndex !== -1) {
      newCart.splice(productRemoveIndex, 1)
    }
    setCart(newCart)
  }

  return (
    <>
      <Header
        coffees={coffees}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        cart={cart}
        removeCoffeeOfCart={removeCoffeeOfCart}
      />
      <AdvertisingTop />
      <CardapioTitleStyled>Nossos cafés</CardapioTitleStyled>
      <CoffeeCardsStyles>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id}
            addCoffeeInCart={addCoffeeInCart}
            removeCoffeeOfCart={removeCoffeeOfCart}
            coffee={coffee}
          />
        })}
      </CoffeeCardsStyles>
    </>
  )
}