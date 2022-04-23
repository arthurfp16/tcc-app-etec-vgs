import { Header } from "../components/Header"
import { HomeMain, Title } from "../styles/pages/homeStyled"
import { PostCard } from "../components/PostCard"
import { Footer } from "../components/Footer.jsx"

import image from "../../public/img2.png"

const tmpDate = '21/04/2022'

const Home = ({ posts }) => {

    return (
        <>
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
                            href={{
                                pathname: '/[postId]',
                                query:  { postId: post.id}
                            }}
                        >
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
