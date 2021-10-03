import React, { memo, useEffect } from 'react'

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    console.log('Reendering Item ' + user.name)
  })
  return (
    <li>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  )
})

export default Item
