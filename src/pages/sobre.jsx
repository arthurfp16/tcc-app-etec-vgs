import { Header } from "../components/Header"
import { ImageContainer } from "../components/ImageContainer"
import { MotivationalPhrase } from "../components/motivationalPhrase"
import { AboltMain } from '../styles/pages/aboutStyled.js'
import { Footer } from "../components/Footer"

import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import img3 from '../../public/img3.png'

export default function About() {
  return (
    <>
      <Header linkHref='/posts' linkText='Ler artigos mais recentes' />
      
      <MotivationalPhrase />

      <AboltMain>
        <ImageContainer imgSrc={img1} imgAlt='arvore nativa do cerrado num campo em um dia com poucas nuvems e sol intenso'>
          O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres.
        </ImageContainer>

        <ImageContainer imgSrc={img2} containerFlexDirection='row-reverse' imgAlt='campo com flora seca e uma pequna arvore do lado direito em um dia de sol intenso'> Possuindo uma grande biodiversidade animal e vegetal.
          A flora conta com aproximadamente 13 mil espécies, cada uma com  suas próprias características.
        </ImageContainer>

        <ImageContainer imgSrc={img3} containerFlexDirection='column-reverse' imgAlt='quatro animais nativos do cerrado sendo a onça-pintada, macaco-prego, lobo-guara, tatu-canastra.'>  
          Em relação a fauna, o cerrado é reconhecido pela riquíssima concentração de mamíferos de médio porte, aves e incetos.
        </ImageContainer>

        <p>
          Com tudo isso o cerrado é repleto de interações estas comprendem desde as relações alimentares, medicina popular, religiosas, habitações(antigamente), conhecimentos tradicionais(cultura), e identidade para com a paisagem.
        </p>
      </ AboltMain>

      <Footer />

    </>
  )
}