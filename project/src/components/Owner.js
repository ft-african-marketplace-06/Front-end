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
    setImages([...e.target.files])
  }

  return (
    <div>
      <h1> Owners Profile</h1>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
        {imageURLs.map(imageSRC => <img src={imageSrc} />)}

      <p>Name: state.name</p>
      <p>Location: state.location </p>
      <p>Add Item Link</p>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </div>
  )
}

export default Owner
