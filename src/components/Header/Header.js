import React from 'react';
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/icon/orangeCartIcon.svg';
import locationIcon from '../../assets/icon/purpleLocationIcon.svg';
import {
    ButtonsDivStyled,
    CartBtnStyled,
    CartQuantity,
    ContainerStyled,
    LocationIconStyled,
    LocationSpanStyled,
    LogoStyled
} from './Header.styled';
import { ModalCart } from '../ModalCart/ModalCart';
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Flex,
    Text
} from '@chakra-ui/react';
import { priceFormatter } from '../../util/priceFormatter';

export const Header = (props) => {

    const { totalQuantity, totalPrice, cart, removeCoffeeOfCart } = props

    const alertSuccess = () =>{
        return alert("Compra finalizada com sucesso!")
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
                            <img src={cartIcon} alt='Icon Cart' />
                            {totalQuantity === 0 ? <div></div> : <CartQuantity>{totalQuantity}</CartQuantity>}
                        </CartBtnStyled>
                    </PopoverTrigger>
                    <PopoverContent width='16rem'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader fontFamily='Baloo2' fontWeight='700'>Coffee Bag!</PopoverHeader>
                        <PopoverBody
                            display='flex'
                            flexDirection='column'
                            justifyContent='flex-start'
                            alignItems='flex-start'
                            gap='1rem'
                        >{cart.map((coffee) => {
                            return <ModalCart key={cart.id}
                                coffee={coffee}
                                totalPrice={totalPrice}
                                removeCoffeeOfCart={removeCoffeeOfCart} />
                        })}
                            <Flex
                                justifyContent='flex-end'
                                flexDirection='column'
                                gap='1rem'
                            >
                                <Flex gap='1rem'>
                                    <Text fontWeight='400' fontFamily='Roboto'>Valor Total:</Text>
                                    <Text fontWeight='400' fontFamily='Roboto'>R${priceFormatter.format(totalPrice)}</Text>
                                </Flex>
                                <Button
                                    bgColor='#F1E9C9'
                                    color='#C47F17'
                                    justifyContent='center'
                                    alignItems='center'
                                    onClick={()=>alertSuccess()}
                                >Finalizar Compra</Button>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </ButtonsDivStyled>
        </ContainerStyled>
    )
}