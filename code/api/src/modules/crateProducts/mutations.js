// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateProductsType from './types'
import { create, remove, update } from './resolvers'

// Crate create
export const crateProductCreate = {
  type: CrateProductsType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    },

    productId: {
      name: 'productId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Crate update
export const crateProductUpdate = {
  type: CrateProductsType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    },

    productId: {
      name: 'productId',
      type: GraphQLInt
    }
  },
  resolve: update
}

// Crate remove
export const crateProductRemove = {
  type: CrateProductsType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
