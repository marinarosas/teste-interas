import React, { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { AdvertisingTop } from '../components/AdvertisingTop/AdvertisingTop'
import { TopContainerStyled, CardapioContainerStyled, HomeContainer, CardapioTitleStyled, CoffeeCardsStyles } from './HomePage.styled'
import { CoffeeCard } from '../components/CoffeeCard/CoffeeCard'
import { GlobalContext } from '../context/GlobalContext'

export const HomePage = () => {

  const context = useContext(GlobalContext)

  const { coffees, addCoffeeInCart, removeCoffeeOfCart } = context

  return (
    <>
      <Header />
      <HomeContainer>
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
      </HomeContainer>
    </>
  )
}
