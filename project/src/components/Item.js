import axios from "axios";
import React, { useEffect, useState } from "react";

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://build-week-african-marketplace.herokuapp.com/api/items")
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="itemList">
      {items.map((item) => {
        return (
          <div className="item" key={item.item_id}>
            <div className="itemCardLeft">
              <p className="itemName">{item.item_name}</p>
              <p className="itemCategory">Category: {item.item_category}</p>
            </div>
            <div className="itemCardRight">
              <p className="itemPrice">$ {item.item_price}/lb</p>
              <p className="itemDescription">"{item.item_description}"</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
