import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexApi } from '../Home/Home';

const Cart = ({ cart}) => {
    // const price = productCount.price;
    // console.log(price);
    // const total = parseInt(price) + count
    const removeItem = useContext(contexApi)
    let message;
    if(cart.length === 0 ){
        message = <div>
            <p>Please buy a product</p>
            <Link className=  {`bg-red-600   p-1  rounded font-sans text-white font-bold`}  to={'/order'}>buy product</Link>
        </div>;
    }
    else if(cart.length === 3){
        message = 'ore boka taka sasroy kor'
    }
    else{
        message = 'Thanks for choosing me'
    }


    return (


        <div>
            <h4>Order Review</h4>

            {
                cart.map(product =>
                    <p key={product._id}>
                        {product.name}
                        <button onClick={() => removeItem(product)} className=' ml-5 text-red-500 font-bold'>X</button>
                    </p>

                )
            }
            <p className=' font-bold'>product {cart.length}</p>
            <p>{message}</p>
            {
                cart.length >= 3 ? <Link className=' bg-red-600 p-1  rounded font-sans text-white font-bold'>not buy</Link> :<Link className={`  ${cart.length === 2 ? 'bg-gray-950' : 'bg-pink-600'}   bg-red-600 p-1  rounded font-sans text-white font-bold`}>lets buy</Link>
            }
        </div>
    );
};

export default Cart;