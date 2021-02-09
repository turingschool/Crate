// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import GraphQLJSON from 'graphql-type-json';
import { GraphQLJSONObject } from 'graphql-type-json';

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
    shippingAddress: { type: GraphQLJSON },
    street1: { type: GraphQLJSONObject },
    street2: { type: GraphQLJSONObject },
    city: { type: GraphQLJSONObject },
    state: { type: GraphQLJSONObject },
    zip: { type: GraphQLJSONObject },
    // shippingAddress: {
    //   street1: {
    //     type: GraphQLString },
    //   street2: {
    //     type: GraphQLString
    //   },
    //   city: {
    //     type: GraphQLString
    //   },
    //   state: {
    //     type: GraphQLString
    //   },
    //   zip: {
    //     type: GraphQLString
    //   },
    //   type: GraphQLString
    // }
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

const UserShippingAddressType = new GraphQLObjectType({
  name: 'userShippingAddress',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType }
export default new GraphQLObjectType({
  name: 'shippingAddress',

  fields: {
    myValue: { type: GraphQLJSON },
    myObject: { type: GraphQLJSONObject },
  },
});
