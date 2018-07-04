import React, { Component } from 'react'
import ResizableGrid from '../ResizableGrid'

export default class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <ResizableGrid
          childrenTitles={['Test', 'Hello', 'World']}
          childrenFlex={[1, 1, 1]}>
          <p>one</p>
          <p>two</p>
          <p>triee</p>
        </ResizableGrid>
      </div>
    )
  }
}
