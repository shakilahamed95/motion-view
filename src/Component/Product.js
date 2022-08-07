import React from 'react';

const Product = ({ product }) => {
    const { id, name, image, regular_price, sale_price, stock } = product
    return (
        <div className=" lg:max-w-sm bg-base-100 ml-6 shadow-lg">
            <div className="card-body text-left mt-3 p-3">
                <img className='ml-20' src={image} style={{ width: "200px", height: "200px" }} alt="" />
                <div className='p-3'>
                    <h2 className=" font-semibold text-xl mt-3 hover:text-primary">{name}</h2>
                    <h3> Regular Price: {regular_price} Tk</h3>
                    <h3> Current Price: {sale_price} Tk</h3>
                    <h3>Available: {stock} pis</h3>
                </div>

            </div>
        </div>
    );
};

export default Product;