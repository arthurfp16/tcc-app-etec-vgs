import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.colors.darkGreen};
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 78px;
    padding: 10px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`   