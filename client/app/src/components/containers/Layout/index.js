import React, { Component } from 'react'
import { Consumer as OriginalPageConsuner } from '@contexts/OriginalPage'
import ResizableGrid from '../ResizableGrid'
import ElementImage from '../ElementImage'
import OriginalPage from '../OriginalPage'
import './style.scss'

export default class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <ResizableGrid
          childrenTitles={['DOM', 'Original Page', 'Pic']}
          isHorizontal
          template='100px auto 300px'
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis consequatur consectetur porro vitae, quaerat commodi neque aliquam dolorum. Debitis molestiae numquam consequatur ipsa recusandae, quod iusto quibusdam veritatis officiis?</p>

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
