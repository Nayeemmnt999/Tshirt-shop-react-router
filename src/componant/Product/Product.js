import React from 'react';

const Product = ({product, productCount}) => {
    const {name, picture, price, }= product
    return (
        <div className=' border p-10'>
            <img className=' h-72 w-52 items-center' src={picture} alt="" />
            <p className='font-bold'>{name}</p>
            <p className=' text-amber-500 font-bold'>${price}</p>
            <button onClick={()=>productCount(product)} className=' group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900'>Buy Now</button>

        </div>
    );
};

export default Product;