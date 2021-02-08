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

class StyleSurvey extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      bohemian: 0,
      sporty: 0,
      preppy: 0,
      punk: 0,
      questionNum: 1
    }
  }

  render() {
    return(
      <h1>Style Survey</h1>
    )
  }


}

function styleSurveyState(state) {
  return {
    user: state.user
  }
}
export default connect(styleSurveyState)(withRouter(StyleSurvey))