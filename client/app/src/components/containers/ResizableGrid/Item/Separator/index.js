import React from 'react'
import PropTypes from 'prop-types'
import { styleNames } from '@helpers/helperStyle'
import bem from '../../styleNamesBemMap'

const propTypes = {
  children: PropTypes.string,
  onMouseDown: PropTypes.func.isRequired
}

const Separator = (props) => {
  const className = styleNames(
    bem.resizableGrid.separator,
    Boolean(props.children) && bem.resizableGrid.separator.withTitle
  )

  return (
    <div
      className={className}
      onMouseDown={props.onMouseDown}>
      { props.children }
    </div>
  )
}

Separator.propTypes = propTypes

export default Separator
