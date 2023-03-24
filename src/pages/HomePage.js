import React, { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { AdvertisingTop } from '../components/AdvertisingTop/AdvertisingTop'
import { CardapioTitleStyled, CoffeeCardsStyles } from './HomePage.styled'
import { CoffeeCard } from '../components/CoffeeCard/CoffeeCard'
import { GlobalContext } from '../contexts/GlobalContext'
import { ModalCart } from '../components/Modal/ModalCart'

export const HomePage = () => {

  const context = useContext(GlobalContext)

  const { coffees, addCoffeeInCart, removeCoffeeOfCart, cart, isOpen, isOpenClose } = context

  return (
    <>
      <Header />
      <AdvertisingTop />
      <CardapioTitleStyled>Nossos cafés</CardapioTitleStyled>
      <CoffeeCardsStyles>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id}
            addCoffeeInCart={addCoffeeInCart}
            removeCoffeeOfCart={removeCoffeeOfCart}
            coffee={coffee}
            cart={cart}
          />
        })}
      </CoffeeCardsStyles>
      {isOpen ? <ModalCart></ModalCart> : <></>}
      {isOpenClose ? <ModalCart></ModalCart> : <></>}
    </>
  )
}
