import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Image from 'next/image'
import styled from "styled-components"
import img1 from '../../public/img1.png'

const PostsMain = styled.main`

  padding: 0px 26px;

  h1{
    text-align: center;
    margin-top: 41px;
    margin-bottom: 26px;
  }
  p {
    margin-top: 16px;
  }
`
const Author = styled.span`
  display: block;
  text-align: right;
  margin-top: 26px;
`

const ImageStyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  margin-top: 26px;
`


export default function Home() {
  return (
    <>
      <Header />
      <PostsMain>
        <h1>TITULO</h1>
        <p>
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres. Possuindo uma grande biodiversidade animal e vegetal.
        </p>
        <p>
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres. Possuindo uma grande biodiversidade animal e vegetal.
        </p>
        <p>
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres. Possuindo uma grande biodiversidade animal e vegetal.
        </p>
        <p>
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres. Possuindo uma grande biodiversidade animal e vegetal.
        </p>
        <p>
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres. Possuindo uma grande biodiversidade animal e vegetal.
        </p>
        <Author>Escrito por: JORJÃO</Author>
        <ImageStyledContainer>
          <Image src={img1} layout='fill' objectFit="fill" />
        </ImageStyledContainer>
      </PostsMain>
      <Footer />
    </>
  )
}

