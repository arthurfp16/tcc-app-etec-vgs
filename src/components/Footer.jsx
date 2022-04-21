import Link from "next/link"
import Image from 'next/image'
import styled from "styled-components"
import homeIcon from '../../public/home.svg'
import aboutIcon from '../../public/Carbs.svg'
import { useRouter } from "next/router"
import React from 'react'

const ImageStyled = styled(Image)`
    opacity: ${props => props.dissable == 'true' ? '0.4' : '1'};
`

const IconLink = ({ href, imgSrc, imgAlt, dissable= "false" }) => {
    return (
        <Link href={href}>
            <ImageStyled src={imgSrc} alt={imgAlt} dissable={dissable} />
        </Link>
    )
}

const FooterContainer = styled.footer`
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0px;
    z-index: 1;
    width: 100%;
    background-color: ${props => props.theme.colors.darkGreen};
    padding: 10px 0px;
    max-height: 52px; 
`

export const Footer = ({ }) => {
    const router = useRouter()
    return (
        <FooterContainer>
            {
                router.pathname == '/' ?
                    <IconLink
                        href={''}
                        imgSrc={homeIcon}
                        alt='link desabilitado para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor cinza'
                        dissable="true" />
                    :
                    <IconLink
                        href={'/'}
                        imgSrc={homeIcon}
                        alt='link para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor preta' />
            }
            {
                router.pathname == '/sobre' ?
                    <IconLink
                        href={''}
                        imgSrc={aboutIcon}
                        alt='link desabilitado para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor cinza'
                        dissable="true" />
                    :
                    <IconLink
                        href={'/sobre'}
                        imgSrc={aboutIcon}
                        alt='link para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor preta' />
            }
        </FooterContainer>
    )
}