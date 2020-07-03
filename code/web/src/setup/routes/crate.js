// App Imports
import List from '../../modules/crate/List'

// Crate routes
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  },

  survey: {
    path: '/style-preferences',
    component: List,
    auth: true
  }

}
