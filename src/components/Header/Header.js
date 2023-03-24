import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/icon/orangeCartIcon.svg'
import locationIcon from '../../assets/icon/purpleLocationIcon.svg'
import { ButtonsDivStyled, CartBtnStyled, CartQuantity, ContainerStyled, LocationIconStyled, LocationSpanStyled, LogoStyled } from './Header.styled';
import { GlobalContext } from '../../contexts/GlobalContext';
import { ModalCart } from '../Modal/ModalCart';
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Flex, Text } from '@chakra-ui/react';
import { priceFormatter } from '../../util/priceFormatter';

export const Header = () => {

    const context = useContext(GlobalContext)

    const { coffees, totalQuantity, totalPrice, setIsOpen, isOpen, cart } = context

    const cartDetails = () => {

    }

    return (
        <ContainerStyled>
            <LogoStyled src={logo} alt='Image Logo' />
            <ButtonsDivStyled>
                <LocationSpanStyled>
                    <LocationIconStyled src={locationIcon} alt='Location Icon' />
                    <span>Porto Alegre, RS</span>
                </LocationSpanStyled>
                <Popover trigger='hover'>
                    <PopoverTrigger >
                        <CartBtnStyled>
                            <img src={cartIcon} alt='Icon Cart'></img>
                            {totalQuantity === 0 ? <div></div> : <CartQuantity>{totalQuantity}</CartQuantity>}
                        </CartBtnStyled>
                    </PopoverTrigger>
                    <PopoverContent width='16rem'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader fontFamily='Baloo2' fontWeight='700'>Coffee Bag!</PopoverHeader>
                        <PopoverBody>{cart.map((coffee) => {
                            return <ModalCart key={cart.id} coffee={coffee} />
                        })}
                        <Flex
                        //alignItems='flex-end'
                        justifyContent='flex-end'
                        flexDirection='column'
                        gap= '1rem'
                        >
                            <Flex
                                //border='2px solid purple'
                                gap='1rem'    
                            >
                                <Text
                                    fontWeight='400'
                                    fontFamily='Roboto'
                                >Valor Total sem frete:</Text>
                                <Text
                                    fontWeight='400'
                                    fontFamily='Roboto'
                                >R${priceFormatter.format(totalPrice)}
                                </Text>
                            </Flex>
                            <Button
                                bgColor='#F1E9C9'
                                color='#C47F17'
                                justifyContent='center'
                                alignItems='center'
                            >Ver Carrinho</Button>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

            </ButtonsDivStyled>

        </ContainerStyled>

    )
}
