import React, { useEffect, useState } from 'react'
import List from './List'

const initialUsers = [
  { id: 1, name: 'Luis' },
  { id: 2, name: 'María' }
]

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [text, setText] = useState('Nuevo')

  useEffect(() => {
    console.log('Reendering App')
  })

  const handleClick = () => {
    setUsers([...users, { id: Date.now(), name: text }])
  }

  return (
    <div className='App'>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button type='button' onClick={handleClick}>
        Agregar
      </button>
      <List users={users} />
    </div>
  )
}

export default App
