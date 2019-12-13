import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    input UserInput {
        email: String
        name: String
    }
    extend type Query {
        users: [User]
        user(id: ID!): User
        userByName(name: String): User
    }
    type User {
        id: ID!
        email: String
        name: String
    }
    extend type Mutation {
        createUser(input: UserInput): User!
        updateUser(id: ID!, input: UserInput): User!
    }
`

export const resolvers = {
    Query: {
        users: async () => db.users.findAll(),
        user: async (obj, args, context, info) => db.users.findByPk(args.id),
        userByName: async (_, {name}) => db.users.findOne( {where: {name: name}} ),
    }
}