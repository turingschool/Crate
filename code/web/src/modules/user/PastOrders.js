//Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H6 } from '../../ui/typography'
import {grey1, grey2, grey } from '../../ui/common/colors';
import Order from './Order'

// Component
class PastOrders extends PureComponent {

    componentDidMount() {

    }

    render() {
        return (
          <GridCell>
            <Grid style={{ backgroundColor: grey }}>
              <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                <H3 font="secondary">My Past Orders</H3>
                <p style={{ marginTop: '1em', color: grey2 }}>
                  Watch this space to see what you have kept or returned from
                  your past crates.
                </p>
              </GridCell>
            </Grid>
              <Order/>
              <Order/>
          </GridCell>
        );
    }
}

function subscriptionsState(state) {
  return {
    subscriptions: state.subscriptionsByUser
  }
}

export default connect(subscriptionsState)(PastOrders)
