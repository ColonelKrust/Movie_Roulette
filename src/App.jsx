import React from 'react'
import { createRoot } from 'react-dom/client'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <text>This is rendering!</text>
      </div>
    )
  }
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)