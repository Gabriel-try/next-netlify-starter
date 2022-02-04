import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          <iframe src="https://coda.io/embed/RSrp0hxLN2/_suf-J?viewMode=embedplay" width=900 height=500 style="max-width: 100%;" allow="fullscreen"></iframe>
        </p>
      </main>

      <Footer />
    </div>
  )
}
