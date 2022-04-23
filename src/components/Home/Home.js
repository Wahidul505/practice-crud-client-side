import React from 'react';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>Your Products</h2>
            <hr />
            {
                products?.map(product => <div key={product._id}>
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                </div>)
            }
        </div>
    );
};

export default Home;