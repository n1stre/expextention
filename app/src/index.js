import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { replaceBodyContentWith } from './helpers/helperDocument'
import OriginalPageContext from './contexts/OriginalPage'
import Layout from './components/containers/Layout'

const rootElement = document.createElement('div')
const originalInnerHtml = document.body.innerHTML

const App = ({ route }) => (
  <OriginalPageContext.Provider html={originalInnerHtml}>
    <Router>
      <Layout />
    </Router>
  </OriginalPageContext.Provider>
)

replaceBodyContentWith(rootElement)
render(<App />, rootElement)
