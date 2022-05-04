import Link from 'next/link'
import styled from 'styled-components'
import { Header } from "../components/Header"
import { HomeMain, Title } from "../styles/pages/homeStyled"
import { PostCard } from "../components/PostCard"
import { Footer } from "../components/Footer.jsx"

import image from "../../public/img2.png"

const tmpDate = '21/04/2022'

const LikeCreationMenu = styled.button`
width: 100%;
height: 48px;
border: none;
outline: none;
font-size: 18px;
::before{
    content: '';
    background-color: ${props => props.theme.colors.darkGreen200};
    height: 48px;
    width: 100%;
    position: absolute;
    top:0;
    left:-100vw;
    transition: 0.7s all ease-in-out;
    color: ${props => props.theme.colors.darkGreen200};
}
:hover::before, :focus::before{
    color:${props => props.theme.colors.white};
    content: 'Ir para a pagina de criaçao';
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
}
@media screen and (max-width: 768px) {
    color:${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen200};
    hover::before, :focus::before, ::before{
        content: none;
    }
}
`

const Home = ({ posts }) => {

    return (
        <>
            <Link href={'/postCreationMenu'} ><LikeCreationMenu>Ir para a pagina de criação</LikeCreationMenu></Link>
            <Header />

            <HomeMain>
                {posts.map((post) => {
                    return (
                        <section key={post.id}>
                            <Title>
                                Destaques
                            </Title>
                            <PostCard
                                title={post.title}
                                imgSrc={image}
                                imgAlt='Arvore meio dia cerrado'
                                time={tmpDate}
                                author={post.author}
                                highlighted
                                href={`/post?id=${post.id}`}>
                                {post.text.slice(0, 400) + ' ...'}
                            </PostCard>
                        </section>
                    )
                })}
            </HomeMain>
            <Footer />
        </>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/post')
    const posts = await res.json()
    return {
        props: { posts }
    }
}
