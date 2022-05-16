import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import styled from "styled-components"
import Router from 'next/router'
import { useEffect } from "react"

const Title = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.colors.lightGreen};
    box-shadow: 2px 4px 4px #00000040;
    width: 70%;
    text-align: center;
    padding: 25px 0px;
    font-size: 20px;
    border-radius: 2.3px;
`

const Thank = () => {
    useEffect(() => {
        if('/thank' == Router.pathname){
            setTimeout(() => Router.push('/'), 3000)}
    }, [])

    return (
        <>
            <Header />
                <Title>Obrigado por postar!</Title>
            <Footer />
        </>
    )
}

export default Thank