import styled from "styled-components";

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.5rem;
    background-color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    gap: 40rem;
`

export const LogoStyled = styled.img`
    height: 2.5rem;
    width: 5.3rem;
`
export const ButtonsDivStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const LocationIconStyled = styled.img`
    width: 15.13px;
    height: 19.25px;
`

export const LocationSpanStyled = styled.div`
    background-color: #EBE5F9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4B2995;
    height: 2.4rem;
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 6px;
`

export const CartBtnStyled = styled.button`
    background-color: #F1E9C9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 4px;
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    border-radius: 6px;
    position: relative;
`
export const CartQuantity = styled.div`
    background-color: #C47F17;
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    color: black;
    border-radius: 50%;
    border: 2px solid #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 1.4rem;
    height: 1.4rem;
    font-family: 'Roboto', sans-serif;
    color: #F1E9C9;
`