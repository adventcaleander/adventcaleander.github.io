import React from 'react'
import Calendar from './components/Calendar'
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <h1>Advent Calendar</h1>
      <Calendar />
      <Modal />
    </div>
  )
}

export default App