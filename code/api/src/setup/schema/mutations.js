// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
// Would have to import the paths for the mutations. 
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// mutations update or delete tables
// This file would update styles or stylePrefs
// it would be added to the fields. 

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation
