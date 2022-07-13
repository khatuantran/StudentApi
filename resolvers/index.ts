import { 
    registerStudentResolver, 
    loginStudentResolver,
    getAllStudent
} from "./studentResolvers"
const resolvers = {
    Query: {
        hello: () => 'Hello world',
        students: getAllStudent,
        // classes: getAllClass
    },
    Mutation: {
        createStudent: registerStudentResolver,
        loginStudent: loginStudentResolver
    }
    
}

export default resolvers