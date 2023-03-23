import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { CardBackgroundStyled } from './CoffeeCard.styled'

export const CoffeeCard = () => {

  const context = useContext(GlobalContext)

  const {coffee, addCoffeeInCart, removeCoffeeOfCart} = context

  return (
   <CardBackgroundStyled key={coffee.id}>
    <img src={coffee.image} alt='Coffee Image'/>
    <div>coffee.types</div>
    <p>coffee.description</p>
    <p>coffee.price</p>

    <div>
      <button onClick={removeCoffeeOfCart}>-</button>
      <h2>coffee.quantity</h2>
      <button onClick={addCoffeeInCart}>+</button>
    </div>

      <img src='' alt='Cart Button Image'></img>

   </CardBackgroundStyled>
  )
}
