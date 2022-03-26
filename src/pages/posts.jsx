import { PostList } from "../components/postList"
import { Header } from "../components/Header"

export default function Home({ posts }) {
    return (
      <>
        <Header linkHref='/' linkText='Voltar para a home' />
        <PostList posts={ posts } />
      </>
    )
  }
  
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/posts`)
    const posts = await res.json()
    return { props: { posts } }
  }
  
  