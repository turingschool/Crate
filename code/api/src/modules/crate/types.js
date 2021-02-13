// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import CrateProductsType from '../crateProducts/types'

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
