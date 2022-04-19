import Link from "next/link"
import Image from 'next/image'
import styled from "styled-components"
import homeIcon from '../../public/home.svg'
import aboutIcon from '../../public/Carbs.svg'
import { useRouter } from "next/router"

const ImageStyled = styled(Image)`
    opacity: ${props => props.dissable ? '0.4' : '1'};
`

export const IconLink = ({ href, imgSrc, imgAlt, dissable = false }) => {
    return (
        // eslint-disable-next-line @next/next/link-passhref
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
    max-height: ${props => props.theme.sizes.px.footerHeigth}; 
`

export const Footer = ({ }) => {
    const router = useRouter()
    return (
        <FooterContainer>
            {
                router.pathname == '/' ?
                    <IconLink
                        href={'./'}
                        imgSrc={homeIcon}
                        alt='link para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor preta'
                        dissable />
                    :
                    <IconLink
                        href={'./'}
                        imgSrc={homeIcon}
                        alt='link para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor preta' />
            }
            {
                router.pathname == '/sobre' ?
                    <IconLink
                        href={'./'}
                        imgSrc={aboutIcon}
                        alt='link para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor preta'
                        dissable />
                    :
                    <IconLink
                        href={'./'}
                        imgSrc={aboutIcon}
                        alt='link para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor preta' />
            }

        </FooterContainer>
    )
}


/* 

    <IconLink href={'./'} imgSrc={homeIcon} alt='link para a pagina home com um icone de uma casa com fundo trasparente e contorno de cor preta'/>

    <IconLink href={'./'} imgSrc={aboutIcon} alt='link para a pagina sobre com um icone com um ramo e tres folhas com fundo trasparente e contorno de cor preta'/> 

*/