import styled from 'styled-components'

export const HomeMain = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: ${props => props.theme.colors.white100};
        
        section{
            margin-top: 41px;
        }
`

export const Title = styled.h2`
    font-size: 23px;
`
