// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateProductsType from './types'
import { getAll, getById } from './resolvers'

// CrateProducts All
export const crateProducts = {
  type: new GraphQLList(CrateProductsType),
  resolve: getAll
}

// CrateProduct By ID
export const crateProductById = {
  type: CrateProductsType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
