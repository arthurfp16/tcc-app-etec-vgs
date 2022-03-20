import { PostList } from "../components/postList"

export default function Home({ cafe }) {
  return (
    <div>
      <PostList posts={cafe} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const cafe = await res.json()
  return { props: { cafe } }
}

