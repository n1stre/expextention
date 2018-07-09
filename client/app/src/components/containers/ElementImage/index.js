import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getScreenShot } from '@api'
import { getDomElementRect } from '@helpers/helperDocument'
import { debounce } from '@helpers/helperDebounce'

const propTypes = {
  targetElement: PropTypes.object
}

class ElementImage extends Component {
  constructor (props) {
    super(props)
    this.setImageSrc = debounce(1000)(this.setImageSrc.bind(this))
    this.imageSrcPlaceholder = 'http://via.placeholder.com/350x150'
    this.state = {
      elementImageSrc: null
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.targetElement !== this.props.targetElement) {
      this.setImageSrc()
    }
  }

  addCharSet (string) {
    return 'data:image/png;base64, ' + string
  }

  setImageSrc () {
    const elemRect = getDomElementRect(this.props.targetElement)
    const contentRect = getDomElementRect(
      document.querySelector('.html-content')
    )
    const pageData = {
      url: window.location.href,
      width: parseInt(contentRect.width),
      height: parseInt(contentRect.height)
    }
    const elemData = {
      width: elemRect.width,
      height: elemRect.height,
      x: elemRect.x - contentRect.x,
      y: elemRect.y - contentRect.y
    }

    this.setState({ loading: true })
    getScreenShot(pageData, elemData)
      .then(res => res.json())
      .then(res => res.imageData)
      .then(this.addCharSet)
      .then(elementImageSrc => this.setState({ elementImageSrc }))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    return (
      <div className='element-image'>
        {
          !this.state.loading &&
          <img src={this.state.elementImageSrc || this.imageSrcPlaceholder} />
        }
        {
          this.state.loading &&
          <p>Loading...</p>
        }
      </div>
    )
  }
}

ElementImage.propTypes = propTypes

export default ElementImage
