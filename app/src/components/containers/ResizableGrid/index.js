import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bem from './styleNamesBemMap'
import './style.scss'

const propTypes = {
  isHozinotal: PropTypes.bool,
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  childrenTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  Separator: PropTypes.node
}

export default class ResizableGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      childrenFlex: [...props.childrenFlex]
    }
  }

  get gridStyle () {

  }

  render () {
    return (
      <div
        className={bem.resizableGrid}
        onMouseMove={this.onMouseMove}>
        { React.Children.map(this.props.children, (child, idx) => (
          <React.Fragment key={idx}>
            {/* {
              (idx !== 0 || this.props.childrenTitles[idx]) &&
              <Separator
                onMouseDown={this.makeOnMouseDown(idx)}
                onMouseUp={this.makeOnMouseUp(idx)}
                className={bem.resizableGrid.separator}
                titleClassName={bem.resizableGrid.separatorTitle}
                title={this.props.childrenTitles[idx]}
              />
            } */}
            {
              child
            }
          </React.Fragment>
        ))}
      </div>
    )
  }
}

ResizableGrid.propTypes = propTypes
