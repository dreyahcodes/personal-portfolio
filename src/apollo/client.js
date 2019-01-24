import ApolloClient from 'apollo-boost'

export const isBrowser = typeof window !== 'undefined'

export const client = isBrowser
  ? new ApolloClient({
      uri: 'https://api.graph.cool/simple/v1/cjrakjj350ezx0179en6sc6b8',
      // request: operation => {
      //   operation.setContext({
      //     headers: {
      //       authorization: `Bearer ${getAccessToken()}`,
      //     },
      //   })
      // },
    })
  : {}
