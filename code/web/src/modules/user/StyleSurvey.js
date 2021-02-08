// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { sampleSurveyData } from './SurveyProducts'

class StyleSurvey extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      bohemian: 0,
      sporty: 0,
      preppy: 0,
      punk: 0,
      questionNum: 1,
      products: sampleSurveyData.data.data
    }
  }

  createProductInputs = () => {
    console.log(this.state.products)
    return this.state.products.map(product => {
      return(
        <label>
          <input
            type='radio'
            name='survey-product'
          />
          {product.description}
        </label>
      )
    })
  }

  render() {
    return(
      <section>
        <h1>Style Survey</h1>
        <form>
          {this.createProductInputs()}
        </form>
      </section>
    )
  }


}

function styleSurveyState(state) {
  return {
    user: state.user
  }
}
export default connect(styleSurveyState)(withRouter(StyleSurvey))