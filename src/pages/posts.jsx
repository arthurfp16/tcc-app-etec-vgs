import { PostList } from "../components/postList"

export default function Home({ posts }) {
    return (
        <PostList posts={ posts } />
    )
  }
  
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/posts`)
    const posts = await res.json()
    return { props: { posts } }
  }
  
  