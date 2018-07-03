import React, { createContext } from 'react'

const Context = createContext()
const { Provider, Consumer } = Context

const EnhancedProvider = props => {
  return (
    <Provider value={{ html: props.html }}>
      { this.props.children }
    </Provider>
  )
}

export default {
  Provider: EnhancedProvider,
  Consumer
}