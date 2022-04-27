import Image from "next/image"
import uploadIcon from '../../public/upload.svg'
import { useState } from "react"
import { Form, Label, Button, TextArea, textAreaAdjust } from '../styles/components/CreationMenuFormStyle'

export const CreationMenuForm = () => {
    const [titleValue, setTitleValue] = useState()
    const [textValue, setTextValue] = useState()
    const [althorValue, setAlthorValue] = useState()
    const [errors, setErrors] =  useState()
    const validateData = () => {
        if(titleValue.length > 50){
            setErrors('titulo muinto longo')
        }
    }
    const sendData = async () => {
        await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            body: [titleValue, textValue, althorValue]
        })
    }

    return (
        <Form onSubmit={(event) => {
            event.preventDefault()
            sendData()
        }}>

            <Label htmlFor="title" >
                Titulo:
                <input
                    onKeyDown={(event) => event.key != 'Enter' ? null : event.preventDefault()}
                    value={titleValue} onChange={(event) => setTitleValue(event.target.value)}
                    type="text"
                    id="title"
                     />
            </Label>

            <Label htmlFor="title">
                Texto:
                <TextArea
                    value={textValue}
                    onChange={(event) => {
                        textAreaAdjust(event.target)
                        setTextValue(event.target.value)
                    }
                    }
                    type="text"
                    id="title" />
            </Label>

            <Label htmlFor="title">
                Autor:
                <input
                    value={althorValue}
                    onChange={(event) => setAlthorValue(event.target.value)}
                    onKeyDown={(event) => event.key != 'Enter' ? null : event.preventDefault()}
                    type="text"
                    id="title" />
            </Label>

            <div>
                <Button variant='upload' ><Image src={uploadIcon} /> Upload</Button>
                <Button
                    type='submit'
                    onKeyDown={(event) => event.key != 'Enter' ? null : event.preventDefault()}>
                    Publicar
                </Button>
            </div>

        </Form>
    )
}