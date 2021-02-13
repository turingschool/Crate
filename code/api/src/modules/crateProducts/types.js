// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const CrateProductsType = new GraphQLObjectType({
  name: 'crateProducts',
  description: 'Crate Products Type',

  fields: () => ({
    crateId: { type: GraphQLInt },
    productId: { type: GraphQLInt }
  })
})

export default CrateProductsType
