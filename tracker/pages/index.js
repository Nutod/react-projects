import React from "react"
import Layout from "../components/layout"
import { withApollo } from "../lib/apollo"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import HabitList from "../components/habitList"

const HELLO_QUERY = gql`
  query helloQuery {
    helloQuery
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Woozy Tracker</h1>
        <HabitList />
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export default withApollo(Home)
