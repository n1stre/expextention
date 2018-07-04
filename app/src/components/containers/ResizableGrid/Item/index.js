import React from 'react'
import PropTypes from 'prop-types'
import bem from '../styleNamesBemMap'
import Separator from './Separator'

const propTypes = {
  separatorTitle: PropTypes.string,
  onSeparatorMouseDown: PropTypes.func.isRequired
}

const ResizableGridItem = (props) => {
  return (
    <div className={bem.resizableGrid.item}>
      <Separator onMouseDown={props.onSeparatorMouseDown}>
        { props.separatorTitle }
      </Separator>
      { props.children }
    </div>
  )
}

ResizableGridItem.propTypes = propTypes

export default ResizableGridItem
