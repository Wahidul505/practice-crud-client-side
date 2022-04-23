import React from 'react';

const Add = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const product = { name, price };
        console.log(product);
        fetch('http://localhost:5000/product', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <div>
            <h2>Add Your Product</h2>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '70%', margin: '0px auto' }}>
                <input placeholder='Name' type="text" name="name" id="name"  required/>
                <input placeholder='Price' type="number" name="price" id="price" required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Add;