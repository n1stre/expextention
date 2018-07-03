import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResizableGridUnidirectional from '../ResizableGridUnidirectional';

export default class Layout extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="layout">
        <ResizableGridUnidirectional
          childrenTitles={['Test', 'Hello', 'World']}
          childrenFlex={[1,1,1]}>

      </div>
    )
  }
}
