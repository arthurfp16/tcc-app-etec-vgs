import { Header } from "../components/Header"
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>My page title</title>
    </Head>
    <Header linkHref='/posts' linkText='Ler artigos mais recentes' />
    </>
  )
}