// Imports
import { GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, update, remove } from './resolvers'

// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

//update subscription

export const subscriptionDeliveryDate = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    deliveryDate: {
      name: 'deliveryDate',
      type: GraphQLString
    }
  },
  resolve: update
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}