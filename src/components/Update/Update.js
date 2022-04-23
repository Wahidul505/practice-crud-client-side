import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[id]);

    const handleGetName = e =>{
        const name = e.target.value;
        setName(name);
    };
    const handleGetPrice = e =>{
        const price = e.target.price;
        setPrice(price);
    }
    const handleUpdateProduct = e => {
        e.preventDefault();
        const product = { name, price };
        fetch(`http://localhost:5000/product/${id}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <div>
            <h2>Update: {product?.name}</h2>
            <hr />
            <form onSubmit={handleUpdateProduct} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '70%', margin: '0px auto' }}>
                <input onChange={handleGetName} placeholder='Name' type="text" name="name" id="name" defaultValue={product?.name || ''}  required/>
                <input onChange={handleGetPrice} placeholder='Price' type="number" name="price" id="price" defaultValue={product?.price}required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Update;