import { registerStudentResolver } from "./studentResolvers"
const resolvers = {
    Query: {
        hello: () => 'Hello world'
    },
    Mutation: {
        createStudent: registerStudentResolver
    }
}

export default resolvers