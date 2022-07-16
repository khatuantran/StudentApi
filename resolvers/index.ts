import { 
    registerUserResolver, 
    loginUserResolver,
    getAllTypeResolver,
    changePasswordUserResolver,
    deleteStudentResolver,
    enrollClassResolver, 
    getClassByUserResolver,
} from "./userResolvers"

import { 
    createClassResolver,
    getAllClassResolver,
    editClassResolver,
    deleteClassResolver,
    getUserByClassResolver

} from './classResovers'
const resolvers = {
    Query: {
        hello: () => 'Hello world',
        users: getAllTypeResolver,
        teachers: () => getAllTypeResolver('teacher'),
        students: () => getAllTypeResolver('student'),
        classes: getAllClassResolver
    },
    Mutation: {
        createUser: registerUserResolver,
        loginUser: loginUserResolver,
        changePasswordUser: changePasswordUserResolver,
        deleteStudent: deleteStudentResolver,
        createClass: createClassResolver,
        editClass: editClassResolver,
        deleteClass: deleteClassResolver,
        enrollClass: enrollClassResolver,
    },
    User: {
        classes: getClassByUserResolver
    },
    Class: {
        users: getUserByClassResolver
    }
}

export default resolvers