import React from "react"
import styled from "styled-components"
import Image from 'next/image'
import authorIcon from '../../../public/User.svg'
import timeIcon from '../../../public/Time.svg'

export const PostCardContent = styled.article`
    
    background-color: ${props => props.theme.colors.white};

    border-bottom: 4px solid green;
    border-radius: 2.3px;

    box-shadow: 2px 4px 4px #00000040;
    
    display: flex ;
    flex-direction: column;
    gap: 16px;
    
    width: 100%;
    max-width: ${props => props.highlighted ? '308px' : '233px'};
    min-width: 233px;

    margin-top: 26px;
    
    div{
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        padding: 0px 26px 16px 26px;
    }
`
export const PostCardTitle = styled.h2`

    font-size: 14px;
    font-weight: bold;

    text-align: center;
    
    width: 100%;
`

export const PostCardText = styled.p`
    width: 100%;
    text-align: left;
    word-break: break-all;
`
export const CardFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 8px;
`

const TextIconContainer = styled.span`
    display: grid;
    grid-template-columns: 14px auto;
    height: 14px;
    align-items: center;
    justify-items: center;
    column-gap: 3px;
    font-size: 12px;
    text-transform: capitalize;
`

export const PostCardTime = ({ children }) => {
    return (
        <TextIconContainer>
            <Image src={timeIcon} />
            <time>{children}</time>
        </TextIconContainer>
    )
}

export const PostCardAuthor = ({ children }) => {
    return (
        <TextIconContainer>
            <Image src={authorIcon} />
            <span>{children}</span>
        </TextIconContainer>
    )
}
