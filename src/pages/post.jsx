import Image from 'next/image'

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PostMain, Author, ImageStyledContainer } from '../styles/pages/postStyle.js'

import img1 from '../../public/img1.png'



export default function Home({ post }) {
  return (
    <>
      <Header />

      <PostMain>

        <h1>{post.title}</h1>

       {post.text.split('.').map(sentence => <p>{sentence}.</p>)}

        <Author>Escrito por: {post.author}</Author>

        <ImageStyledContainer>
          <Image src={img1} layout='fill' objectFit="fill" alt='dinamic alt' />
        </ImageStyledContainer>

      </PostMain>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch('http://localhost:3000/api/post')
  const posts = await res.json()
  let post = posts.find(post => post.id == query.id)
  return {
    props: { post }
  }
}

