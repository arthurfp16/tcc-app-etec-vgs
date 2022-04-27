import styled from "styled-components"

const Form = styled.form`
    width: 60%;
    height: fit-content;
    padding: 26px 41px;
    text-align: center;
    margin: 0px auto;
    background-color: ${props => props.theme.colors.lightGreen};
    box-shadow: 2px 4px 4px #00000040;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: start;
    margin-bottom: 10px;
`

const Button = styled.button`
    width: 92px;
    height: ${ props => props.variant == 'upload' ? '26px ' :'36px'};
    box-shadow: 2px 4px 4px #00000040;
    background-color:  ${ props => props.variant == 'upload' ? props.theme.colors.darkGreen : props.theme.colors.lightOrange };
    border: none;
    outline: none;
    color: ${props => props.theme.colors.white};

`

const TextArea = styled.textarea`
    resize: vertical;
    overflow:hidden;
`

function textAreaAdjust(element){
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px"
}

export const CreationMenuForm = () => {  
    return (
        <Form>
            <Label htmlFor="title">
                Titulo:
                <input type="text" id="title"  />
            </Label>
            <Label htmlFor="title">
                Texto:
                <TextArea onKeyUp={(event) => textAreaAdjust(event.target)} type="text" id="title"  />
            </Label>
            <Label htmlFor="title">
                Autor:
                <input type="text" id="title" />
            </Label>
            <Button variant='upload'>Upload</Button>
            <Button >Publicar</Button>
        </Form>
    )
}