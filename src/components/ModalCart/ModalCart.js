import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import trashIcon from '../../assets/icon/trashIcon.svg';
import styled from "styled-components";

export const ModalCart = (props) => {

    const ModalStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

    const LineStyled = styled.div`
    background-color: #8D8686;
    opacity: 60%;
    width: 13rem;
    height: 0.1rem;
    position: absolute;
    bottom: -0.3rem;
    right: 10;
`

    const { coffee, removeCoffeeOfCart } = props

    return (
        <ModalStyled>
            <Flex position='relative' alignItems='center'>
                <Image src={coffee.image} width='3.5rem' height='3.5rem' />
                <Flex flexDirection='column' gap='1rem'>
                    <Flex flexDirection='column' gap='0.5rem'>
                        <Button
                            bgColor='#F1E9C9'
                            padding='0'
                            minWidth='1rem'
                            maxHeight='1rem'
                            onClick={() => removeCoffeeOfCart(coffee)}
                            justifySelf='flex-end'
                            alignSelf='flex-end'
                        >
                            <Image
                                src={trashIcon}
                                alt='Trash Icon'
                                width='0.7rem'
                                height='0.7rem'
                            />
                        </Button>
                        <Heading
                            fontSize='12px'
                            fontWeight='700'
                            fontFamily='Baloo 2'
                            textAlign='center'
                            width='10rem'
                        >{coffee.name}</Heading>
                        <Text
                            fontSize='10px'
                            fontWeight='400'
                            fontFamily='Roboto'
                            textAlign='center'
                            width='10rem'
                            color='#8D8686'
                        >{coffee.description}</Text>
                        <Flex
                            bottom='0'
                            gap='0.5rem'
                            width='9.8rem'
                        >
                            <Text
                                fontSize='10px'
                                fontWeight='700'
                                fontFamily='Roboto'
                                paddingLeft='0.5rem'
                            >Quantidade:</Text>
                            <Text
                                fontSize='10px'
                                fontWeight='400'
                                fontFamily='Roboto'
                            >{coffee.quantity}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <LineStyled></LineStyled>
            </Flex>
        </ModalStyled>
    )
}