import React, { memo, useEffect } from 'react'
import Item from './Item'

const List = memo(({ users }) => {
  useEffect(() => {
    console.log('Reendering List')
  })
  return (
    <>
      <ul>
        {users.map((user) => (
          <Item key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
})

export default List