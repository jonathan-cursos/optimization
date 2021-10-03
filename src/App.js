import React, { useEffect, useState, useMemo, useCallback } from 'react'
import List from './List'

const initialUsers = [
  { id: 1, name: 'Luis' },
  { id: 2, name: 'María' }
]

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('Reendering App')
  })

  const handleClick = () => {
    setUsers([...users, { id: Date.now(), name: text }])
  }

  // const handleDelete = (userId) => {
  //   setUsers(users.filter((user) => user.id !== userId))
  // }

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId))
    },
    [users]
  )

  // const filteredUsers = users.filter((user) => {
  //   console.log('filtered process')
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        // console.log('filtered process')
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
    [search, users]
  )

  const handleSearch = () => {
    // console.log('search')
    setSearch(text)
  }

  return (
    <div className='App'>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button type='button' onClick={handleSearch}>
        Buscar
      </button>
      <button type='button' onClick={handleClick}>
        Agregar
      </button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  )
}

export default App
