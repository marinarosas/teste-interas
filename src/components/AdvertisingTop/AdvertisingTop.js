import React from 'react'
import {
  AdvertisingTopStyled,
  BenefitStyled,
  LeftSideStyled,
  RightSideStyled,
  TextStyled,
  TitlesStyled
} from './AdvertisingTop.styled'
import coffeeCup from '../../assets/cupCoffee.svg'
import cartRoundIcon from '../../assets/icon/cartRoundIcon.svg'
import clockRoundIcon from '../../assets/icon/clockRoundIcon.svg'
import packRoundIcon from '../../assets/icon/packRoundIcon.svg'
import coffeeRoundIcon from '../../assets/icon/coffeeRoundIcon.svg'

export const AdvertisingTop = () => {
  return (
    <AdvertisingTopStyled>
      <TextStyled>
        <TitlesStyled>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
        </TitlesStyled>
        <BenefitStyled>
          <LeftSideStyled>
            <div>
              <img src={cartRoundIcon} alt='Cart Round Icon' />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <img src={clockRoundIcon} alt='Clock Round Icon' />
              <p>Entrega rápida e rastreada</p>
            </div>
          </LeftSideStyled>
          <RightSideStyled>
            <div>
              <img src={packRoundIcon} alt='Pack Round Icon' />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <img src={coffeeRoundIcon} alt='Coffee Round Icon' />
              <p>O café chega fresquinho até você</p>
            </div>
          </RightSideStyled>
        </BenefitStyled>
      </TextStyled>
      <img src={coffeeCup} alt='Cup of Coffee Image' />
    </AdvertisingTopStyled>
  )
}
