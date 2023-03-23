import React from 'react'
import { BodyOfCardStyled, BtnPriceStyled, CardBackgroundStyled, CoffeeDescriptionStyled, CoffeeImgStyled, CoffeeNameStyled, CoffeeTypeStyled, QuantityContainerStyled, TypesContainerStyled } from './CoffeeCard.styled'
import cartIcon from '../../assets/icon/cartPurpleIcon.svg'
import { priceFormatter } from '../../util/priceFormatter'

export const CoffeeCard = (props) => {

  const { coffee, addCoffeeInCart, removeCoffeeOfCart } = props

  return (
    <CardBackgroundStyled key={coffee.id}>
      <BodyOfCardStyled>
        <CoffeeImgStyled src={coffee.image} alt='Coffee Image' />
        <TypesContainerStyled>
          {
            coffee.types?.map((type) => {
              return <CoffeeTypeStyled>{type}</CoffeeTypeStyled>
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
            <button onClick={removeCoffeeOfCart}>-</button>
            {/* <h3>1</h3> */}
            {coffee.quantity === undefined ? 0 : <h2>{coffee.quantity}</h2>}
            <button onClick={addCoffeeInCart}>+</button>
          </QuantityContainerStyled>
          <img src={cartIcon} alt='Cart Button Image'></img>
        </div>
      </BtnPriceStyled>
    </CardBackgroundStyled>
  )
}
