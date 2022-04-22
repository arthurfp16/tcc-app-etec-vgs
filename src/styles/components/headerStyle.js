import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.colors.darkGreen};
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 78px;
`

export const ImageContainer = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
`