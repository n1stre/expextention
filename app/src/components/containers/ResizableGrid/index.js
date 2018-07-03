import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BemMap from '../../../utils/BemMap';
import Container from './Container';

const bem = BemMap.create((b,e,m) => ({
  resizableGrid: b('resizable-grid', {
    unidir: m('unidirectional'),
    container: e('container'),
    separatorTitle: e('separator-title'),
    separator: e('separator', {
      withTitle: m('with-title')
    })
  })
}));

const propTypes = {
  isHozinotal: PropTypes.bool,
  childrenFlex: PropTypes.arrayOf(PropTypes.number),
  childrenTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  Separator: PropTypes.node,
}

export default class ResizableGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childrenFlex: [...props.childrenFlex]
    }
  }

  get DefaultSeparator({ title = '', idx }) {
    return (
      <div className={bem.resizer.separator}>
        {title}
      </div>
    )
  }

  get Separator() {
    return this.props.Separator || this.DefaultSeparator
  }

  render() {
    const { Separator, Container } = this;

    return (
      <div
        className={bmp.resizableGrid}
        onMouseMove={this.onMouseMove}>
        { React.Children.map((child, idx) => (
            <React.Fragment key={idx}>
              { (index !== 0 || this.props.childrenTitles[index]) &&
                <Separator
                  onMouseDown={this.makeOnMouseDown(index)}
                  onMouseUp={this.makeOnMouseUp(index)}
                  className={bmp.resizableGrid.separator}
                  titleClassName={bmp.resizableGrid.separatorTitle}
                  title={this.props.childrenTitles[index]}
                />
              }
              { child }
            </React.Fragment>
          ))
        }
      </div>
    )
  }
}

ResizableGrid.propTypes = propTypes;