import React, { Component } from 'react'

const defaultState = {
  html: null,
  activeElement: null,
  pointedElement: null,
  setActiveElement: () => {},
  setPointedElement: () => {}
}
const Context = React.createContext(defaultState)

class EnhancedProvider extends Component {
  constructor (props) {
    super(props)
    this.setActiveElement = this.setActiveElement.bind(this)
    this.setPointedElement = this.setPointedElement.bind(this)

    this.state = {
      ...defaultState,
      html: props.html,
      setActiveElement: this.setActiveElement,
      setPointedElement: this.setPointedElement
    }
  }

  setPointedElement (element) {
    this.setState({ pointedElement: element })
  }

  setActiveElement (element) {
    this.setState({ activeElement: element })
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
export const Provider = EnhancedProvider

export default {
  Provider: EnhancedProvider,
  Consumer: Context.Consumer
}
