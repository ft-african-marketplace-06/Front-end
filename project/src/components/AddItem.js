import React, { useState } from 'react';

const initialItem = {
    name:'',
    price:'',
    location:'',
    category:'',
    owner:'',
    description:''
};


const AddItem = () => {
    const [item, setItem] = useState(initialItem)

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]:e.target.value
        });
    }

    return (
        <div className='AddItem'>
            <h2>Add Item</h2>
                <form>
                    <div className='form'>
                        <label htmlFor='name'>Name:</label><br/>
                        <input onChange={handleChange} value={state.name} name='name' id='name'/>
                    </div>

                    <div className='form'>
                        <label htmlFor='price'>Price:</label><br/>
                        <input onChange={handleChange} value={state.price} name='price' id='price'/>
                    </div>
                </form>
        </div>
    )
}

export default AddItem;