import { createServer } from '@graphql-yoga/node'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from './typeDefinition'
import resolvers from '../resolvers/index'
const graphQLServer = createServer({
    schema: makeExecutableSchema({
        typeDefs,
        resolvers
    })
})

export default graphQLServer