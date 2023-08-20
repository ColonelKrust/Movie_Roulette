import React from 'react'
import { createRoot } from 'react-dom/client'

class App extends React.Component {
  constructor(){

  }

  render() {

  }
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)