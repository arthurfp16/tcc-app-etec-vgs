import Image from 'next/image'
import logo from '../../public/logo.svg'
import { HeaderContainer, ImageContainer } from '../styles/components/headerStyle'

export const Header = () => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <Image src={logo} layout='fill' objectFit='contain' alt='logo' />
            </ImageContainer>
        </HeaderContainer>
    )
}
