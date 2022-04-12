import styled from "styled-components";

export const Container = styled.div`
    padding: 16px 45px;
    background-color: ${props => props.theme.colors.lightGreen} ;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Author = styled.p`
    color: ${props => props.theme.colors.darkOrange};
    margin-top: 10px;
    max-width: 670px;
    width: 100%;
    text-align: right;
`
export const Text = styled.p`
    max-width: 670px;
`