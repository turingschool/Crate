// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql'

const UpdateUserInputType = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  description: 'Input payload for updating user',
  fields: () => ({
    street1: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString }
  }),
});


const UserShippingAddressType = new GraphQLObjectType({
  name: 'shippingAddress',
  description: 'User Shipping Address Type',

  fields: () => ({
    street1: { type: GraphQLString },
    street2: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString }
  })
})

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    image: { type: GraphQLString },
    bio: { type: GraphQLString },
    shippingAddress: { type: UserShippingAddressType }
  })
})

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType, UserShippingAddressType, UpdateUserInputType }
