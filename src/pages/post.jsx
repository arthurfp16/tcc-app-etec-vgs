import Image from 'next/image'

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PostMain, Author, ImageStyledContainer } from '../styles/pages/postStyle.js'

import img1 from '../../public/img1.png'

export default function Home() {
  return (
    <>
      <Header />

      <PostMain>

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
          <Image src={img1} layout='fill' objectFit="fill" alt='dinamic alt' />
        </ImageStyledContainer>

      </PostMain>

      <Footer />
    </>
  )
}

