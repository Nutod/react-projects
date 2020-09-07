import { ApolloServer, gql } from "apollo-server-micro"

const typeDefs = gql`
  type Query {
    helloQuery: String
  }
`

const resolvers = {
  Query: {
    helloQuery: () => {
      return "Just doing my job"
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: "/api/graphql" })

// export default (_req, res) => {
//    res.setHeader('Content-Type', 'application/json')
//    res.statusCode = 200
//    res.end(JSON.stringify({
//       message: "Ping!"
//    }))
// }
