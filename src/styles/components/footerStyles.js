import React from "react"

import Image from 'next/image'
import Link from "next/link"

import styled from "styled-components"

export const ImageContainer = styled.span`
    opacity: ${props => props.dissable == 'true' ? '0.4' : '1'};
`

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.colors.darkGreen};
    
    display: flex;
    justify-content: space-around;
    
    width: 100%;
    max-height: 52px; 
    
    position: fixed;
    bottom: 0px;
    z-index: 1;
    
    padding: 10px 0px;
`

export const IconLink = ({ href, imgSrc, imgAlt, dissable= "false" }) => {
    return (
        <Link href={href}>
            <ImageContainer dissable={dissable}>
                <Image src={imgSrc} alt={imgAlt}  />
            </ImageContainer>
        </Link>
    )
}