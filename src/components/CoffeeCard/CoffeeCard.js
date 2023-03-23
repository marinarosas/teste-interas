import React from 'react'
import { CardBackgroundStyled, CoffeeImgStyled, CoffeeNameStyled, CoffeeTypeStyled } from './CoffeeCard.styled'
import cartIcon from '../../assets/icon/cartPurpleIcon.svg'

export const CoffeeCard = (props) => {

  const {coffee, addCoffeeInCart, removeCoffeeOfCart} = props

  return (
   <CardBackgroundStyled key={coffee.id}>
    <CoffeeImgStyled src={coffee.image} alt='Coffee Image'/>
    <CoffeeTypeStyled>{coffee.types[0]}</CoffeeTypeStyled>
    <CoffeeTypeStyled>{coffee.types[1]}</CoffeeTypeStyled>
    <CoffeeNameStyled>{coffee.name}</CoffeeNameStyled>
    <p>{coffee.description}</p>
    <p>{coffee.price}</p>

    <div>
      <button onClick={removeCoffeeOfCart}>-</button>
      <h2>{coffee.quantity}</h2>
      <button onClick={addCoffeeInCart}>+</button>
    </div>

      <img src={cartIcon} alt='Cart Button Image'></img>

   </CardBackgroundStyled>
  )
}
