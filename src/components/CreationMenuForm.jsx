import Image from "next/image"
import uploadIcon from '../../public/upload.svg'
import { Form, Label, Button, TextArea, textAreaAdjust, ErrorText } from '../styles/components/CreationMenuFormStyle'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from 'react'
let preSubmitConter = 0

export const CreationMenuForm = () => {

    const [submitValidate, setSubmitValidate] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const sendData = async (data) => {
        await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => preSubmit(data);


    const preventEnterKeyAction = (event) => {
        event.key != 'Enter' ? null : event.preventDefault()
    }


    const preSubmit = (data) => {
        if (preSubmitConter === 1) {
            preSubmitConter = 0
            setSubmitValidate(false)
            sendData(data)
        } else {
            preSubmitConter = 1
            setSubmitValidate(true)
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Label htmlFor="title" >
                Titulo:
                <input
                    onKeyDown={(event) => preventEnterKeyAction(event)}
                    type="text"
                    id="title"
                    {...register('title', {
                        required: "Este campo não pode estar vazio",
                        pattern: {
                            value: /\w+/,
                            message: "Este campo não pode estar vazio"
                        },
                        maxLength: {
                            value: 50,
                            message: "Maximo de 50 caracteres"
                        }
                    })}
                />
                <ErrorMessage errors={errors} name='title' render={({ message }) => {
                    return <ErrorText>{message}</ErrorText>
                }} />
            </Label>

            <Label htmlFor="text">
                Texto:
                <TextArea
                    onKeyDown={(event) => { textAreaAdjust(event.target) }}
                    id="text"
                    {...register('text', {
                        required: "Este campo não pode estar vazio",
                        pattern: {
                            value: /\w+/,
                            message: "Este campo não pode estar vazio"
                        },
                        maxLength: {
                            value: 5000,
                            message: "Maximo de 5000 caracteres"
                        }
                    })}
                />
                <ErrorMessage errors={errors} name='text' render={({ message }) => {
                    return <ErrorText>{message}</ErrorText>
                }} />
            </Label>

            <Label htmlFor="author">
                Autor:
                <input
                    onKeyDown={(event) => preventEnterKeyAction(event)}
                    type="text"
                    id="author"
                    {...register('author', {
                        required: "Este campo não pode estar vazio",
                        pattern: {
                            value: /\w+/,
                            message: "Este campo não pode estar vazio"
                        },
                        maxLength: {
                            value: 30,
                            message: "Maximo de 30 caracteres"
                        }
                    })}
                />
                <ErrorMessage errors={errors} name='author' render={({ message }) => {
                    return <ErrorText>{message}</ErrorText>
                }} />
            </Label>

            <div>
                <Button 
                    type="button"
                    variant='upload'
                    >
                    <Image
                        src={uploadIcon} /> Upload
                </Button>
                <Button
                    className="submitButton"
                    type='submit'
                    clicked={isClicked}
                    onMouseDown={() => {setIsClicked(!isClicked)}}
                    onMouseUp={() => {setIsClicked(!isClicked)}}
                    onTouchStart={() => {setIsClicked(!isClicked)}}
                    onTouchEnd={() => {setIsClicked(!isClicked)}}
                    >
                    Publicar
                </Button>
                    {submitValidate ? <span>Voce tem certeza de que quer postar?</span> : null}
            </div>

        </Form>
    )
}