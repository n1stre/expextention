import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, style, ...restProps }) => {
  return (
    <div {...restProps} style={}>
      { props.children }
    </div>
  )
}

Container.propTypes = propTypes;

export default Container
