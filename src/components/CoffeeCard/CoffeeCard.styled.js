import styled from "styled-components";

export const CardBackgroundStyled = styled.div`
    background-color: #F3F2F2;
    height: 19rem;
    width: 15.5rem;
    border-radius: .5rem 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const BodyOfCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    position: absolute;
    top: -1.5rem;
`

export const CoffeeImgStyled = styled.img`
    width: 7.5rem;
    height: 7.5rem;
`
export const TypesContainerStyled = styled.div`
    display: flex;
    gap: 4px;
`

export const CoffeeTypeStyled = styled.div`
    background-color: #F1E9C9;
    height: 1.3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    flex-grow: 0;
    color: #C47F17;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    padding: 0 .6rem;
    line-height: 130%;
    text-transform: uppercase;
`

export const CoffeeNameStyled = styled.h2`
    font-family: 'Baloo 2', cursive;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    color: #403937;
`

export const CoffeeDescriptionStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    width: 13rem;
    height: 36px;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #8D8686;
    text-align: center;
`

export const BtnPriceStyled = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    gap: 1.4rem;
    color: #574F4D;
    height: 31px;

    h2{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%; 
        display: flex;
        justify-content: center;
        align-self: flex-end;
        height: 1.4rem;
    }

    p{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 24px;
        line-height: 130%;
    }

    div{
        display: flex;
        gap: 8px;
    }
`

export const QuantityContainerStyled = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 4px;
        width: 72px;
        height: 38px;
        background: #E6E5E5;
        flex-grow: 0;
        border-radius: 6px;

    h3{
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
        line-height: 130%;
        font-size: 16px;
        text-align: center;
        color: #272221;
    }

    button{
        color:#8047F8;
        background: none;
        border: none;
        width: 10.94px;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;

        :hover{
            cursor: pointer;
        }

        div{
           background-color: #8047F8;
           width: 10.94px;
           height: 1.31px;
        }
    }
`

export const CartPurpleIcon = styled.button`
    border: none;

    :hover{
        cursor: pointer;
    }
`