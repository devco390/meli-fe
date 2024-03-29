import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { useEffect, useState } from 'react'
import { Router } from 'next/router'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Meli | FrontEnd Test</title>
        <base href="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.1/mercadolibre/favicon.svg"
          rel="icon"
          data-head-react="true"
        />
        <meta name="theme-color" content="#ffe600" />
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />
        <meta property="og:title" content="Meli | Market Place" />
        <meta property="og:site_name" content="Meli" />
        <meta
          property="og:image"
          content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
          data-head-react="true"
        />
        <meta name="twitter:image:alt" content="Meli logo" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.mercadolibre.com.co/" />
        <meta
          property="og:description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="preload"
          as="style"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} loading={loading} />
    </ThemeProvider>
  )
}

export default MyApp
