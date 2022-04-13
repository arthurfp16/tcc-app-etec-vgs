import styled from "styled-components"
import Image from "next/image"

export const PostCardContent = styled.article`
    width: 50%;
    background-color: #F1F1F1; /* change for an external theme */
`

export const PostCardTitle = styled.h2`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    width: 100%;
`
export const PostCardImage = styled(Image)`
`
export const PostCardText = styled.p`
    width: 100%;
`
export const PostCardTime = styled.time`
    &:before{
        content: url("../../public/Time.src") ;
    }
`