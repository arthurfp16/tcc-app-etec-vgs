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
height: 40px;
color: #fff;
padding: 10px 25px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
background: linear-gradient(0deg, #264713 0%, #61aa37 100%);
height: 40px;
line-height: 42px;
padding: 0;
border: none;

span {
position: relative;
display: block;
width: 100%;
height: 100%;
}

::before, ::after {
position: absolute;
content: "";
right: 0;
top: 0;
background: #264713;
transition: all 0.3s ease;
}

:before {
 height: 0%;
 width: 2px;
}
:hover, :focus {
background: transparent;
box-shadow: none;
}
:hover:before {
height: 100%;
}
  
:hover:after {
width: 100%;
}
span:hover{
color: #264713;
}
span:before,
span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #264713;
  transition: all 0.3s ease;
}
span:before {
  width: 2px;
  height: 0%;
}
span:after {
  width: 0%;
  height: 2px;
}
span:hover:before {
  height: 100%;
}
span:hover:after {
  width: 100%;
}
`

const Home = ({ posts }) => {

    return (
        <>
            <LikeCreationMenu><span>Pagina de criaçao</span></LikeCreationMenu>
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
