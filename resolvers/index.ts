import { 
    registerUserResolver, 
    loginUserResolver,
    getAllType,
    changePasswordUserResolver,
    // deleteStudent, 
} from "./userResolvers"
const resolvers = {
    Query: {
        hello: () => 'Hello world',
        users: getAllType,
        teachers: () => getAllType('teacher'),
        students: () => getAllType('student'),
        // classes: getAllClass
    },
    Mutation: {
        createUser: registerUserResolver,
        loginUser: loginUserResolver,
        changePasswordUser: changePasswordUserResolver
        // deleteStudent: deleteStudent
    }
    
}

export default resolvers