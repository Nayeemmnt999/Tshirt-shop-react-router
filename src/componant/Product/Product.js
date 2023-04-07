import React from 'react';

const Product = ({product}) => {
    const {name, picture, price, }= product
    return (
        <div className=' border'>
            <img className=' h-72 w-52' src={picture} alt="" />
            <p className='font-bold'>{name}</p>
            <p className=' text-amber-500 font-bold'>${price}</p>

        </div>
    );
};

export default Product;