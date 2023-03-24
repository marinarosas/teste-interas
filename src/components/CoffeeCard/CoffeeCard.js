import React, { useContext } from 'react'
import { BodyOfCardStyled, BtnPriceStyled, CardBackgroundStyled, CartPurpleIcon, CoffeeDescriptionStyled, CoffeeImgStyled, CoffeeNameStyled, CoffeeTypeStyled, QuantityContainerStyled, TypesContainerStyled } from './CoffeeCard.styled'
import cartIcon from '../../assets/icon/cartPurpleIcon.svg'
import { priceFormatter } from '../../util/priceFormatter'
import { GlobalContext } from '../../contexts/GlobalContext'

export const CoffeeCard = (props) => {

  const context = useContext(GlobalContext)

  const { quantityToAdd } = context

  const { coffee, addCoffeeInCart, increaseQuantityInCart, decreaseQuantityInCart } = props

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
            <button onClick={() => decreaseQuantityInCart()}><div></div></button>
            <h3>{quantityToAdd}</h3>
            {/* {coffee.quantity <= 0 ? <h2>0</h2> : <h3>{coffee.quantity}</h3>} */}
            <button onClick={() => increaseQuantityInCart()}>+</button>
          </QuantityContainerStyled>
          <CartPurpleIcon onClick={() => addCoffeeInCart(coffee)}>
            <img src={cartIcon} alt='Cart Button Image'/>
          </CartPurpleIcon>
        </div>
      </BtnPriceStyled>
    </CardBackgroundStyled>
  )
}
