import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Manage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
        });
    };
    return (
        <div>
            <h2>Manage Your Products</h2>
            <hr />
            {
                products?.map(product => <div key={product._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '70%', margin: '0 auto' }} >
                    <h4>{product.name}</h4>
                    <div>
                        <button onClick={()=>navigate(`/update/${product._id}`)} style={{ marginRight: '8px' }}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Manage;