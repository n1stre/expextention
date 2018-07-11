import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExplorerElement from './Element'
import './style.scss'

const propTypes = {
  element: PropTypes.object
}

class Explorer extends Component {
  constructor (props) {
    super(props)
    this.mapChildren = this.mapChildren.bind(this)
    this.getElementName = this.getElementName.bind(this)
    this.traverseChildren = this.traverseChildren.bind(this)
  }

  mapChildren (element, cb) {
    return [].map.call(element.children, cb)
  }

  getElementName (element) {
    let name = element.tagName
    if (element.id) name += ` #${element.id}`
    if (element.classList && element.classList.length) {
      name += ' '
      name += [...element.classList]
        .map(className => `.${className}`)
        .join('')
    }
    return name
  }

  traverseChildren (element, idx) {
    return Boolean(element) && (
      <ExplorerElement
        name={this.getElementName(element)}
        key={idx}>
        { this.mapChildren(element, this.traverseChildren) }
      </ExplorerElement>
    )
  }

  render () {
    return (
      <div className='explorer'>
        { this.traverseChildren(this.props.element) }
      </div>
    )
  }
}

Explorer.propTypes = propTypes

export default Explorer
