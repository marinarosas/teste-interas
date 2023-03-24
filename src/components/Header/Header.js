import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/icon/orangeCartIcon.svg'
import locationIcon from '../../assets/icon/purpleLocationIcon.svg'
import { ButtonsDivStyled, CartBtnStyled, CartQuantity, ContainerStyled, LocationIconStyled, LocationSpanStyled, LogoStyled } from './Header.styled';
import { GlobalContext } from '../../contexts/GlobalContext';

export const Header = () => {

    const context = useContext(GlobalContext)

    const {totalQuantity, setIsOpen} = context

    return (
        <ContainerStyled>
            <LogoStyled src={logo} alt='Image Logo' />
            <ButtonsDivStyled>
                <LocationSpanStyled>
                    <LocationIconStyled src={locationIcon} alt='Location Icon'/>
                    <span>Porto Alegre, RS</span>
                </LocationSpanStyled>
                <CartBtnStyled onClick={setIsOpen(true)}>
                    <img src={cartIcon} alt='Icon Cart'></img>
                    {totalQuantity === 0 ? <div></div> : <CartQuantity>{totalQuantity}</CartQuantity>}
                </CartBtnStyled>
            </ButtonsDivStyled>
        </ContainerStyled>
    )
}
