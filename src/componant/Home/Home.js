import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className='mian-container'>
            <div className='product-container grid grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;