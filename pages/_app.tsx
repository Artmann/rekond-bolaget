import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Biltvätt | Rekondbolaget AB | Strömstad</title>
          <link href="https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
