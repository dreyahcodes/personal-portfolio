// import ApolloClient from 'apollo-boost'
import { GraphQLClient } from 'graphql-request'

export const isBrowser = typeof window !== 'undefined'

export const client = isBrowser
  ? new GraphQLClient(
      'https://api.graph.cool/simple/v1/cjrakjj350ezx0179en6sc6b8'
    )
  : {}
