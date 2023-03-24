import styled from "styled-components";
import backgroundTop from '../../assets/backgroundAdvertisingTop.svg'

export const AdvertisingTopStyled = styled.div`
    //border: 1px solid yellow;
    height: 34rem;
    background-image: url(${backgroundTop});
    padding: 5.8rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: center;
`

export const TextStyled = styled.div`
    //border: 1px solid blue;
    width: 36.75rem;
    height: 22.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
`

export const TitlesStyled = styled.div`
    //border: 1px solid red;
    width: 36.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: #272221;
        height: 7.75rem;
    }

    h3{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: #403937;
        font-stretch: 100;
        height: 3.25rem;
    }

`

export const BenefitStyled = styled.div`
    //border: 1px solid pink;
    width: 36.75rem;
    height: 11.25rem;
    display: flex;
    position: relative;
    align-items: center;
    gap: 2rem;
`

export const LeftSideStyled = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    font-style: normal;
    color: #574F4D;
    width: 36.75rem;

    div{
        //border: 1px solid blue;
        display: flex;
        flex-direction: row;
        justify-self: center;
        align-items: center;
        height: 2rem;
        width: 15rem;
        text-align: left;
        position: relative;
    }

    img{
        //border: 1px solid green;
        height: 2rem;
        width: 2rem;
        position: absolute;
    }

    p{
        display: flex;
        justify-self: flex-start;
        position: absolute;
        left: 2.5rem;
    }
`

export const RightSideStyled = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    font-style: normal;
    color: #574F4D;
    width: 36.75rem;

    div{
       //border: 1px solid blue;
        display: flex;
        flex-direction: row;
        justify-self: center;
        align-items: center;
        height: 2rem;
        width: 30rem;
        text-align: left;
        position: relative;
    }

    img{
       //border: 1px solid green;
       height: 2rem;
        width: 2rem;
        position: absolute;
    }

    p{
        display: flex;
        justify-self: flex-start;
        position: absolute;
        left: 2.5rem;
    }
`