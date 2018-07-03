import React from 'react'
import PropTypes from 'prop-types'
import { styleNames } from '../../../../helpers';

const propTypes = {
  children: PropTypes.string,
}

const Separator = ({ children, ...restProps }) => {
  const hasText = Boolean(children)
  const style = {
    styleNames()
  }

  return (
    <div style={}>
      { props.children }
    </div>
  )
}

Separator.propTypes = propTypes;

export default Separator
