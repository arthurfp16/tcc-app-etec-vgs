import styled from "styled-components"

export const Form = styled.form`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 26px 36px;
    text-align: center;
    background-color: ${props => props.theme.colors.lightGreen};
    box-shadow: 2px 4px 4px #00000040;
    max-width: 308px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 41px;
        margin-top: 26px;
    }
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: start;
    margin-bottom: 10px;
    word-break: keep-all;
    
    input{
        min-height: 30px;
    }
`

export const Button = styled.button`
    width: 92px;
    height: ${props => props.variant == 'upload' ? '26px ' : '36px'};
    box-shadow: ${props => props.clicked ? 'inset 2px 4px 4px #00000040' : '2px 4px 4px #00000040'};
    background-color:  ${props => props.variant == 'upload' ? props.theme.colors.darkGreen : props.theme.colors.lightOrange};
    border: none;
    outline: none;
    color: ${props => props.theme.colors.white};
    align-self: ${props => props.variant == 'upload' ? 'flex-end' : null};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px; 
`

export const TextArea = styled.textarea`
    resize: none;
    overflow:hidden;
`

export const textAreaAdjust = (element) => {
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px"
}

export const ErrorText = styled.span`
    color: red;
`
