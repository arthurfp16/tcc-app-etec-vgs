import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react"
import styled from "styled-components"

export const PostCardContent = styled.article`
    width: 100%;
    padding: 26px;
    max-width: ${props => props.mainCard ? '308px': '233px'};
    display: flex;
    flex-direction: column;
    background-color: #F1F1F1; /* change for an external theme */
    gap: 16px;
    border-bottom: 4px solid green;
    border-radius: 2.3px;
`
export const PostCardTitle = styled.h2`
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
`

export const PostCardText = styled.p`
    width: 100%;
`

const TextIconContainer = styled.span`
    display: flex;
    gap: 6px;
`

export const CardFooter = styled.footer`
    display: flex;
    justify-content: space-between;
`
export const PostCardTime = ({children}) => {
    return (
        <TextIconContainer>
            <FontAwesomeIcon icon={faClock} />
            <time>{children}</time>
        </TextIconContainer>
    )
}

export const PostCardAuthor = ({children}) => {
    return (
        <TextIconContainer>
            <FontAwesomeIcon icon={faUser} />
            <span>{children}</span>
        </TextIconContainer>
    )
}


