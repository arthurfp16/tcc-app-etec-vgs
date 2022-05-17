import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Image from 'next/image'
import styled from 'styled-components'

import img1 from '../../public/img1.png'
import img2 from "../../public/img2.png"
import img3 from '../../public/img3.png'

const AboutMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 42px;
  padding-top: 42px;

  .image-container {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .image {
      border-radius: 2.7px;
    }
    
  } 

  @media screen and (min-width: 360px) {
    .image-container--rigth {
      flex-direction: row-reverse;
      p {
        width: 50%;
      }
      
    }
    .image-container--left {
      flex-direction: row;
      p {
        width: 50%;
      }
    }
  }
`

export default function About() {
  return (
    <>
      <Header linkText='Ler artigos mais recentes' />
      <AboutMain>

        <div className="image-container image-container--left">
          <span class='image'>
            <Image
              src={img1}
              objectFit="contain"
              width={200}
              height={200}
              alt="" />
          </span>
          <p>
            O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres.
          </p>
        </div>

        <div className="image-container image-container--rigth">
          <span class='image'>
            <Image
              src={img2}
              objectFit="contain"
              width={200}
              height={200}
              alt="" />
          </span>
          <p>
            Possuindo uma grande biodiversidade animal e vegetal.
            A flora conta com aproximadamente 13 mil espécies, cada uma com  suas próprias características.
          </p>
        </div>

        <div className="image-container">
          <p>
            Em relação a fauna, o cerrado é reconhecido pela riquíssima concentração de mamíferos de médio porte, aves e incetos.
          </p>
          <span class='image'>
            <Image
              src={img3}
              objectFit="contain"
              width={500}
              height={250}
              alt="" />

          </span>
          <p>
            Com tudo isso o cerrado é repleto de interações estas comprendem desde as relações alimentares, medicina popular, religiosas, habitações(antigamente), conhecimentos tradicionais(cultura), e identidade para com a paisagem.
          </p>
        </div>



      </AboutMain>
      <Footer />
    </>
  )
}