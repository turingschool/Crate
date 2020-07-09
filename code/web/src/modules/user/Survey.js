
// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'


// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
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

  render() {

    return (
      <div style={{ padding: '1em 1.2em' }}>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Style Survey</H3>
          </GridCell>
        </Grid>

        <Card style={{ width: '18em', backgroundColor: white }}>
          <img src={'http://placekitten.com/200/300'} />
          <Button theme="primary">Style Choice 1</Button>
        </Card>

        <Card style={{ width: '18em', backgroundColor: white }}>
          <img src={'http://placekitten.com/200/300'} />
          <Button theme="primary">Style Choice 2</Button>
        </Card>

        <Card style={{ width: '18em', backgroundColor: white }}>
          <img src={'http://placekitten.com/200/300'} />
          <Button theme="primary">Style Choice 3</Button>
        </Card>
    </div>
    )
  }
}

export default Survey;