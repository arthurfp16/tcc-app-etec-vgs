import Image from 'next/image'
import Logo from '../img/logo.svg'
import { HeaderContainer, ImageContainer } from '../styles/HeaderStyle'
import { ChangePageButton } from './ChangePageButton'

export const Header = ({ linkHref, linkText }) => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <Image src={Logo} width={'100%'} height={'100%'} alt='logo' priority />
            </ImageContainer>
            <ChangePageButton href={linkHref} text={linkText}/>
        </HeaderContainer>
    )
}