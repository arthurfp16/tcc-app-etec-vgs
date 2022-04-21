import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction:  ${props => props.flexDirection ? props.flexDirection : 'row'};
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 26px;
    height:  ${props => props.flexDirection == 'column-reverse' ? '170px' : '144px'};

    p, span {
        position: relative;
        width: ${props => props.flexDirection == 'column-reverse' ? '100%' : '50%'};
        height: 100%;
    }
    p {
        height: ${props => props.flexDirection == 'column-reverse' ? '40%' : 'fit-content'};
    }
`

export const ImageContainer = ({ children, imgSrc = undefined, imgAlt, containerFlexDirection }) => {
    return (
        <Container flexDirection={containerFlexDirection}>
            <span>
                {imgSrc ? <Image src={imgSrc} layout='fill' objectFit='fill' alt={imgAlt} /> : null}
            </span>
            <p>
                {children}
            </p>
        </Container>
    )
}