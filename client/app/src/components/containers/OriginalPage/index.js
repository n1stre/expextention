import React, { Component } from 'react'
import OriginalPage from '@contexts/OriginalPage'
import HtmlContent from '@presentational/HtmlContent'
import ActiveElementHighlight from '@containers/ActiveElementHighlight'

class OriginalPageContainer extends Component {
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

export default OriginalPageContainer
