export const typeDefs = /* GraphQL */ `
  type User {
    id: String
    name: String
    email: String
    password: String
    accessToken: String
    refreshToken:String
    role:String
    tokenCounter:Int
    classes: [Class]
  }


  type Class {
    id: String
    name: String
    users:[User]
  }
  type ResponeMessage{
    message: String
  }
  type Query {
    hello: String
    users: [User]
    students: [User]
    teachers: [User]
    classes: [Class]
  }
  
  # this schema allows the following mutation:
  type Mutation {
    createUser(name:String, email:String, password: String, role: String):User
    loginUser(email:String, password:String):User
    changePasswordUser(oldPassword:String, newPassword: String):ResponeMessage
    deleteStudent(studentId:String):ResponeMessage
    createClass(name:String):Class
    editClass(id: String, name:String): ResponeMessage
    deleteClass(id:String): ResponeMessage
    enrollClass(classId: String): ResponeMessage
  }
`

