import { PostCard } from "../components/PostCard"
import styled from 'styled-components'
import image from "../../public/img2.png"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer.jsx"

const HomeMain = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: ${props => props.theme.colors.white100};
        
        section{
            margin-top: 41px;
        }
`
const Title = styled.h2`
    font-size: 23px;
`

const date = new Date()

const Home = () => {
    return (
        <>
            <Header/>
            <HomeMain>
                <section>
                    <Title>
                        Destaque
                    </Title>
                    <PostCard
                        title="TRATAMENTO DE EFLUENTES INDUSTRIAIS E CHORUME DE ATERRO SANITÁRIO"
                        imgSrc={image}
                        imgAlt='Arvore meio dia cerrado'
                        time={date.toLocaleDateString()}
                        author='batata baroa'
                        highlighted
                        linkHref="/posts"
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
                        time={date.toLocaleDateString()}
                        author='batata baroa'
                        linkHref="/posts"
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