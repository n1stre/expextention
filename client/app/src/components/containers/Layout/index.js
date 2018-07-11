import React, { Component } from 'react'
import { Consumer as OriginalPageConsuner } from '@contexts/OriginalPage'
import ResizableGrid from '../ResizableGrid'
import ElementImage from '../ElementImage'
import OriginalPage from '../OriginalPage'
import Explorer from '../Explorer'
import './style.scss'

export default class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <ResizableGrid
          isHorizontal
          template='300px auto 300px'
        >
          <div>
            <OriginalPageConsuner>
              {({ pointedElement }) => {
                return <Explorer element={pointedElement} />
              }}
            </OriginalPageConsuner>
          </div>

          <div className='html-content'>
            <OriginalPage />
          </div>

          <div>
            <OriginalPageConsuner>
              {({ pointedElement }) => {
                return <ElementImage targetElement={pointedElement} />
              }}
            </OriginalPageConsuner>
          </div>
        </ResizableGrid>
      </div>
    )
  }
}
