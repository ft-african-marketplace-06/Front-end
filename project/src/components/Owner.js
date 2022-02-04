import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

const Owner = () => {
 const [owner, setOwner] = useState({
  Name: "",
  Location: "",
  Price: "",
 });
 const [image, setImage] = useState([]);
 const [imageURLs, setImageURLs] = useState([]);

 const history = useHistory();

 useEffect(() => {
  if (image.length < 1) return;
  const newImageURLs = [];
  imageURLs.forEach((images) => newImageURLs.push(URL.createObjectURL(image)));
  setImageURLs(newImageURLs);
 }, [image]);

 const onImageChange = (e) => {
  setImage([...e.target.files]);
 };

 const handleLogout = () => {
  history.push("/logout");
 };

 return (
  <div>
   <div className='ownerCard'>
    <h1> Owners Profile</h1>
    <input type='file' multiple accept='image/*' onChange={onImageChange} />
    {imageURLs.map((imageSRC) => (
     <img src={imageSRC} />
    ))}

    <div className='container'>
     <p>Name: </p>
     <p>Location: </p>
     <Link to='/add-item'>
      <button>Add Item</button>
     </Link>
     <button onClick={handleLogout}>Logout</button>
    </div>
   </div>
  </div>
 );
};

export default Owner;
