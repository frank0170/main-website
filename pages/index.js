import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blockchain Architecture</title>
        
      </Head>

      <main>
        <Header title="Welcome to Blockchain Architecture's website!" />
        <p className="description">
          We will release the website soon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
