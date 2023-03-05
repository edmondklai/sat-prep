import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import StartPage from './start'

export default function Home() {
  return (
    <>
      <Head>
        <title>Themelios Education</title>
        <meta name="description" content="SAT Prep" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StartPage />
    </>
  )
}
