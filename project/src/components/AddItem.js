import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialValues = {
    item_name: '',
    item_price: '',
    location_id: '',
    item_category: '',
    user_id: '',
    item_description: ''
};


const AddItem = () => {
    const [formValues, setFormValues] = useState(initialValues)
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://build-week-african-marketplace.herokuapp.com/api/locations')
            .then(res => {
                setLocations(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
        console.log(formValues);
    }

    return (
        <div className='AddItem'>
            <h2>Add Item</h2>
                <form>
                    <select name='location_id' value={formValues.location_id} onChange={handleChange}>
                        {locations.map(location => {
                            return <option 
                                key={location.location_id}
                                defaultValue={''} 
                                value={location.location_id}>
                                    {location.location_name}
                                </option>
                        })}
                    </select>
                    <label>Name:</label><br/>
                    <input type='text' onChange={handleChange} value={formValues.item_name} name='item_name' id='name'/>
                    
                    <label>Price:</label><br/>
                    <input type='text' onChange={handleChange} value={formValues.item_price} name='item_price' id='price'/>
                </form>
        </div>
    )
}

export default AddItem;