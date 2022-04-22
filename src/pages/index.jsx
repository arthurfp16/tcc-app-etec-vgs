import { Header } from "../components/Header"
import { HomeMain, Title } from "../styles/pages/homeStyled"
import { PostCard } from "../components/PostCard"
import { Footer } from "../components/Footer.jsx"

import image from "../../public/img2.png"

const tmpDate = '21/04/2022'

const Home = () => {
    return (
        <>
            <Header />
            <HomeMain>
                <section>
                    <Title>
                        Destaque
                    </Title>
                    <PostCard
                        title="TRATAMENTO DE EFLUENTES INDUSTRIAIS E CHORUME DE ATERRO SANITÁRIO"
                        imgSrc={image}
                        imgAlt='Arvore meio dia cerrado'
                        time={tmpDate}
                        author='batata baroa'
                        highlighted
                        linkHref="/post"
                    >
                        Determinações legais cada vez mais rígidas, o desejo de consolidar uma imagem positiva no mercado e a conscientização no que diz respeito ao devido tratamento de efluentes industriais e chorume de aterro sanitário que tem levado gestores a buscarem soluções eficazes para lidar com todos os requisitos da atividade.
                    </PostCard>
                </section>
                <section>
                    <Title>
                        mais artigos
                    </Title>
                    <PostCard
                        title="TRATAMENTO DE EFLUENTES INDUSTRIAIS E CHORUME DE ATERRO SANITÁRIO"
                        imgSrc={image}
                        imgAlt='Arvore meio dia cerrado'
                        time={tmpDate}
                        author='batata baroa'
                        linkHref="/post"
                    >
                        Determinações legais cada vez mais rígidas, o desejo de consolidar uma imagem positiva no mercado e a conscientização no que diz respeito ao devido tratamento de efluentes industriais e chorume de aterro sanitário que tem levado gestores a buscarem soluções eficazes para lidar com todos os requisitos da atividade.
                    </PostCard>
                </section>
            </HomeMain>
            <Footer />
        </>
    )
}

export default Home