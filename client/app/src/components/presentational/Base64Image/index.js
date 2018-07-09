import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  rawSrc: PropTypes.string.isRequired
}

const Base64Image = (props) => {
  const src = 'data:image/png;base64,' + props.rawSrc
  return (
    <img src={src} />
  )
}

Base64Image.propTypes = propTypes

export default Base64Image
