import Image from 'next/image'
import logo from '../../public/logo.svg'
import { HeaderContainer, ImageContainer } from '../styles/HeaderStyle'

export const Header = ({ linkHref, linkText }) => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <Image src={logo} alt='logo' />
            </ImageContainer>
        </HeaderContainer>
    )
}