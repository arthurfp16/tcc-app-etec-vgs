import Image from "next/image"
import { Container } from '../styles/components/imageContainerStyled'

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