import React, { useMemo } from "react"
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "@apollo/react-hooks"
import Head from "next/head"
import fetch from "isomorphic-unfetch"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

let apolloClient = null

export function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = useMemo(
      () => apolloClient || initApolloClient(apolloState),
      []
    )

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx

    const apolloClient = (ctx.apolloClient = initApolloClient())

    let pageProps = {}
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx)
    }

    // On the Server
    if (typeof window === "undefined") {
      if (ctx.res && ctx.res.finished) {
        return pageProps
      }

      try {
        const { getDataFromTree } = await import("@apollo/react-ssr")
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        )
      } catch (error) {
        console.error("Error while running `getDataFromTree`", error)
      }

      Head.rewind()
    }

    const apolloState = apolloClient.cache.extract()

    return {
      ...pageProps,
      apolloState,
    }
  }

  return WithApollo
}

function initApolloClient(initialState = {}) {
  const ssrMode = typeof window === "undefined"
  const cache = new InMemoryCache().restore(initialState)

  return new ApolloClient({
    ssrMode,
    link: new HttpLink({
      uri: "http://localhost:3000/api/graphql",
      fetch,
    }),
    cache,
  })
}
