import React from "react"
import Head from "next/head"
import Nav from "./nav"

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tracker Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
    </>
  )
}

export default Layout
