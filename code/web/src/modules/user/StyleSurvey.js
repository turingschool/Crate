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
      products: []
    }
  }

  componentDidMount() {
    this.setState({
      products: sampleSurveyData.data
    })
  }

  createProductInputs = () => {
    return this.state.products.map(product => {
      return(
        <label key={product.style}>
          <input
            type='radio'
            name='survey-product'
          />
          <img 
            src={product.imgUrl} 
            alt={product.description}
            style={{width: '20vw'}} 
          />
        </label>
      )
    })
  }

  handleNavClick = (type) => {
    if (type === 'decrease') {
      this.setState({
        questionNum: this.state.questionNum - 1
      })
    } else {
      this.setState({
        questionNum: this.state.questionNum + 1
      })
    }
  }

  render() {
    return(
      <section style={{marginTop: '5%'}}>
        <H3>What's your style?</H3>
        <form
          style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', placeItems: 'center'}}
        >
          {this.createProductInputs()}
        </form>
        <div className='form-navigation'>
          {this.state.questionNum !== 1 && <button
            onClick={() => this.handleNavClick('decrease')}
          >
            ←
          </button>}
          <p>Question {this.state.questionNum}/6</p>
          {this.state.questionNum !== 6 && <button
            onClick={() => this.handleNavClick('increase')}
          >→</button>}
          {this.state.questionNum === 6 && 
          <button>SUBMIT</button>}
        </div>
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