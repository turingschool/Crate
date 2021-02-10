import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Grid, GridCell } from '../../ui/grid'
import { H3, H6 } from '../../ui/typography'
import {grey1, grey2, grey } from '../../ui/common/colors';
import Card from '../../ui/card'
import { render } from 'react-dom'

class Product extends PureComponent {
    
    render() {
        return(
            <GridCell style={{ textAlign: 'center' }}>
                <img
                    src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                    style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
            </GridCell>
        )
    }
}

export default Product