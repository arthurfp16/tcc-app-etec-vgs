import { PostCard } from "../components/PostCard"
import styled from 'styled-components'
import image from "../img/img1.png"

const HomeContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`

const date = new Date()
const Home = () => {
    return (
        <HomeContent>
            <PostCard
                title="TRATAMENTO DE EFLUENTES INDUSTRIAIS E CHORUME DE ATERRO SANITÁRIO"
                imgSrc={image}
                imgAlt='Arvore meio dia cerrado'
                time={date.toLocaleDateString()}>   Determinações legais cada vez mais rígidas, o desejo de consolidar uma imagem positiva no mercado e a conscientização no que diz respeito ao devido tratamento de efluentes industriais e chorume de aterro sanitário que tem levado gestores a buscarem soluções eficazes para lidar com todos os requisitos da atividade.
            </PostCard>
        </HomeContent>
    )
}


export default Home