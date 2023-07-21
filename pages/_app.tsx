import '@/styles/styles.css'
// import '@/styles/DetailOrder.css'
// import '@/styles/Checkout.css'
// import '@/styles/edit.css'
// import '@/styles/style-switcher.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GlobeTix</title>

        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        {/* <link rel="stylesheet" href="dist/styles.css" /> */}
        {/* <link rel="stylesheet" href="/css/edit.css" />
        <link rel="stylesheet" href="/css/style-switcher.css" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
