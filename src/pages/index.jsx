import Link from 'next/link'
import styled from 'styled-components'
import { Header } from "../components/Header"
import { HomeMain, Title } from "../styles/pages/homeStyled"
import { PostCard } from "../components/PostCard"
import { Footer } from "../components/Footer.jsx"
import Head from 'next/head'

import image from "../../public/img2.png"

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

const Home = ({ posts, postHighlighted }) => {

    function createPostCard(post) {
        try {
            return post.map((post) => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    imgSrc={image}
                    imgAlt='Arvore meio dia cerrado'
                    time={post.createdAt}
                    author={post.author}
                    href={`/post?id=${post.id}`}>
                    {post.text.slice(0, 250) + ' ...'}
                </PostCard>
            ))
        }
        catch {
            return (
                <PostCard
                    key={post.id}
                    title={post.title}
                    imgSrc={image}
                    imgAlt='Arvore meio dia cerrado'
                    time={post.createdAt}
                    author={post.author}
                    highlighted
                    href={`/post?id=${post.id}`}>
                    {post.text.slice(0, 250) + ' ...'}
                </PostCard>
            )
        }
    }
    return (
        <>
            <Head>
                <title>
                    Home | Cerrado vgs
                </title>
            </Head>
            <Link href={'/postCreationMenu'} >
                <LikeCreationMenu>Ir para a pagina de criação</LikeCreationMenu>
            </Link>
            <Header />

            <HomeMain>
                <section>
                    <Title>
                        Destaques
                    </Title>
                    {
                        createPostCard(postHighlighted)
                    }
                </section>
                <section>
                    <Title>
                        Mais artigos
                    </Title>
                    {
                        createPostCard(posts)
                    }
                </section>
            </HomeMain>

            <Footer />
        </>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch('https://tcc-app-etec-vgs.vercel.app/api/post')
    const posts = await res.json()
    posts.reverse()
    const postHighlighted = posts[0]
    posts.shift()
    return {
        props: { posts, postHighlighted }
    }
}
