import React, { memo, useEffect } from 'react'

const Item = memo(({ user }) => {
  // useEffect(() => {
  //   console.log('Reendering Item ' + user.name)
  // })
  return <h2>{user.name}</h2>
})

export default Item
