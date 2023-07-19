import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
          <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
          <script src="/js/islands.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
