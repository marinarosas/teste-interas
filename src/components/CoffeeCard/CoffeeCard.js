import React, { useState } from 'react';
import {
  BodyOfCardStyled,
  BtnPriceStyled,
  CardBackgroundStyled,
  CartPurpleIcon,
  CoffeeDescriptionStyled,
  CoffeeImgStyled,
  CoffeeNameStyled,
  CoffeeTypeStyled,
  QuantityContainerStyled,
  TypesContainerStyled
} from './CoffeeCard.styled';
import cartIcon from '../../assets/icon/cartPurpleIcon.svg';
import { priceFormatter } from '../../util/priceFormatter';

export const CoffeeCard = (props) => {

  const { coffee, addCoffeeInCart } = props

  let [quantityToAdd, setQuantityToAdd] = useState(1)

  const increaseQuantityInCart = () => {
    setQuantityToAdd(Number(quantityToAdd) + 1)
  }

  const decreaseQuantityInCart = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(Number(quantityToAdd) - 1)
    }
  }

  return (
    <CardBackgroundStyled>
      <BodyOfCardStyled>
        <CoffeeImgStyled src={coffee.image} alt='Coffee Image' />
        <TypesContainerStyled>
          {coffee.types?.map((type) => {
            return <CoffeeTypeStyled key={type}>{type}</CoffeeTypeStyled>
          })}
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
            <button onClick={() => decreaseQuantityInCart()}><div></div></button>
            <h3>{quantityToAdd}</h3>
            <button onClick={() => increaseQuantityInCart()}>+</button>
          </QuantityContainerStyled>
          <CartPurpleIcon onClick={() => addCoffeeInCart(coffee, quantityToAdd)}>
            <img src={cartIcon} alt='Cart Button Image' />
          </CartPurpleIcon>
        </div>
      </BtnPriceStyled>
    </CardBackgroundStyled>
  )
}
