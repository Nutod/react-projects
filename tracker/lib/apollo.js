import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import fetch from "isomorphic-unfetch"
import { InMemoryCache } from "apollo-cache-inmemory"

export function withApollo(PageComponent) {
  const WithApollo = props => {
    const client = initApolloClient()

    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    )
  }

  WithApollo.getInitialProps = async ctx => {}

  return WithApollo
}

function initApolloClient(initialState = {}) {
  const ssrMode = typeof window === "undefined"
  const cache = new InMemoryCache().restore(initialState)

  return new ApolloClient({
    ssrMode,
    uri: "http://localhost:3000/api/graphql",
    fetch,
    cache,
  })
}
