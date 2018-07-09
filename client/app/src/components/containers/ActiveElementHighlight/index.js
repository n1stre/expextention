import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styleRules, styleNames } from '@helpers/helperStyle'
import { getDomElementStyle, getDomElementRect } from '@helpers/helperDocument'
import bem from './styleNamesBemMap'
import './style.scss'

const propTypes = {
  targetElement: PropTypes.object,
  setPointedElement: PropTypes.func.isRequired
}

class ActiveElementHighlight extends Component {
  constructor (props) {
    super(props)
    this.highlighterRef = React.createRef()
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  get activeElementStyle () {
    return getDomElementStyle(this.props.targetElement)
  }

  get activeElementRect () {
    return getDomElementRect(this.props.targetElement)
  }

  get boxStyle () {
    const { x, y, width, height } = this.activeElementRect
    const {
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    } = this.activeElementStyle

    const style = styleRules(
      x && { left: x },
      y && { top: y },
      height && { height },
      width && { width },
      paddingTop && { borderTopWidth: paddingTop },
      paddingRight && { borderRightWidth: paddingRight },
      paddingBottom && { borderBottomWidth: paddingBottom },
      paddingLeft && { borderLeftWidth: paddingLeft }
    )

    return style
  }

  get tooltipStyle () {
    return styleRules(

    )
  }

  get className () {
    return styleNames(
      bem.elementHighlight,
      this.props.targetElement && bem.elementHighlight.withElement
    )
  }

  onMouseOver (evt) {
    return this.props.setPointedElement(evt.target)
  }

  render () {
    return (
      <div
        ref={this.highlighterRef}
        onMouseOver={this.onMouseOver}
        className={this.className}>
        <div
          className={bem.elementHighlight.box}
          style={this.boxStyle}
        />
        <div className={bem.elementHighlight.tooltip} />
        { this.props.children }
      </div>
    )
  }
}

ActiveElementHighlight.propTypes = propTypes

export default ActiveElementHighlight
