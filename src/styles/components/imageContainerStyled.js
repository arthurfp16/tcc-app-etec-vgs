import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction:  ${props => props.flexDirection ? props.flexDirection : 'row'};
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 80px;
    height:  ${props => props.flexDirection == 'column-reverse' ? '170px' : '144px'};

    p, span {
        position: relative;
        width: ${props => props.flexDirection == 'column-reverse' ? '100%' : '100%'};
        height: 100%;
    }
    p {
        height: ${props => props.flexDirection == 'column-reverse' ? '40%' : 'fit-content'};
    }
`