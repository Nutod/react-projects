import React from "react"
import Head from "next/head"
import Nav from "./nav"

function Layout(woozy) {
  console.log(woozy)
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </>
  )
}

export default Layout
