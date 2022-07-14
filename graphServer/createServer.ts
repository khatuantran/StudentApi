import { createServer } from '@graphql-yoga/node'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from './typeDefinition'
import resolvers from '../resolvers/index'
import { shield, chain } from 'graphql-shield'
import { applyMiddleware } from 'graphql-middleware'
import isAuthenticated from '../middlewares/isAuthenticated'
import isTeacher from '../middlewares/isTeacher'
const schema = makeExecutableSchema({ typeDefs, resolvers })


const permistions = shield({
    Query:{
       
    },
    Mutation: {
        changePasswordUser: isAuthenticated,
        deleteStudent: chain(isAuthenticated,isTeacher)
    }
})

const schemaWithPermissions = applyMiddleware(schema, permistions)
const graphQLServer = createServer({
    schema: schemaWithPermissions
})

export default graphQLServer