
// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'


// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { H2 } from '../../ui/typography'
import { grey, grey2, white, black } from '../../ui/common/colors'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'


// App Imports
import { getListByUser } from '../subscription/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SubscriptionItem from '../subscription/Item'


class Survey extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      survey: {
        top: 0,
        bottom: 0,
        shoes: 0,
        accessory: 0
      }
    }
  }

  surveyClick = (event, location, number) => {
    let survey = this.state.survey
    survey[location] = number
    console.log('survey', survey)
    this.setState({
      survey
    })
  }

  render() {
    return (
      <div>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Style Survey</H3>
          </GridCell>
        </Grid>

          <div>
            <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Top</H4>
          </div>
        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button
                    onClick={(event) => this.surveyClick(event, 'top', '1')}  
                    style={{ marginBottom: '1em' } } 
                    theme="primary">Style Choice 1
                  </Button>
              </p>
            </Card>
          </GridCell>

            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button
                  onClick={(event) => this.surveyClick(event, 'top', '2')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 2</Button>
              </p>
            </Card>
          </GridCell>

          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'top', '3')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          </Grid>

          <div>
            <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Bottoms</H4>
          </div>
        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'bottom', '1')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 1
                </Button>
              </p>
            </Card>
          </GridCell>

            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'bottom', '2')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 2
                </Button>
              </p>
            </Card>
          </GridCell>

          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'bottom', '3')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          </Grid>

          <div>
          <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Shoes</H4>
          </div>
          <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'shoes', '1')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 1
                </Button>
              </p>
            </Card>
          </GridCell>
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'shoes', '2')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 2
                </Button>
              </p>
            </Card>
          </GridCell>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center' , marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={(event) => this.surveyClick(event, 'shoes', '3')}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          </Grid>

          <div>
            <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Accessory</H4>
          </div>
          <Grid>
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
              <Card style={{ width: '18em', backgroundColor: white }}>
              <p style={{ padding: '2em 3em 0 3em' }}>
                <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
                </p>
                <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                  <Button 
                    onClick={(event) => this.surveyClick(event, 'accessory', '1')}
                    style={{ marginBottom: '1em' }} 
                    theme="primary">Style Choice 1
                  </Button>
                </p>
              </Card>
            </GridCell>

            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
              <Card style={{ width: '18em', backgroundColor: white }}>
              <p style={{ padding: '2em 3em 0 3em' }}>
                <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
                </p>
                <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                  <Button 
                    onClick={(event) => this.surveyClick(event, 'accessory', '2')}
                    style={{ marginBottom: '1em' }} 
                    theme="primary">Style Choice 2
                  </Button>
                </p>
              </Card>
          </GridCell>

          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button
                  onClick={(event) => this.surveyClick(event, 'accessory', '3')} 
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
      </Grid>
    </div>
    )
  }
}

export default Survey;