import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  html: PropTypes.string.isRequired,
}

const HtmlContent = (props) => {
  const style = {
    width: '100%',
    height: '100%',
    overflow: "scroll"
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.html }}
      style={style}
    />
  )
}
HtmlContent.propTypes = propTypes

export default HtmlContent
