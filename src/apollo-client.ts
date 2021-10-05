import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
})

// refer https://caddi.tech/archives/2195
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        playlists: relayStylePagination(),
      },
    },
  },
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
