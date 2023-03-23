import React from 'react';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/icon/orangeCartIcon.svg'
import locationIcon from '../../assets/icon/purpleLocationIcon.svg'
import { ButtonsDivStyled, CartBtnStyled, ContainerStyled, LocationIconStyled, LocationSpanStyled, LogoStyled } from './Header.styled';

export const Header = () => {
    return (
        <ContainerStyled>
            <LogoStyled src={logo} alt='Image Logo' />
            <ButtonsDivStyled>
                <LocationSpanStyled>
                    <LocationIconStyled src={locationIcon} alt='Location Icon'/>
                    <span>Porto Alegre, RS</span>
                </LocationSpanStyled>
                <CartBtnStyled>
                    <img src={cartIcon} alt='Icon Cart'></img>
                </CartBtnStyled>
            </ButtonsDivStyled>
        </ContainerStyled>
    )
}
