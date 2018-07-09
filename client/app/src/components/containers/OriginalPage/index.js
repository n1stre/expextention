import React, { Component } from 'react'
import OriginalPage from '@contexts/OriginalPage'
import HtmlContent from '@presentational/HtmlContent'
import ActiveElementHighlight from '@containers/ActiveElementHighlight'
import { toImage } from '@utils/Domvas'

export default class index extends Component {
  componentDidMount () {
    let elem = document.querySelector('.promo-text')
    console.log('DUD', elem)
    toImage(elem, (arg1, arg2, arg3) => {
      console.log('arg1', arg1)
      console.log('arg2', arg2)
      console.log('arg3', arg3)
    })
  }

  render () {
    return (
      <div>
        <OriginalPage.Consumer>
          {({ html, pointedElement, setPointedElement }) => (
            <ActiveElementHighlight
              targetElement={pointedElement}
              setPointedElement={setPointedElement}>
              <HtmlContent html={html} />
            </ActiveElementHighlight>
          )}
        </OriginalPage.Consumer>
      </div>
    )
  }
}
