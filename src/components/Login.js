import React from 'react';
import styled from 'styled-components';
import MainBack from "../assets/images/login-background.jpg";
import CTALogo from "../assets/images/cta-logo-one.svg";
import CTALogoTSec from "../assets/images/cta-logo-two.png";

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src={CTALogo}/>
                <SignUp>Get All There</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1
                </Description>
                <CTALogoTwo src={CTALogoTSec}/>
                </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;  
    height: cacl(100vh - 70px);
    margin-top: -25px;
    
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${MainBack});
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        bottom: 0;
        z-index: -1;
    }
`

const CTA = styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`

const CTALogoOne = styled.img `
`

const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.img `
    width: 90%
`