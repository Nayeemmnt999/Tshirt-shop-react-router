import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Home.css'

export const contexApi = createContext('nayeem')

const Home = () => {
    const products = useLoaderData()

    const [cart, setCount] = useState([])

    const productCount = products => {
        const alredyExist = cart.find(te => te._id === products._id)
        if (alredyExist) {
            alert('alredy added')
        }
        else {
            const counter = [...cart, products];
            setCount(counter)
        }

    }
    const removeItem = carts => {
        const exixtRemove = cart.filter(te => te._id !== carts._id);
        setCount(exixtRemove)
    }

    return (
        <div className='mian-container mt-10'>
            <div className='product-container grid grid-cols-3 gap-7 justify-items-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        productCount={productCount}
                    ></Product>)
                }
            </div>
            <contexApi.Provider value = {removeItem}>
                <div className='cart-container'>
                    <Cart
                        cart={cart}
                        // removeItem={removeItem}
                    ></Cart>
                </div>
            </contexApi.Provider>

        </div>
    );
};

export default Home;