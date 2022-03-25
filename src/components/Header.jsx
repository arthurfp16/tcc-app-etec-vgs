import Image from 'next/image'
import Link from 'next/link'
import Logo from '../img/logo.svg'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #6E8755;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 78px;
`

const NextPageButton = styled.button`
    background-color: #F89B67;
    border: 2px solid #E45F35;
    color: #F1F1F1;
    border-radius: 15px;
    padding: 3px 10px;
`

const ImageContainer = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <Image src={Logo} width={'100%'} height={'100%'}/>
            </ImageContainer>
            <Link href={'/'}>
                <NextPageButton>Ler artigos mais recentes</NextPageButton>
            </Link>
        </HeaderContainer>
    )
}