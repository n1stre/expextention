import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bem from './styleNamesBemMap'
import ResizableGridItem from './Item'
import { styleNames, styleRules } from '@helpers/helperStyle'
import './style.scss'

const propTypes = {
  isFullSize: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  template: PropTypes.string,
  childrenTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  minItemSize: PropTypes.number
}

const defaultProps = {
  childrenTitles: [],
  isFullSize: true,
  minItemSize: 25
}

class ResizableGrid extends Component {
  constructor (props) {
    super(props)
    this.gridRef = React.createRef()
    this.resetTemplateDefaults = this.resetTemplateDefaults.bind(this)
    this.setGridRect = this.setGridRect.bind(this)
    this.getClientMousePosition = this.getClientMousePosition.bind(this)
    this.isDimensionValid = this.isDimensionValid.bind(this)
    this.setTemplate = this.setTemplate.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.makeOnSeparatorMouseDown = this.makeOnSeparatorMouseDown.bind(this)
    this.state = {
      childrenCount: React.Children.count(props.children),
      template: props.template ? props.template.split(' ') : [],
      resizeStartingPoint: null,
      resizableChild: {
        index: null,
        elementDimension: null,
        prevElementDimension: null
      },
      gridRect: {
        hasBeenSet: false,
        height: undefined,
        width: undefined
      }
    }
  }

  componentDidMount () {
    this.setGridRect()
    if (this.state.template.length !== this.state.childrenCount) {
      this.resetTemplateDefaults()
    }
  }

  get gridClassName () {
    return styleNames(
      bem.resizableGrid,
      this.props.isFullSize && bem.resizableGrid.isFullSize,
      this.props.isHorizontal && bem.resizableGrid.isHorizontal
    )
  }

  get templateStyleProp () {
    return this.props.isHorizontal
      ? 'gridTemplateColumns'
      : 'gridTemplateRows'
  }

  get templateStyle () {
    return {
      [this.templateStyleProp]: this.state.template.join(' ')
    }
  }

  get gridStyle () {
    return styleRules(
      Boolean(this.props.template) && this.templateStyle
    )
  }

  get templateFallback () {
    return React.Children.map(this.props.children, (child, idx) => {
      return this.state.template[idx] || 'auto'
    })
  }

  resetTemplateDefaults () {
    const template = this.templateFallback
    console.warn('Grid template does not match childrens size')
    console.warn('Using fallback: ', template.join(' '))
    this.setState({ template })
  }

  setTemplate (newTemplateOptions) {
    const oldTemplate = [ ...this.state.template ]
    const template = newTemplateOptions.reduce((newTemplate, nextOption) => {
      newTemplate[nextOption.index] = nextOption.value + 'px'
      return newTemplate
    }, oldTemplate)

    this.setState({ template })
  }

  setGridRect () {
    const { offsetWidth, offsetHeight } = this.gridRef.current

    this.setState({
      gridRect: {
        hasBeenSet: true,
        height: offsetHeight,
        width: offsetWidth
      }
    })
  }

  isDimensionValid (dimention) {
    return dimention > this.props.minItemSize
  }

  getElementDimension (element) {
    return this.props.isHorizontal
      ? element.offsetWidth
      : element.offsetHeight
  }

  getClientMousePosition (evt) {
    return this.props.isHorizontal
      ? evt.clientX
      : evt.clientY
  }

  onMouseMove (evt) {
    if (
      !this.state.gridRect.hasBeenSet ||
      !this.state.resizableChild.elementDimension ||
      !this.state.resizableChild.prevElementDimension ||
      !this.state.resizeStartingPoint
    ) return

    const {
      index,
      elementDimension,
      prevElementDimension
    } = this.state.resizableChild

    const dimensionDiff = (
      this.state.resizeStartingPoint -
      this.getClientMousePosition(evt)
    )
    const elementNewDimension = elementDimension + dimensionDiff
    const prevElementNewDimension = prevElementDimension - dimensionDiff

    if (
      this.isDimensionValid(elementNewDimension) &&
      this.isDimensionValid(prevElementNewDimension)
    ) {
      this.setTemplate([
        {
          index,
          value: elementNewDimension
        },
        {
          index: index - 1,
          value: prevElementNewDimension
        }
      ])
    }
  }

  makeOnSeparatorMouseDown (index) {
    return (evt) => {
      const gridElement = evt.target.parentNode
      const prevGridElement = evt.target.parentNode.previousSibling

      if (!gridElement || !prevGridElement) {
        return
      }

      this.setState({
        resizeStartingPoint: this.getClientMousePosition(evt),
        resizableChild: {
          index,
          elementDimension: this.getElementDimension(gridElement),
          prevElementDimension: this.getElementDimension(prevGridElement)
        }
      })
    }
  }

  onMouseUp () {
    if (this.state.resizableChild.elementDimension) {
      this.setState({
        resizableChild: {
          index: null,
          elementDimension: null,
          prevElementDimension: null
        },
        resizeStartingPoint: null
      })
    }
  }

  render () {
    return (
      <div
        ref={this.gridRef}
        className={this.gridClassName}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        style={this.gridStyle}>
        { React.Children.map(this.props.children, (child, idx) => (
          <ResizableGridItem
            separatorTitle={this.props.childrenTitles[idx]}
            onSeparatorMouseDown={this.makeOnSeparatorMouseDown(idx)}
            key={idx}>
            { child }
          </ResizableGridItem>
        ))}
      </div>
    )
  }
}

ResizableGrid.propTypes = propTypes
ResizableGrid.defaultProps = defaultProps

export default ResizableGrid
