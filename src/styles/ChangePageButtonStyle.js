import styled from "styled-components"

export const ChangePageButtonStyle = styled.button`
    background-color: ${props => props.theme.colors.lightOrange};
    border: 2px solid ${props => props.theme.colors.darkOrange};
    color: ${props => props.theme.colors.branco};
    border-radius: 15px;
    padding: 3px 10px;
`