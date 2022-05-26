import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PostMain, Author, ImageStyledContainer } from '../styles/pages/postStyle.js'

export default function Home({ post }) {
  return (
    <>
      <Header />

      <PostMain>

        <h1>{post.title}</h1>

       <p>{post.text}</p>

        <Author>Escrito por: {post.author}</Author>

      </PostMain>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch('https://tcc-app-etec-vgs.vercel.app/api/post')
  const posts = await res.json()
  let post = posts.find(post => post.id == query.id)
  return {
    props: { post }
  }
}

