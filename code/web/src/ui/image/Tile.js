// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const Tile = (props) => {
  const { children, image, width, height, style, shadow, margin, ...others } = props

  return (
    <div style={Object.assign({ height, width , margin}, style)} {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          background-position: center; 
          background-repeat: no-repeat; 
          background-image:url('${ image }');
          box-shadow: ${ shadow ? shadow : 'none' };
        }
      `}</style>
    </div>
  )
}

// Component Properties
Tile.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  shadow: PropTypes.string
}
Tile.defaultProps = {
  style: {},
  width: '100%',
  height: '100%'
}

export default Tile