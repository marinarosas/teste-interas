import React from 'react'
import { BodyOfCardStyled, BtnPriceStyled, CardBackgroundStyled, CartPurpleIcon, CoffeeDescriptionStyled, CoffeeImgStyled, CoffeeNameStyled, CoffeeTypeStyled, QuantityContainerStyled, TypesContainerStyled } from './CoffeeCard.styled'
import cartIcon from '../../assets/icon/cartPurpleIcon.svg'
import { priceFormatter } from '../../util/priceFormatter'

export const CoffeeCard = (props) => {

  const { coffee, addCoffeeInCart, removeCoffeeOfCart, cart, totalQuantity } = props

  console.log("coffee:", coffee);
  console.log("cart", cart);

  return (
    <CardBackgroundStyled key={coffee.id}>
      <BodyOfCardStyled>
        <CoffeeImgStyled src={coffee.image} alt='Coffee Image' />
        <TypesContainerStyled>
          {
            coffee.types?.map((type) => {
              return <CoffeeTypeStyled key={type}>{type}</CoffeeTypeStyled>
            })
          }
        </TypesContainerStyled>
        <CoffeeNameStyled>{coffee.name}</CoffeeNameStyled>
        <CoffeeDescriptionStyled>{coffee.description}</CoffeeDescriptionStyled>
      </BodyOfCardStyled>
      <BtnPriceStyled>
        <div>
          <h2>R$</h2>
          <p>{priceFormatter.format(coffee.price)}</p>
        </div>
        <div>
          <QuantityContainerStyled>
            <button onClick={(e)=>{removeCoffeeOfCart(e.target.value)}}>-</button>
            {totalQuantity === undefined ? 0 : <h2>{totalQuantity}</h2>}
            <button onClick={(e) => addCoffeeInCart(e.target.value)}>+</button>
          </QuantityContainerStyled>
          <CartPurpleIcon onClick={(e) => addCoffeeInCart(e.target.value)}>
            <img src={cartIcon} alt='Cart Button Image'/>
          </CartPurpleIcon>
        </div>
      </BtnPriceStyled>
    </CardBackgroundStyled>
  )
}
