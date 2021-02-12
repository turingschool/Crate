// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import CrateProductsType from '../crateProduct/types'

// Crate type
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    crateProducts: { type: CrateProductsType }
  })
})



export default CrateType
