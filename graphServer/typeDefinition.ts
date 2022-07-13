export const typeDefs = /* GraphQL */ `
  type Student {
    id: String
    name: String
    email: String
    password: String
    accessToken: String
    classes: [Class]
  }

  type Class {
    id: String
    name: String
    Students:[Student]
  }

  type Query {
    hello: String
  }

  # this schema allows the following mutation:
  type Mutation {
    createStudent(name:String, email:String, password: String):Student
  }
`

// # the schema allows the following query:
//   type Query {
//     posts: [Post]
//     author(id: Int!): Author
//   }