import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Image from 'next/image'
import styled from 'styled-components'

import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import img3 from '../../public/img3.png'

export default function About() {
  return (
    <>
      <Header linkHref='/posts' linkText='Ler artigos mais recentes' />
      <main>

        <div className="image-container image-container--left">
          <Image src={img1} alt="" />
          <p>
            O Cerrado é um bioma de formações vegetais constituído de uma união de paisagens que passam entre ecossistemas campestres, ciliares, florestais e rupestres.
          </p>
        </div>

        <div className="image-container image-container--rigth">
          <Image src={img1} alt="" />
          <p>
            Possuindo uma grande biodiversidade animal e vegetal.
            A flora conta com aproximadamente 13 mil espécies, cada uma com  suas próprias características.
          </p>
        </div>

        <div className="image-container image-container--top">
          <Image src={img1} alt="" />
          <p>
            Em relação a fauna, o cerrado é reconhecido pela riquíssima concentração de mamíferos de médio porte, aves e incetos.
          </p>
        </div>

        <p>
          Com tudo isso o cerrado é repleto de interações estas comprendem desde as relações alimentares, medicina popular, religiosas, habitações(antigamente), conhecimentos tradicionais(cultura), e identidade para com a paisagem.
        </p>

      </main>
      <Footer />
    </>
  )
}