// App Imports
import models from '../../setup/models'

// Get crateProducts by ID
export async function get(parentValue, { id }) {
  return await models.CrateProduct.findOne({
    where: { id },
    include: [
      { model: models.Crate, as: 'crate' },
      { model: models.Product, as: 'product' },
    ]
  })
}

// Get crateProducts by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.CrateProduct.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.Crate, as: 'crate'},
        {model: models.Product, as: 'product'},
      ]
    })
  } else {
    throw new Error('Please login to view your crateProducts.')
  }
}

// Get all crateProducts
export async function getAll() {
  return await models.CrateProduct.findAll({
    include: [
      { model: models.Crate, as: 'crate' },
      { model: models.Product, as: 'product' },
    ]
  })
}

// Create crateProducts
export async function create(parentValue, { crateProductId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.CrateProduct.create({
      crateId,
      productId
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// // Delete crateProducts
// export async function remove(parentValue, { id }, { auth }) {
//   if(auth.user && auth.user.id > 0) {
//     return await models.CrateProduct.destroy({where: {id, userId: auth.user.id}})
//   } else {
//     throw new Error('Access denied.')
//   }
// }

// Update crateProducts
export async function update(parentValue, { id, crateId, productId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.CrateProduct.update({
      crateId,
      productId
    })
  } else {
    throw new Error('Please login to update this crateProducts')
  }
}
