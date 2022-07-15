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
    students:[User]
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
    changePasswordUser(oldPassword:String, newPassword: String):User
    deleteStudent(studentId:String):User
    createClass(name:String):Class
    editClass(id: String, name:String):User
    deleteClass(id:String):User
    enrollClass(classId: String):Class
  }
`

// # the schema allows the following query:
//   type Query {
//     posts: [Post]
//     author(id: Int!): Author
//   }