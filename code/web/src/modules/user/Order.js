import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Grid, GridCell } from '../../ui/grid'
import { H3, H6 } from '../../ui/typography'
import {grey1, grey2, grey } from '../../ui/common/colors';
import Card from '../../ui/card'
import Product from './Product'

class Order extends PureComponent {

    render() {
        return (
            <Card style={{ 
                margin: '2em', 
                textAlign: 'center', 
                padding: ".5em",
                backgroundColor: grey1
                }}>
                <H6
                style={{
                  padding: '.5em',
                  marginRight: '.5em',
                }}
                >
                Accessories For Men:
              </H6>
              <Grid>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
              </Grid>
              </Card>
        )
        
    }
}

export default Order