import React from 'react';
import styled, { css } from "styled-components/macro";
import Button from './Button';

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.img``;
const HeroContent = styled.div``;


const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, id) => {
                    const { title, price, path, image, alt, label } = slide;
                    return(
                        <HeroSlide key={id}>
                            <HeroSlider>
                                <HeroImage />
                                <HeroContent>
                                    <h1>{title}</h1>
                                    <p>{price}</p>
                                    <Button css={`max-width: 160px`} to={path} primary="true">
                                        {label}
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
