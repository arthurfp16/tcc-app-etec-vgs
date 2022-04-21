import { Header } from "../components/Header"
import { MotivationalPhrase } from "../components/motivationalPhrase"
import Head from 'next/head'
import { ImageContainer } from "../components/SectionWithImage"
import { MainStyled } from "../styles/MainStyled"
import { Footer } from "../components/Footer"

import img1 from '../../public/img1.png'

export default function About() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>

      <Header linkHref='/posts' linkText='Ler artigos mais recentes' />
      <MotivationalPhrase />

      <MainStyled>
        <ImageContainer imgSrc={img1} >
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres. Possuindo uma grande biodiversidade animal e vegetal.
        </ImageContainer>

        <ImageContainer imgSrc={img1} containerFlexDirection='row-reverse'>
          A flora conta com aproximadamente 13 mil espécies, cada uma com  suas próprias características.
        </ImageContainer>

        <ImageContainer imgSrc={img1} containerFlexDirection='column-reverse'> 
          Em relação a fauna, o cerrado é reconhecido pela riquíssima concentração de mamíferos de médio porte, aves e incetos.
        </ImageContainer>

        <p>
          Com tudo isso o cerrado é repleto de interações estas comprendem desde as relações alimentares, medicina popular, religiosas, habitações(antigamente), conhecimentos tradicionais(cultura), e identidade para com a paisagem.
        </p>
      </MainStyled>
      <Footer />
    </>
  )
}