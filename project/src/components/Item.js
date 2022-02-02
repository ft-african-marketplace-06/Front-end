import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get('https://build-week-african-marketplace.herokuapp.com/api/items')
    .then(res => {
      setItems(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, []);

  return(
    <div className="itemList">
      {items.map(item => {
        return (
          <div className='item' key={item.item_id}>
            <p>{item.item_name}</p>
            <p>{item.item_price}</p>
          </div>
          )
      })}

   </div>
  )
}

export default Item;