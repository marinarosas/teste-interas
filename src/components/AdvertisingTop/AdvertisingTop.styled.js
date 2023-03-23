import styled from "styled-components";
import backgroundTop from '../../assets/backgroundAdvertisingTop.svg'

export const AdvertisingTopStyled = styled.div`
    //border: 1px solid yellow;
    height: 544px;
    background-image: url(${backgroundTop});
    padding: 94px;
    display: flex;
    justify-content: center;
    gap: 56px;
    align-items: center;
`

export const TextStyled = styled.div`
    //border: 1px solid blue;
    width: 588px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const TitlesStyled = styled.div`
    //border: 1px solid red;
    width: 588px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 48px;
        line-height: 62.4px;
        color: #272221;
        height: 124px;
    }

    h3{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
        color: #403937;
        font-stretch: 100;
        height: 52px;
    }

`

export const BenefitStyled = styled.div`
    //border: 1px solid pink;
    width: 588px;
    height: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
`

export const LeftSideStyled = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 31px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    font-style: normal;
    color: #574F4D;
    width: 588px;

    div{
        //border: 1px solid blue;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        height: 31px;
        width: 240px;
    }

    img{
        //border: 1px solid green;
        height: 32px;
        width: 32px;
    }
`

export const RightSideStyled = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 31px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    font-style: normal;
    color: #574F4D;
    width: 588px;

    div{
        //border: 1px solid blue;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        height: 31px;
        width: 300px;
    }

    img{
        //border: 1px solid green;
        height: 32px;
        width: 32px;
    }
`