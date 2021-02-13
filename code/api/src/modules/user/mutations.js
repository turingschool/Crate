// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType, UpdateUserInputType } from './types'
import { create, update, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Update User details
export const userUpdate = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      email: 'email',
      type: GraphQLString
    },

    image: {
      image: 'image',
      type: GraphQLString
    },

    bio: {
      bio: 'bio',
      type: GraphQLString
    },

    shippingAddress: {
      shippingAddress: 'shippingAddress',
      type: UpdateUserInputType
    }
  },
  resolve: update
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}