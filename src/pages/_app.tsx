import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import * as React from 'react'
import Head from 'next/head'
import { theme } from '../theme'
import { Navbar } from '../components/Navbar'

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FreeBeat" />
        <meta
          name="twitter:description"
          content="YouTube動画でプレイリストを作り、好きなBPMに合わせた倍速再生ができる、作業用音楽プレイヤーです。"
        />
        <meta name="twitter:url" content="http://freebeat.vercel.app" />
        <meta name="twitter:site" content="@solt9029" />
        <meta name="twitter:creator" content="@solt9029" />
        <meta name="twitter:image" content="https://freebeat.vercel.app/icon.png"></meta>
        <title>FreeBeat</title>
        <link rel="icon" href="/icon.png" type="image/png"></link>
      </Head>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}
