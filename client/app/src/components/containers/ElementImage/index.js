import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toImage } from '@utils/Domvas'

const propTypes = {
  targetElement: PropTypes.object
}

class ElementImage extends Component {
  constructor (props) {
    super(props)
    this.setImageSrc = this.setImageSrc.bind(this)
    this.imageSrcPlaceholder = 'http://via.placeholder.com/350x150'
    this.state = {
      elementImageSrc: null
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.targetElement !== this.props.targetElement) {
      this.setImageSrc(this.props.targetElement)
    }
  }

  setImageSrc (elem) {
    toImage(elem, (elementImage) => {
      this.setState({ elementImageSrc: elementImage.src })
    })
  }

  render () {
    return (
      <div className='element-image'>
        <img src={this.state.elementImageSrc || this.imageSrcPlaceholder} />
      </div>
    )
  }
}

ElementImage.propTypes = propTypes

export default ElementImage
