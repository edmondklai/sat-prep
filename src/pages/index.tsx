import { Container } from '@/components/Container'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="SAT Prep" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <Container />
      </RecoilRoot>
    </>
  )
}
