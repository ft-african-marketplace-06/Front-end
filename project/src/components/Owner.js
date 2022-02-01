import React, { useState, useEffect } from 'react'

const Owner = () => {
  const [owner, setOwner] = useState({
    Name: '',
    Location: '',
    Price: '',
  })
  const [image, setImage] = useState([])
  const [imageURLs, setImageURLs] = useState([])

  useEffect(() => {
    if (image.length < 1) return
    const newImageURLs = []
    imageURLs.forEach((images) => newImageURLs.push(URL.createObjectURL(image)))
    setImageURLs(newImageURLs)
  }, [image])

  const onImageChange = (e) => {
    setImage([...e.target.files])
  }

  return (
    <div>
    <div className="ownerCard">
      <h1> Owners Profile</h1>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
        {imageURLs.map(imageSRC => <img src={imageSRC} />)}
       
<div className="container">

      <p>Name: </p>
      <p>Location: </p>
      <button>Add Item</button>
</div>
</div>
    </div>
  )
}

export default Owner
