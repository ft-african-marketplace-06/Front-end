import React, { useState } from 'react'


const Owner = () => {
  const [owner, setOwner] = useState({
    Name: '',
    Location: '',
    Price: '',
  })

  return (
    <div>
      <h1> Owners Profile</h1>
      <p>Name: state.name</p>
      <p>Location: state.location </p>
      <p>Add Item Link</p>
    </div>
  )
}

export default Owner
