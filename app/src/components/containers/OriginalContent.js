import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class OriginalContent extends Component {
  static propTypes = {
    html: PropTypes.string.isRequired,
  }

  get style() {
    return {
      width: '100%',
      height: '100%',
      overflow: "scroll"
    }
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.props.html }}
        style={this.style}
      />
    )
  }
}

export default OriginalContent;
