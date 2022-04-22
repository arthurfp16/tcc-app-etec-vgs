import React from 'react'
import { useRouter } from "next/router"

import { FooterContainer, IconLink } from '../styles/components/footerStyles.js'

import homeIcon from '../../public/home.svg'
import aboutIcon from '../../public/Carbs.svg'

export const Footer = () => {

    const router = useRouter()

    return (
        <FooterContainer>
            {
                // Home link
                router.pathname == '/' ?
                    <IconLink
                        href={''}
                        imgSrc={homeIcon}
                        imgAlt='link desabilitado para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor cinza'
                        dissable="true" />
                    :
                    <IconLink
                        href={'/'}
                        imgSrc={homeIcon}
                        imgAlt='link para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor preta' />
            }
            {
                // About link
                router.pathname == '/sobre' ?
                    <IconLink
                        href={''}
                        imgSrc={aboutIcon}
                        imgAlt='link desabilitado para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor cinza'
                        dissable="true" />
                    :
                    <IconLink
                        href={'/sobre'}
                        imgSrc={aboutIcon}
                        imgAlt='link para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor preta' />
            }
        </FooterContainer>
    )
}