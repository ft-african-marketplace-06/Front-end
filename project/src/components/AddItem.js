import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues = {
    location_id: '',
    item_name: '',
    item_price: '',
    item_category: '',
    item_description: '',
    user_id: localStorage.getItem('user_id')
};


const AddItem = () => {
    const [formValues, setFormValues] = useState(initialValues)
    const [locations, setLocations] = useState([]);

    const handlePush = useHistory();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://build-week-african-marketplace.herokuapp.com/api/items', formValues)
            .then(resp=> {
                handlePush('/shop');
                console.log(resp)
            })
            .catch(err => {
                console.log(err);
            })   

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
                    <label>Name:</label>
                    <input type='text' onChange={handleChange} value={formValues.item_name} name='item_name' id='name'/>
                    
                    <label>Price:</label>
                    <input type='text' onChange={handleChange} value={formValues.item_price} name='item_price' id='price'/>

                    <label>Category:</label>
                    <input type='text' onChange={handleChange} value={formValues.item_category} name='item_category' id='category'/>

                    <label>Description:</label>
                    <input type='text' onChange={handleChange} value={formValues.item_description} name='item_description' id='description'/>
                    <button onClick={handleSubmit}>Add Item</button>
                </form>
        </div>
    )
}

export default AddItem;