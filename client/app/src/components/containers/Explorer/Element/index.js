import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styleNames } from '@helpers/helperStyle'

const propTypes = {
  name: PropTypes.string.isRequired
}

class ExplorerElement extends Component {
  constructor (props) {
    super(props)
    this.toggleChildren = this.toggleChildren.bind(this)
    this.state = {
      isOpened: true
    }
  }

  get className () {
    const { isOpened } = this.state
    const isEmpty = !React.Children.count(this.props.children)

    return styleNames(
      'explorer__element',
      isOpened && 'explorer__element--is-opened',
      isEmpty && 'explorer__element--is-empty'
    )
  }

  toggleChildren () {
    this.setState(state => {
      return { isOpened: !state.isOpened }
    })
  }

  render () {
    return (
      <div className={this.className}>
        <p
          onClick={this.toggleChildren}
          className='explorer__element-name'>
          { this.props.name }
        </p>

        <div className='explorer__element-children'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

ExplorerElement.propTypes = propTypes

export default ExplorerElement
